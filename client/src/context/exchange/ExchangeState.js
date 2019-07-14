import React, { useReducer } from "react";
import axios from "axios";
import ExchangeContext from "./exchangeContext";
import ExchangeReducer from "./ExchangeReducer";
import {
    GET_EXCHANGES,
    SET_LOADING,
    GET_CRYPTOS,
    GET_COUNTRIES,
    GET_PAYMENTS,
    GET_FIATS,
    SET_CRYPTO_OPTIONS,
    SET_PAYMENT_OPTIONS,
    SET_COUNTRY_OPTIONS,
    SET_FIAT_OPTIONS
} from "../types";

const ExchangeState = props => {
    const inititalState = {
        exchanges: [],
        countries: [],
        cryptos: [],
        fiats: [],
        payments: [],
        countryOptions: [],
        cryptoOptions: [],
        paymentOptions: [],
        fiatOptions: [],
        posts: [],
        loadding: false
    };

    const [state, dispatch] = useReducer(ExchangeReducer, inititalState);

    // Search Users
    const getExchanges = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/exchanges`);
        dispatch({
            type: GET_EXCHANGES,
            payload: res.data
        });
    };

    const getCryptos = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/cryptos`);
        setCryptos(res.data);
        dispatch({
            type: GET_CRYPTOS,
            payload: res.data
        });
    };
    const setCryptos = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: `${stat.name} - ${stat.symbol}` };
        });
        dispatch({
            type: SET_CRYPTO_OPTIONS,
            payload: options
        });
    };
    const getCountries = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/countries`);
        setCountries(res.data);
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data
        });
    };
    const setCountries = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: `${stat.name} - ${stat.symbol}` };
        });
        dispatch({
            type: SET_COUNTRY_OPTIONS,
            payload: options
        });
    };
    const getPayments = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/payments`);
        setPayments(res.data);
        dispatch({
            type: GET_PAYMENTS,
            payload: res.data
        });
    };
    const setPayments = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: stat.name };
        });
        dispatch({
            type: SET_PAYMENT_OPTIONS,
            payload: options
        });
    };
    const getFiats = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/fiats`);
        setFiats(res.data);
        console.log("Fiats", res.data);
        dispatch({
            type: GET_FIATS,
            payload: res.data
        });
    };
    const setFiats = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: `${stat.name} - ${stat.symbol}` };
        });
        dispatch({
            type: SET_FIAT_OPTIONS,
            payload: options
        });
    };

    const setSearch = ({ payments, fiats, cryptos, countries }) => {
        console.log("payments", payments);
        console.log("fiats", fiats);
        console.log("cryptos", cryptos);
        console.log("countries", countries);
    };
    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    return (
        <ExchangeContext.Provider
            value={{
                exchanges: state.exchanges,
                countries: state.countries,
                cryptos: state.cryptos,
                fiats: state.fiats,
                payments: state.payments,
                countryOptions: state.countryOptions,
                cryptoOptions: state.cryptoOptions,
                paymentOptions: state.paymentOptions,
                fiatOptions: state.fiatOptions,
                loading: state.loading,
                getExchanges,
                getFiats,
                getCryptos,
                getCountries,
                getPayments,
                setSearch
            }}
        >
            {props.children}
        </ExchangeContext.Provider>
    );
};

export default ExchangeState;
