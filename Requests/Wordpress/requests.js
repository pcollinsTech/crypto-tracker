const {
  PostType,
} = require('./types.js')
const axios = require('axios')
const { GraphQLList } = require('graphql')


const PostRequest = {
  type: new GraphQLList(PostType),
  resolve(_, { id }) {
    const url = `https://cryptocoach.com/wp-json/wp/v2/posts`
    return axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .catch(error => console.log("Wordpress PostRequest error", error));
  }
}

module.exports = {
  PostRequest
}