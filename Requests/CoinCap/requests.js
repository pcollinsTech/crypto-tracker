const { AssetMarketType } = require("./types.js");
const axios = require("axios");
const { GraphQLString, GraphQLList } = require("graphql");

const AssetMarketRequest = {
    type: new GraphQLList(AssetMarketType),
    args: {
        symbol: { type: GraphQLString }
    },
    resolve(_, args) {
        console.log(args.symbol);
        const { symbol } = args;
        return axios.get("https://api.coincap.io/v2/" + symbol + "/markets").then(res => {
            // console.log("THIS IS THE RES *************************************", res.data);
            return res.data.data;
        });
        // .catch(err => console.log("THIS SI THE ERRORRR *************************************", err));
    }
};

module.exports = {
    AssetMarketRequest
};
