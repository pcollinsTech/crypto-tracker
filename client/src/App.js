import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Coins from './components/Coins';
// import Coin from './components/Coin';
import "./sass/app.scss";

//Pages
import Index from "./pages/index";
import About from "./pages/about";
import GetStarted from "./pages/getStarted";
import Academy from "./pages/academy";
import ExchangeFinder from "./pages/exchangfinder";
import Blog from "./pages/blog";
import ExchangeState from "./context/exchange/ExchangeState";
import Exchange from "./components/Exchange";

class App extends Component {
    searchExchanges = state => {};

    render() {
        return (
            <ExchangeState>
                <Router>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/academy" component={Academy} />
                    <Route exact path="/get-started" component={GetStarted} />
                    <Route path="/about" component={About} />
                    <Route path="/exchange/:id" component={Exchange} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/exchange-finder" component={ExchangeFinder} />
                </Router>
            </ExchangeState>
        );
    }
}

export default App;
