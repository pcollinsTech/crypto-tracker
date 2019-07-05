import React, { Component } from "react";
import Layout from "../layout/Layout";
import SearchForm from "../components/SearchForm";
import AssetMarket from "../components/AssetMarket";

export class ExchangeFinder extends Component {
    searchExchanges = () => {};

    render() {
        return (
            <Layout>
                <SearchForm searchExchanges={this.searchExchanges} />
                <AssetMarket />
            </Layout>
        );
    }
}

export default ExchangeFinder;
