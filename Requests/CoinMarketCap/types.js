const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');


const PlatformType = new GraphQLObjectType({
  name: 'Platform',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    symbol: { type: GraphQLInt },
    slug: { type: GraphQLInt },
    token_address: { type: GraphQLInt },

  }
})
const  MapType = new GraphQLObjectType({
  name: 'Coin',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    symbol: { type: GraphQLString },
    slug: { type: GraphQLString },
    is_active: { type: GraphQLString },
    first_historical_data: { type: GraphQLString },
    last_historical_data: { type: GraphQLString },
    platform: { type: PlatformType },
  }
});

CoinListingType = new GraphQLObjectType({
  name: 'CoinListing',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    symbol: { type: GraphQLString },
    slug: { type: GraphQLString },
    circulating_supply: { type: GraphQLInt },
    total_supply: { type: GraphQLInt },
    max_supply: { type: GraphQLInt },
    date_added: { type: GraphQLString },
    num_market_pairs: { type: GraphQLInt },
    // tags: { tpye: new GraphQLList({ type: GraphQLString }) },
    cmc_rank: { type: GraphQLInt },
    last_updated: { type: GraphQLString },
    // "quote": {
    //   "USD": {
    //     "price": 5583.0422343,
    //     "volume_24h": 15801727460.8433,
    //     "percent_change_1h": 0.244992,
    //     "percent_change_24h": 3.29191,
    //     "percent_change_7d": 6.70303,
    //     "market_cap": 98605737877.42459,
    //     "last_updated": "2019-04-23T23:24:31.000Z"
    //   }
    // }
  }
})



module.exports = {
MapType, PlatformType, CoinListingType
}