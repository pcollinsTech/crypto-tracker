const axios = require("axios");
const { CoinListRequest } = require("./Requests/CoinMarketCap/requests");
const { PostRequest } = require("./Requests/Wordpress/requests");
const { AssetMarketRequest } = require("./Requests/CoinCap/requests");
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } = require("graphql");

const PriceType = new GraphQLObjectType({
    name: "Prices",
    fields: {
        currency: { type: GraphQLString },
        price: { type: GraphQLFloat }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        prices: {
            type: new GraphQLList(PriceType),
            resolve() {
                return axios
                    .get(`http://localhost:8080/prices`)
                    .then(res => res.data)
                    .catch(error => console.log("error", error));
            }
        },
        coins: CoinListRequest,
        posts: PostRequest,
        assetmarket: AssetMarketRequest
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
