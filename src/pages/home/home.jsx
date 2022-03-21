import React, { Component } from "react";
import Joi from "joi";
import { Card } from "../../components/card-initialize/card-initialize.component";
import { CardForm } from "../../components/form/form.component";
import { Providers } from "../../services/providers.service";
import { Countries } from "../../services/countryData.service";

import "./home.css";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      providers: [],
      countries: [],
      availableCountries: ["Nigeria", "Ghana", "Uganda"],
      selectedCountry: {},
      selectedProvider: {},
      card: { country: "", provider: "", phone: "", amount: "" },
      errors: {},
    };
  }

  componentDidMount() {
    const countries = Countries.filter((country) =>
      this.state.availableCountries.includes(country.name)
    );
    this.setState({ providers: Providers, countries: countries });

    this.validate();
  }

  schema = Joi.object({
    phone: Joi.string().required(),
    amount: Joi.string().required(),
    country: Joi.string().required(),
    provider: Joi.string().required(),
  });

  validate = () => {
    const result = this.schema.validate(this.state.card, { abortEarly: false });

    if (!result.error) return null;

    const errors = {};

    result.error.details.map((err) => (errors[err.path[0]] = err.message));

    return errors;
  };

  getSelectedCountry = (e) => {
    const countryValue = e.target.value;

    const { card } = this.state;
    card.country = countryValue;
    this.setState({ card });

    const selectedCountry = this.state.countries.filter((country) =>
      countryValue.includes(country.alpha2)
    )[0];
    this.setState({ selectedCountry });

    const errors = this.validate()
    this.setState({errors})
  };

  getSelectedProvider = (e) => {
    const providerValue = e.target.value;

    const { card } = this.state;
    card.provider = providerValue;
    this.setState({ card });

    const selectedProvider = this.state.providers.filter((provider) =>
      providerValue.includes(provider.id)
    )[0];
    this.setState({ selectedProvider });

    const errors = this.validate()
    this.setState({errors})
  };

  getText = ({ currentTarget: input }, name) => {
    const { card } = this.state;
    card[name] = input.value;

    this.setState({ card });

    const errors = this.validate()
    this.setState({errors})
  };

  submitForm = (e) => {
    e.preventDefault();
    const errors = this.validate()
    this.setState({errors})
    // console.log(this.state);
  };

  render() {
    const { bgColor } = this.state.selectedProvider;

    let backgroundColor = { background: bgColor ? bgColor : "" };

    return (
      <div className="home ">
        <div className="create-card d-md-flex d-sm-block container">
          <div className="card-container init-card mb-5" style={backgroundColor}>
            <Card cardData={this.state} />
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
