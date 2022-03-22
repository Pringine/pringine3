import React, { Component } from "react";
import axios from "axios";
import Joi from "joi";
import { Card } from "../common/card-initialize/card-initialize.component";
import { CardForm } from "../common/form/form.component";
import { Providers } from "../../services/providers.service";
import { Countries } from "../../services/countryData.service";

import "./home.css";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      providers: [],
      availableCountries: [],
      selectedCountry: {},
      selectedProvider: {},
      card: { country: "", provider: "", phone: "", amount: "" },
      errors: {},
    };
  }

  async componentDidMount() {
    // // Get available countries
    const {data: availableCountries} = await axios.get("http://localhost:8000/country/available");
    this.setState({availableCountries})

    // Get Providers
    const {data: providers} = await axios.get("http://localhost:8000/provider/");
    this.setState({providers})

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

  /**
   * Get selected country from input form
   * @param {event} e country
   */
  getSelectedCountry = (e) => {
    const countryValue = e.target.value;

    // change the value of country in card state
    const { card } = this.state;
    card.country = countryValue;
    this.setState({ card });

    // set selectedCountry state
    const selectedCountry = this.state.availableCountries.filter((country) =>
      countryValue.includes(country.id)
    )[0];
    this.setState({ selectedCountry }, ()=>console.log(this.state));

    // check for errors
    const errors = this.validate()
    this.setState({errors})
  };

  /**
   * Get provider from input form
   * @param {event} e provider
   */
  getSelectedProvider = (e) => {
    const providerValue = e.target.value;

    // change the value of provider in card state
    const { card } = this.state;
    card.provider = providerValue;
    this.setState({ card });

    // set selected provider
    const selectedProvider = this.state.providers.filter((provider) =>
      providerValue.includes(provider.id)
    )[0];
    this.setState({ selectedProvider });

    // check for errors
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
    const { background_color } = this.state.selectedProvider;

    let backgroundColor = { background: background_color ? background_color : "" };

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
