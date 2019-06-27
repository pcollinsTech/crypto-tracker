import React, { Component } from "react";
import Layout from "../modules/Layout";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PostItem from "../components/PostItem";

const POSTS_QUERY = gql`
    query PostsQuery {
        posts {
            date
            type
            id
            slug
            status
            title {
                rendered
            }
            content {
                rendered
            }
            excerpt {
                rendered
            }
            author
            featured_media
            comment_status
            categories
        }
    }
`;

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
