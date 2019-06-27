const {
  MapType, CoinListingType
} = require('./types.js')
const axios = require('axios')
const { GraphQLList } = require('graphql')


const MapRequest = {
  type: new GraphQLList(MapType),
  resolve(_, { id }) {
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`
    const key = process.env.API_KEY_COINMARKET;
    return axios
      .get(url, { headers: { "X-CMC_PRO_API_KEY": key } })
      .then(res => {
        return res.data.data;
      })
      .catch(error => console.log("Coinmarketcap MapRequest error", error));
  }
}

const CoinListRequest = {
  type: new GraphQLList(CoinListingType),
  resolve(_, { id }) {
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`
    const key = process.env.API_KEY_COINMARKET;
    return axios
      .get(url, { headers: { "X-CMC_PRO_API_KEY": key } })
      .then(res => {
        return res.data.data;
      })
      .catch(error => console.log("Coinmarketcap MapRequest error", error));
  }
}

module.exports = {
  MapRequest, CoinListRequest
}