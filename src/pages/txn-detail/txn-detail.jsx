import React, { Component } from 'react';

import './txn-detail.css';
import { NavigationBar } from '../../components/navbar/navbar.component';
import { FooterBar } from '../../components/footer/footer.component';
import { Card } from '../../components/card-initialize/card-initialize.component';
import { CardForm } from '../../components/form/form.component';
import { Providers } from '../../services/providers.service';
import { Countries } from '../../services/countries.service';
import { SelectInput } from '../../components/select-input/select-input.component';
import { CardProcess } from '../../components/card-process/card-process.component';
import { ViewTxn } from '../../components/view-txn/view-txn.component';



export default class TxnDetail extends Component {
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
            <CardProcess />
          </div>

          <div className="form-box">
            <div className="card-side">
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
