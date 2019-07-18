import React from "react";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import ContactUs from "../components/ContactUs";
const Index = () => {
    return (
        <Layout>
            <Banner />
            <Welcome />
            <ContactUs />
        </Layout>
    );
};

export default Index;
