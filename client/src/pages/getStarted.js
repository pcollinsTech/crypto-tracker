import React from "react";
import Layout from "../layout/Layout";

const GetStarted = props => {
    console.log("GETSTARTED", props);
    return (
        <Layout props={props}>
            <h1>Get Starter</h1>
        </Layout>
    );
};

export default GetStarted;
