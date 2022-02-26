import React, { Component } from 'react';

import './home.style.css';
import { NavigationBar } from '../../components/navbar/navbar.component';
import { FooterBar } from '../../components/footer/footer.component';
import { Card } from '../../components/card-initialize/card-initialize.component';
import { CardForm } from '../../components/form/form.component';
import { Providers } from '../../services/providers.service';
import { Countries } from '../../services/countries.service';
import { SelectInput } from '../../components/select-input/select-input.component';
import { CardProcess } from '../../components/card-process/card-process.component';
import { ViewTxn } from '../../components/view-txn/view-txn.component';



export default class Home extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          providers: [],
          countries: [],
          selectedCountries: ['Nigeria'],
        }
      }

      componentDidMount(){
        const countries = Countries.filter(country => this.state.selectedCountries.includes(country.name))
        this.setState({providers:Providers, countries: countries})
      }

  render() {
    return (
      <div className="home ">
        <div className="navigationbar">
          <NavigationBar />
        </div>

        <div className="create-card d-md-flex d-sm-block container">
          <div className="card-container mb-5">
            {/* <Card /> */}
            <CardProcess />
          </div>

          <div className="form-box">
            <div className="country">
              <SelectInput
                data={this.state.countries}
                default_name='Select Countries' 
                uni_key='code'
                value='code'
                displayed_name='name' />
            </div>
            <div className="card-side">
              {/* <CardForm providers={this.state.providers} /> */}
              <ViewTxn />
            </div>
          </div>
        </div>

        <div className="footer">
          <FooterBar />
        </div>
      </div>
    )
  }
}
