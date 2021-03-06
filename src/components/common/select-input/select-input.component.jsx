import React from "react";
import { Form } from "react-bootstrap";

import './select-input.css'

export const SelectInput = ({
  data,
  default_name,
  uni_key,
  value,
  displayed_name,
  getData,
  disableForm,
}) => {
  return (
    <div className="mb-3">
      <Form.Select
        aria-label={default_name}
        defaultValue={default_name}
        onChange={(e) => getData(e)}
        disabled={disableForm}
      >
        <option disabled> {default_name} </option>
        {data.map((item) => {
          return (
            <option key={item[uni_key]} value={item[value]}>
              {item[displayed_name]}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
};
