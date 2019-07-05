import React, { useReducer } from "react";
import axios from "axios";
import ExchangeContext from "./exchangeContext";
import ExchangeReducer from "./ExchangeReducer";
import { GET_EXCHANGES, SET_LOADING } from "../types";

const ExchangeState = props => {
    const inititalState = {
        exchanges: [],
        posts: [],
        loadding: false
    };

    const [state, dispatch] = useReducer(ExchangeReducer, inititalState);

    // Search Users
    const getExchanges = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/exchanges`);
        console.log("This is the res", res);

        dispatch({
            type: GET_EXCHANGES,
            payload: res.data
        });
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    return (
        <ExchangeContext.Provider
            value={{
                exchanges: state.exchanges,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                getExchanges
            }}
        >
            {props.children}
        </ExchangeContext.Provider>
    );
};

export default ExchangeState;
