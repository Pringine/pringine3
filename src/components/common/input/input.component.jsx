import React from 'react';
import './input.style.css'
import {Form, InputGroup} from 'react-bootstrap';

export const InputField = ({formType, placeholder, getText, name, disableForm}) => {
  return (
    <div className="mb-3">
      <Form.Group className="mb-3">
        <Form.Control type={formType} placeholder={placeholder} onChange={(e)=>getText(e, name)} disabled={disableForm} />
      </Form.Group>
    </div>
  )
}

export const InputFieldGroup = ({prefix, formType, placeholder, getText, name, disableForm}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">{prefix}</InputGroup.Text>
      <Form.Control type={formType} placeholder={placeholder} onChange={(e)=>getText(e, name)} disabled={disableForm} />
    </InputGroup>
  )
}
