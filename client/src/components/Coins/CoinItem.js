import React, { Component } from 'react'
import axios from 'axios';


class CointItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coin: this.props.coin,
            coinInfo: {}
        }
    }

    componentDidMount() {
        // return axios
        //     .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${this.props.coin.symbol}`)
        //     .then( res => {
        //         console.log("CoinItme", res.data);
        //         return this.setState({
        //             ...this.state,
        //             coinInfo: res.data
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

    }
  render() {
      console.log("COintItem State", this.state)
      const {id,
            name,
            symbol,
            rank,
            price_usd,
            price_btc,
            h24_volume_usd,
            market_cap_usd,
            available_supply,
            total_supply,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            currency
      } = this.state.coin;
      let price = parseFloat(price_usd).toFixed(2);
      return (
          <tr>
              <th scope="row">{rank}</th>
              <td>{name}</td>
              {/* <td>{symbol}</td> */}
              <td>{price}</td>
              <td>{price_btc}</td>
              {/* <td>{h24_volume_usd}</td> */}
              <td>{market_cap_usd}</td>
              <td>{available_supply}</td>
              <td>{total_supply}</td>
              <td>{percent_change_24h}%</td>
          </tr>
      );
  }
}

export default CointItem
