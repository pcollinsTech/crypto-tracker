const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = require("graphql");

const AssetMarketType = new GraphQLObjectType({
    name: "AssetMarket",
    fields: {
        exchangeId: { type: GraphQLString },
        baseId: { type: GraphQLString },
        quoteId: { type: GraphQLString },
        baseSymbol: { type: GraphQLString },
        quoteSymbol: { type: GraphQLString },
        volumeUsd24Hr: { type: GraphQLFloat },
        priceUsd: { type: GraphQLFloat },
        volumePercent: { type: GraphQLFloat }
    }
});

module.exports = {
    AssetMarketType
};
