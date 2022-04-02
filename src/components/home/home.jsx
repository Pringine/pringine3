import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Joi from "joi";
import { Card } from "../common/card-initialize/card-initialize.component";
import { CardForm } from "../common/form/form.component";
import config from "../../config.json";

import "./home.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WalletContext from "../context/walletContext";

const Home = () => {
  const navigate = useNavigate();
  const { wallet } = useContext(WalletContext);

  const [state, setState] = useState({
    providers: [],
    availableCountries: [],
    selectedCountry: {},
    selectedProvider: {},
    card: {
      country: "",
      provider: "",
      phone: "",
      amount: "",
      hash: "0x74F0D96c19A8601E01e534495925331A535362FC",
    },
    errors: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      const stateData = { ...state };
      // // Get available countries
      const { data: availableCountries } = await axios.get(
        `${config.baseUrl}/country/available/`
      );
      stateData.availableCountries = availableCountries;

      // Get Providers
      const { data: providers } = await axios.get(
        `${config.baseUrl}/provider/`
      );
      stateData.providers = providers;
      setState({ ...stateData });
    };
    fetchData();
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
    const stateData = { ...state };
    const countryValue = e.target.value;

    // change the value of country in card state
    const { card } = state;
    card.country = parseInt(countryValue);
    // setState({ card });

    // set selectedCountry state
    const selectedCountry = state.availableCountries.filter((country) =>
      countryValue.includes(country.id)
    )[0];
    stateData.selectedCountry = selectedCountry;

    // check for errors
    const errors = validate();
    stateData.errors = errors;
    setState({ ...stateData });
  };

  /**
   * Get provider from input form
   * @param {event} e provider
   */
  const getSelectedProvider = (e) => {
    const stateData = { ...state };
    const providerValue = e.target.value;

    // change the value of provider in card state
    const { card } = state;
    card.provider = parseInt(providerValue);
    stateData.card = card;

    // set selected provider
    const selectedProvider = state.providers.filter((provider) =>
      providerValue.includes(provider.id)
    )[0];
    stateData.selectedProvider = selectedProvider;

    // check for errors
    const errors = validate();
    stateData.errors = errors;
    setState({ ...stateData });
  };

  /**
   * Get text from all input field
   * @param {obj} input input field
   * @param {str} name name of input field
   */
  const getText = ({ currentTarget: input }, name) => {
    const stateData = { ...state };
    const { card } = state;
    card[name] = input.value;

    if (name === "amount") card[name] = parseInt(input.value);

    stateData.card = card;

    // check for errors
    const errors = validate();
    stateData.errors = errors;
    setState({ ...stateData });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const stateData = { ...state };
    const errors = validate();
    stateData.errors = errors;
    setState({ ...stateData });

    // Submit form
    await axios.post(`${config.baseUrl}/txn/`, state.card).then((res) => {
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

      // Toast for success
      toast("Processing transaction", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Redirect with HOC component
      navigate(`/verify/${res.data.txn_id}`);
    });
  };

  const { background_color } = state.selectedProvider
    ? state.selectedProvider
    : "";

  let backgroundColor = {
    background: background_color,
  };

  return (
    <div className="home ">
      <div className="balance container text-end pt-4">
        <div className="address">{wallet.address}</div>
        Balance: <i
          className="fab fa-ethereum"
          style={{ color: "#fff" }}
        ></i>{" "}
        {wallet.balance}
      </div>
      <div className="create-card d-md-flex d-sm-block container">
        <div className="card-container init-card mb-5" style={backgroundColor}>
          <Card cardData={state} />
        </div>

        <div className="form-box">
          <div className="card-side">
            {state.providers && (
              <CardForm
                data={state}
                getCountry={getSelectedCountry}
                getProvider={getSelectedProvider}
                getAmount={getText}
                getPhone={getText}
                getText={getText}
                submitForm={submitForm}
              />
            )}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
