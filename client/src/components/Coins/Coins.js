import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CoinItem  from './CoinItem'



const COINS_QUERY = gql`
    query CoinsQuery {
        coins{
            id
            name
            symbol
            slug
            is_active
            first_historical_data
            last_historical_data
            platform {
              id
            }
        }
    }
`;

export class Coins extends Component {
    constructor(props) {
        super(props)
        this.state={
            // currencyList: countries.default,
            currency: ""
        }
    }

    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Coins</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Price ($)</th>
                            <th scope="col">Price (btc)</th>
                            {/* <th scope="col">24hr Trading Volume</th> */}
                            <th scope="col">Market Cap USD</th>
                            <th scope="col">Available Supply</th>
                            <th scope="col">Total Supply</th>
                            <th scope="col">24hr percenage change</th>
                        </tr>
                    </thead>
                    
                        <Query query={COINS_QUERY}>
                            {({ loading, error, data }) => {
                                console.log("data",data)
                                if (loading) return 'Loading' ;
                                if (error) console.log(error);
                                return (
                                    <Fragment>
                                        {data.coins.map(coin => <CoinItem key={coin.id} coin={coin} />)}
                                    </Fragment>
                                );
                            }}

                        </Query>
                    </table>
                
                
            </Fragment>
        );
    }
}

export default Coins;
