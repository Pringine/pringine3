import React, { Component } from "react";

import "./home.css";
import { Card } from "../../components/card-initialize/card-initialize.component";
import { CardForm } from "../../components/form/form.component";
import { Providers } from "../../services/providers.service";
// import { Countries } from '../../services/countries.service';
import { Countries } from "../../services/countryData.service";
// import { CardProcess } from '../../components/card-process/card-process.component';
// import { ViewTxn } from '../../components/view-txn/view-txn.component';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      providers: [],
      countries: [],
      availableCountries: ["Nigeria", "Ghana", "Uganda"],
      selectedCountry: {},
      selectedProvider: "",
      amount: "",
      card: { country: {}, provider: {}, phone: "", amount: "" },
    };
  }

  componentDidMount() {
    const countries = Countries.filter((country) =>
      this.state.availableCountries.includes(country.name)
    );
    this.setState({ providers: Providers, countries: countries });
  }

  getSelectedCountry = (e) => {
    const countryValue = e.target.value;

    const { card } = this.state;
    card.country = this.state.countries.filter((country) =>
      countryValue.includes(country.alpha2)
    )[0];
    this.setState({ card });

    // const selectedCountry = this.state.countries.filter(country=>countryValue.includes(country.alpha2))[0];
    // this.setState({selectedCountry});
  };

  getSelectedProvider = (e) => {
    const providerValue = e.target.value;

    const { card } = this.state;
    card.provider = this.state.providers.filter((provider) =>
      providerValue.includes(provider.id)
    )[0];
    this.setState({ card });

    // const selectedProvider = this.state.providers.filter(provider=>providerValue.includes(provider.id))[0]
    // this.setState({selectedProvider});
  };

  getText = (e, name) => {
    const { card } = this.state;
    card[name] = e.target.value;;

    this.setState({ card });
  };

  onSubmit = (e) => {
    // e.preventDefault()
    // console.log(this.state);
  };

  submitForm = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    const { bgColor } = this.state.card.provider;

    let backgroundColor = { background: bgColor ? bgColor : "#ffffff" };

    return (
      <div className="home ">
        <div className="create-card d-md-flex d-sm-block container">
          <div className="card-container mb-5" style={backgroundColor}>
            <Card cardData={this.state.card} />
          </div>

          <div className="form-box">
            <div className="card-side">
              <CardForm
                data={this.state}
                getCountry={this.getSelectedCountry}
                getProvider={this.getSelectedProvider}
                getAmount={this.getAmount}
                getPhone={this.getPhone}
                getText={this.getText}
                submitForm={this.submitForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
