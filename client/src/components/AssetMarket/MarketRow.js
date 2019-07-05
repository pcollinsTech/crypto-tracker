import React from "react";
// import axios from 'axios';

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const MarketRow = ({ market }) => {
    const { exchangeId, baseSymbol, volumeUsd24Hr, priceUsd, volumePercent } = market;
    let price_usd = numberWithCommas(parseFloat(priceUsd).toFixed(2));
    let volume = numberWithCommas(parseFloat(volumeUsd24Hr).toFixed(2));
    let percentage = numberWithCommas(parseFloat(volumePercent).toFixed(2));
    return (
        <tr key={exchangeId}>
            <th scope="row">{exchangeId}</th>
            <td>{baseSymbol}</td>
            <td>${price_usd}</td>
            <td>${volume}</td>
            <td>{percentage}%</td>
        </tr>
    );
};

export default MarketRow;
