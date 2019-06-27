import React, { Component } from "react";
import Layout from "../modules/Layout";
import SearchForm from "../components/SearchForm";
import AssetMarket from "../components/AssetMarket";

export class ExchangeFinder extends Component {
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
