import React, { Component } from 'react'
import Select from 'react-select';
import  countries from '../static/countries'


const cryptCurrencies = [
    
];
const fiatCurrencies = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
const location = countries;

const paymentOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class SearchForm extends Component {
    state = { 
        cryptoChoices: null, 
        fiatChoices: null, 
        locationChoices: null, 
        paymentChoices: null 
    }

    
    cryptoChange = (cryptoChoices) => {
        this.setState({ ...this.state,cryptoChoices });
    }

    fiatChange = (fiatChoices) => {
        this.setState({ ...this.state,fiatChoices });
    }

    locationChange = (locationChoices) => {
        this.setState({ ...this.state,locationChoices });
    }

    paymentChange = (paymentChoices) => {
        this.setState({ ...this.state,paymentChoices });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchExchanges(this.state);
    }


  render() {
      const { cryptoChoices, fiatChoices, locationChoices, paymentChoices } = this.state;
    return (
      <div>
        <form className="form">
            <label className="my-1 mr-2" htmlFor="iWantToBuyWith">I want to buy</label>
                <Select
                    name="cryptoChoices"
                    value={cryptoChoices}
                    onChange={this.cryptoChange}
                    options={cryptCurrencies}
                    isMulti
                />
            
                <label className="my-1 mr-2" htmlFor="iWantToPayWith">I want to buy with</label>
                <Select
                    name="fiatChoices"
                    value={fiatChoices}
                    onChange={this.fiatChange}
                    options={fiatCurrencies}
                    isMulti
                />
          
                <label className="my-1 mr-2" htmlFor="iLiveIn">I live in</label>
                <Select
                    name="locationChoices"
                    value={locationChoices}
                    onChange={this.locationChange}
                    options={location}
                    isMulti
                />
            

                <label className="my-1 mr-2" htmlFor="iWantToPayWith">I want to pay with</label>
                <Select
                    name="paymentChoices"
                    value={paymentChoices}
                    onChange={this.paymentChange}
                    options={paymentOptions}
                    isMulti
                />

            <button type="submit" className="btn btn-primary my-1">Submit</button>
            <button onClick={this.props.clearUsers} className="btn btn-light my-1">Clear</button>
        </form>
      </div>
    )
  }
}

export default SearchForm
