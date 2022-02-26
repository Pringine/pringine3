import React from 'react';
import {Form} from 'react-bootstrap';

export const SelectInput = ({data, default_name, uni_key, value, displayed_name}) => {
  return (
    <div className="mb-3">
        <Form.Select aria-label={default_name} defaultValue={default_name}>
          <option disabled> {default_name} </option>
          {data.map(country=>{
            return (<option key={country[uni_key]} value={country[value]}>
                      {country[displayed_name]}
                    </option>)
          })}
        </Form.Select>
    </div>
  )
}
