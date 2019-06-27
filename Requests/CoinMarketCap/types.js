const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLScalarType,
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

const PriceType = new GraphQLObjectType({
  name: 'Price',
  fields: {
    price: { type: GraphQLFloat },
    volume_24h: { type: GraphQLFloat },
    percent_change_1h: { type: GraphQLFloat },
    percent_change_24h: { type: GraphQLFloat },
    percent_change_7d: { type: GraphQLFloat },
    market_cap: { type: GraphQLFloat },
    last_updated: { type: GraphQLString }
  }
})

const CurrencyType = new GraphQLObjectType({
  name:'currency',
  fields: {
    USD: { type: PriceType}
  }
})

const CoinListingType = new GraphQLObjectType({
  name: 'CoinListing',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    symbol: { type: GraphQLString },
    slug: { type: GraphQLString },
    circulating_supply: { type: GraphQLFloat },
    total_supply: { type: GraphQLFloat },
    max_supply: { type: GraphQLFloat },
    date_added: { type: GraphQLString },
    num_market_pairs: { type: GraphQLInt },
    cmc_rank: { type: GraphQLInt },
    last_updated: { type: GraphQLString },
    quote: { type: CurrencyType}
  }
})



module.exports = {
  MapType, PlatformType, CoinListingType
}