const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');


const ContentType = new GraphQLObjectType({
  name: 'Content',
  fields: {
    rendered: { type: GraphQLString },
  }
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    date: { type: GraphQLString },
    type: { type: GraphQLString },
    slug: { type: GraphQLString },
    status: { type: GraphQLString },
    title: { type: ContentType },
    content: { type: ContentType },
    excerpt: { type: ContentType },
    author: { type: GraphQLInt },
    featured_media: { type: GraphQLInt },
    comment_status: { type: GraphQLString },
    categories: { type: new GraphQLList(GraphQLInt) }
  }
})


module.exports = {
  PostType
}