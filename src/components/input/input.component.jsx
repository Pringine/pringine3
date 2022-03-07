import React from 'react'
import {Form, InputGroup} from 'react-bootstrap'

export const InputField = ({formType, placeholder, getAmount}) => {
  return (
    <div className="mb-3">
      <Form.Group className="mb-3">
        <Form.Control type={formType} placeholder={placeholder} onChange={(e)=>getAmount(e)} />
      </Form.Group>
    </div>
  )
}

export const InputFieldGroup = ({prefix, formType, placeholder}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">{prefix}</InputGroup.Text>
      <Form.Control type={formType} placeholder={placeholder}/>
    </InputGroup>
  )
}
