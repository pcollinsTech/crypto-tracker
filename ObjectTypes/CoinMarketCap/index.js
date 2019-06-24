const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');


export default PlatformType = new GraphQLObjectType({
  name: 'Platform',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    symbol: { type: GraphQLInt },
    slug: { type: GraphQLInt },
    token_address: { type: GraphQLInt },

  }
})
export default  CoinType = new GraphQLObjectType({
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