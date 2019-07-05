import React, { useContext, Fragment, useEffect } from "react";
import MarketRow from "./MarketRow";
import Spinner from "../../layout/Spinner";
import ExchangeContext from "../../context/exchange/exchangeContext";

const AssetMarket = () => {
    const exchangeContext = useContext(ExchangeContext);

    const { getExchanges, exchanges, loading } = exchangeContext;
    useEffect(() => {
        getExchanges();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <Spinner />;

    const onSort = (event, sortKey) => {
        return console.log("Attemp Search filter");
    };
    return (
        <Fragment>
            <h1 className="display-4 my-3">Asset Market</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col" onClick={e => onSort(e, "exchangeId")}>
                            Exchange
                        </th>
                        <th scope="col" onClick={e => onSort(e, "baseSymbol")}>
                            Symbol
                        </th>
                        <th scope="col" onClick={e => onSort(e, "priceUsd")}>
                            Price ($)
                        </th>
                        <th scope="col" onClick={e => onSort(e, "volumeUsd24Hr")}>
                            24hr Trading Volume
                        </th>
                        <th scope="col" onClick={e => onSort(e, "volumePercent")}>
                            Total Volume Percent
                        </th>
                    </tr>
                </thead>

                {exchanges.map(market => (
                    <MarketRow key={market.id} market={market} />
                ))}
            </table>
        </Fragment>
    );
};

export default AssetMarket;
