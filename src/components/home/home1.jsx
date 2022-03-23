import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Joi from "joi";
import { Card } from "../common/card-initialize/card-initialize.component";
import { CardForm } from "../common/form/form.component";
import config from "../../config.json";

import "./home.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    providers: [],
    availableCountries: [],
    selectedCountry: {
      name: "",
      code: "",
      dial_code: "",
      flag: "🇳",
      currency: "",
    },
    selectedProvider: {
      name: "",
      category: "",
      background_color: "",
      text_color: "",
      logo: "",
    },
    card: {
      country: "",
      provider: "",
      phone: "",
      amount: "",
      hash: "0x74F0D96c19A8601E01e534495925331A535362FC",
    },
    errors: {},
  });

  useEffect(async () => {
    // // Get available countries
    const { data: availableCountries } = await axios.get(
      `${config.baseUrl}/country/available/`
    );
    setState({ availableCountries });

    // Get Providers
    const { data: providers } = await axios.get(`${config.baseUrl}/provider/`);
    setState({ providers });

    validate();
  }, []);

  const schema = Joi.object({
    phone: Joi.string().required(),
    amount: Joi.number().required(),
    country: Joi.number().required(),
    provider: Joi.number().required(),
    hash: Joi.string().required(),
  });

  const validate = () => {
    const result = schema.validate(state.card, { abortEarly: false });

    if (!result.error) return null;

    const errors = {};
    result.error.details.map((err) => (errors[err.path[0]] = err.message));

    return errors;
  };

  /**
   * Get selected country from input form
   * @param {event} e country
   */
  const getSelectedCountry = (e) => {
    const countryValue = e.target.value;

    // change the value of country in card state
    const { card } = state;
    card.country = parseInt(countryValue);
    setState({ card });

    // set selectedCountry state
    const selectedCountry = state.availableCountries.filter((country) =>
      countryValue.includes(country.id)
    )[0];
    setState({ selectedCountry });

    // check for errors
    const errors = validate();
    setState({ errors });
  };

  /**
   * Get provider from input form
   * @param {event} e provider
   */
  const getSelectedProvider = (e) => {
    const providerValue = e.target.value;

    // change the value of provider in card state
    const { card } = state;
    card.provider = parseInt(providerValue);
    setState({ card });

    // set selected provider
    const selectedProvider = state.providers.filter((provider) =>
      providerValue.includes(provider.id)
    )[0];
    setState({ selectedProvider });

    // check for errors
    const errors = validate();
    setState({ errors });
  };

  const getText = ({ currentTarget: input }, name) => {
    const { card } = state;
    card[name] = input.value;

    if (name == "amount") card[name] = parseInt(input.value);

    setState({ card });

    const errors = validate();
    setState({ errors });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const errors = validate();
    setState({ errors });

    // Submit form
    const txn = await axios
      .post(`${config.baseUrl}/txn/`, state.card)
      .then((res) => {
        // console.log(res);
        // Toast for success
        toast("Processing transaction", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Reset form
        setState({
          card: {
            country: "",
            provider: "",
            phone: "",
            amount: "",
            hash: "0x74F0D96c19A8601E01e534495925331A535362FC",
          },
        });
      });
    // navigate
  };

  const { background_color } = state.selectedProvider
    ? state.selectedProvider
    : "";

  let backgroundColor = {
    background: background_color ? background_color : "",
  };

  return (
    <div className="home ">
      <div className="create-card d-md-flex d-sm-block container">
        <div className="card-container init-card mb-5" style={backgroundColor}>
          <Card cardData={state} />
        </div>

        <div className="form-box">
          <div className="card-side">
            <CardForm
              data={state}
              getCountry={getSelectedCountry}
              getProvider={getSelectedProvider}
              getAmount={getText}
              getPhone={getText}
              getText={getText}
              submitForm={submitForm}
            />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
