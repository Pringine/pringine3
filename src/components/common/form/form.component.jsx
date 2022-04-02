import React from "react";

import "./form.style.css";

import { BlockButton } from "../block-button/block-button.component";
import { InputField, InputFieldGroup } from "../input/input.component";
import { SelectInput } from "../select-input/select-input.component";

// import m

export const CardForm = ({
  data,
  getCountry,
  getProvider,
  getText,
  submitForm,
  disableForm,
}) => {
  const { dial_code, flag } = data.selectedCountry;

  const prefix = dial_code ? `${flag} ${dial_code}` : "Country Code";

  return (
    <form className="card-form" onSubmit={submitForm}>
      <SelectInput
        data={data.availableCountries}
        default_name="Select Countries"
        uni_key="id"
        value="id"
        displayed_name="name"
        getData={getCountry}
        disableForm={disableForm}
      />

      <SelectInput
        data={data.providers}
        default_name="Select Providers"
        uni_key="id"
        value="id"
        displayed_name="name"
        getData={getProvider}
        disableForm={disableForm}
      />

      <div className="phone">
        <InputFieldGroup
          name="phone"
          formType="number"
          placeholder="08xx xxx xxxx"
          getText={getText}
          prefix={prefix}
          disableForm={disableForm}
        />
      </div>
      <InputField
        name="amount"
        formType="number"
        placeholder="Amount"
        getText={getText}
        disableForm={disableForm}
      />

      <BlockButton
        url="transaction-detail"
        text="Top up"
        data={data}
        type="submit"
      />
    </form>
  );
};
