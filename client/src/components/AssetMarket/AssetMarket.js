import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MarketRow from "./MarketRow";

const ASSET_MARKET_QUERY = gql`
    query AssetMarketQuery {
        assetmarket {
            exchangeId
            baseSymbol
            volumeUsd24Hr
            priceUsd
            volumePercent
        }
    }
`;

export class AssetMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // currencyList: countries.default,
            currency: "",
            data: ""
        };
    }
    onSort(event, sortKey) {
        event.preventDefault();
        const sortData = this.state.data;
        console.log("THIS IS THE DATA", this.state.data);
        sortData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        this.setState({ ...this.state, data: sortData });
    }
    render() {
        console.log("YOOOO", this.state);
        return (
            <Fragment>
                <h1 className="display-4 my-3">Asset Market</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col" onClick={e => this.onSort(e, "exchangeId")}>
                                Exchange
                            </th>
                            <th scope="col" onClick={e => this.onSort(e, "baseSymbol")}>
                                Symbol
                            </th>
                            <th scope="col" onClick={e => this.onSort(e, "priceUsd")}>
                                Price ($)
                            </th>
                            <th scope="col" onClick={e => this.onSort(e, "volumeUsd24Hr")}>
                                24hr Trading Volume
                            </th>
                            <th scope="col" onClick={e => this.onSort(e, "volumePercent")}>
                                Total Volume Percent
                            </th>
                        </tr>
                    </thead>

                    <Query query={ASSET_MARKET_QUERY}>
                        {({ loading, error, data }) => {
                            console.log("data", data);

                            if (loading) return "Loading";
                            if (error) console.log(error);

                            return (
                                <Fragment>
                                    {data.assetmarket.map(market => (
                                        <MarketRow key={market.id} market={market} />
                                    ))}
                                </Fragment>
                            );
                        }}
                    </Query>
                </table>
            </Fragment>
        );
    }
}

export default AssetMarket;
