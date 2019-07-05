import React, { Component } from "react";
import Layout from "../layout/Layout";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PostItem from "../components/PostItem";

export class Blog extends Component {
    render() {
        return (
            <Layout>
                <h1>Blog Page</h1>
                <Query query={POSTS_QUERY}>
                    {({ loading, error, data }) => {
                        console.log("posts data", data);
                        if (loading) return "Loading";
                        if (error) console.log(error);

                        return (
                            <React.Fragment>
                                {data.posts.map(post => (
                                    <PostItem key={post.is} post={post} />
                                ))}
                            </React.Fragment>
                        );
                    }}
                </Query>
            </Layout>
        );
    }
}

export default Blog;
