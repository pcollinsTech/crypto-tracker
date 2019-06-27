const { AssetMarketType } = require("./types.js");
const axios = require("axios");
const { GraphQLList } = require("graphql");

const AssetMarketRequest = {
    type: new GraphQLList(AssetMarketType),
    resolve(_) {
        const url = `https://api.coincap.io/v2/assets/bitcoin/markets`;
        return axios
            .get(url)
            .then(res => {
                return res.data.data;
            })
            .catch(error => console.log("CoinCap AssetMarketRequest error", error));
    }
};

module.exports = {
    AssetMarketRequest
};
