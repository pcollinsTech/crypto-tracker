import React, { useContext, Fragment, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import AssetMarket from "../components/AssetMarket";
import ExchangeContext from "../context/exchange/exchangeContext";

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

    return (
        <Fragment>
            <SearchForm searchExchanges={this.searchExchanges} />
            <AssetMarket />
        </Fragment>
    );
};

export default ExchangeFinder;
