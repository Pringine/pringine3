import React, { Component } from 'react';

import './home.css';
import { Card } from '../../components/card-initialize/card-initialize.component';
import { CardForm } from '../../components/form/form.component';
import { Providers } from '../../services/providers.service';
// import { Countries } from '../../services/countries.service';
import { Countries } from '../../services/countryData.service';
// import { CardProcess } from '../../components/card-process/card-process.component';
// import { ViewTxn } from '../../components/view-txn/view-txn.component';



export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      providers: [],
      countries: [],
      availableCountries: ['Nigeria', 'Ghana', 'Uganda'],
      selectedCountry: {},
      selectedProvider: '',
      amount: '',
      card: {country:{}, provider:{}, phone:'', amount:''}
    }
  }

  componentDidMount(){
    const countries = Countries.filter(country => this.state.availableCountries.includes(country.name))
    this.setState({providers:Providers, countries: countries});
  }

  getSelectedCountry=(e)=>{
    const countryValue = e.target.value;

    const selectedCountry = this.state.countries.filter(country=>countryValue.includes(country.alpha2))[0]
    this.setState({selectedCountry});
  }

  getSelectedProvider=(e)=>{
    const providerValue = e.target.value;

    const selectedProvider = this.state.providers.filter(provider=>providerValue.includes(provider.id))[0]
    this.setState({selectedProvider});
  }

  getAmount=(e)=>{
    const amount = e.target.value;

    this.setState({amount});
  }

  getCardDetail=(e)=>{
    console.log('card', this.state);
  }

  render() {

    const {bgColor} = this.state.selectedProvider

    let backgroundColor = {background: bgColor}

    return (
      <div className="home ">
        <div className="create-card d-md-flex d-sm-block container">
          <div className="card-container mb-5" style={backgroundColor}>
            <Card cardData={this.state} />
          </div>

          <div className="form-box">
            <div className="card-side">
              <CardForm 
                data={this.state} 
                getCountry={this.getSelectedCountry}
                getProvider={this.getSelectedProvider}
                getAmount={this.getAmount} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
