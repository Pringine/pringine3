import React from 'react'
import {Form} from 'react-bootstrap'

export const InputField = ({formType, placeholder}) => {
  return (
    <div className="mb-3">
      <Form.Group className="mb-3">
        <Form.Control type={formType} placeholder={placeholder} />
      </Form.Group>
    </div>
  )
}
