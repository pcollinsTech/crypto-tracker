import React, { Component } from 'react'
import Layout from '../modules/Layout';

export class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    
  }
  

  render() {
    return (
      <Layout>
        <h1>Blog Page</h1>
      </Layout>
    )
  }
}

export default Blog
