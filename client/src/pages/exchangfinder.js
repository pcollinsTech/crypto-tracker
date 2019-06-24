import React, { Component } from 'react'
import Layout from '../modules/Layout'
import SearchForm from '../components/SearchForm';
import Coins from '../components/Coins';

export class ExchangeFinder extends Component {
  render() {
    return (
      <Layout>
        <SearchForm searchExchanges={this.searchExchanges }/>
        <Coins/>
      </Layout>
    )
  }
}

export default ExchangeFinder
