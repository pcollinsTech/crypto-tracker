import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Coins from './components/Coins';
// import Coin from './components/Coin';
import './sass/app.scss';


//Pages
import Index from './pages/index'
import About from './pages/about'
import Academy from './pages/academy'
import ExchangeFinder from './pages/exchangfinder';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

class App extends Component { 
  
  searchExchanges = (state) => {
    
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Index} />
          <Route exact path="/academy" component={Academy} />
            {/* <Route exact path="/coin/:id" component={Coin} /> */}
          <Route  path="/about" component={About} />
          <Route  path="/exchange-finder" component={ExchangeFinder} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
