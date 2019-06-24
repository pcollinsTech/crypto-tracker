const axios = require('axios');
const WooCommerceAPI = require("woocommerce-api");
const { MapRequest } = require('./Requests/CoinMarketCap/requests')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
} = require('graphql');

const PriceType = new GraphQLObjectType({
    name: 'Prices',
    fields:{
      currency: { type: GraphQLString },
      price: { type: GraphQLFloat },
    }
})


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    prices: {
      type: new GraphQLList(PriceType),
      resolve() {
        return  axios
          .get(`http://localhost:8080/prices`)
          .then(res => res.data)
          .catch(error => console.log("error", error));
      }
    },
    coins: MapRequest,
    
  }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});;