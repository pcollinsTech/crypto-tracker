import React, { useContext, useEffect } from "react";
import PostContext from "../context/post/postContext";
import Layout from "../layout/Layout";
import News from "../components/News";

const ExchangeFinder = () => {
    const postContext = useContext(PostContext);

    const { getPosts, posts } = postContext;

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(posts);
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <h1>Blog</h1>
                    <News posts={posts} />;
                </div>
            </div>
        </Layout>
    );
};

export default ExchangeFinder;
