import React, { useContext, useEffect } from "react";
import Layout from "../../layout/Layout";
import ExchangeContext from "../../context/exchange/exchangeContext";
import Spinner from "../../layout/Spinner";
import ReactWOW from "react-wow";
import Icofont from "react-icofont";

const Exchange = props => {
    const exchangeContext = useContext(ExchangeContext);

    const { exchanges, getExchanges } = exchangeContext;
    useEffect(() => {
        getExchanges();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const exchange = exchanges.find(
        exchange => exchange.id === props.match.params.id
    );
    console.log(exchange);
    if (!exchange) {
        return <Spinner />;
    } else {
        return (
            <Layout>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="single-team">
                        <img src={exchange.img} alt="team-img" />
                        <ReactWOW>
                            <ul className="member-social-links wow fadeInUp">
                                <li>
                                    <a href={exchange.social_link_facebook}>
                                        <Icofont icon="icofont-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href={exchange.social_link_instagram}>
                                        <Icofont icon="icofont-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href={exchange.social_link_twitter}>
                                        <Icofont icon="icofont-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href={exchange.social_link_linkedin}>
                                        <Icofont icon="icofont-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </ReactWOW>
                        <h3>{exchange.name}</h3>
                        <span>{exchange.profession}</span>
                    </div>
                </div>
            </Layout>
        );
    }
};

export default Exchange;
