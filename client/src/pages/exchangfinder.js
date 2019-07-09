import React, { useContext, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import AssetMarket from "../components/AssetMarket";
import ExchangeContext from "../context/exchange/exchangeContext";
import Layout from "../layout/Layout";

const ExchangeFinder = () => {
    const exchangeContext = useContext(ExchangeContext);

    const { getExchanges, getCryptos, getCountries, getPayments } = exchangeContext;

    useEffect(() => {
        getExchanges();
        getCryptos();
        getCountries();
        getPayments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const searchExchanges = () => {
        return;
    };
    return (
        <Layout>
            <SearchForm searchExchanges={searchExchanges} />
            <AssetMarket />
        </Layout>
    );
};

export default ExchangeFinder;
