import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { BlockButton } from '../../components/block-button/block-button.component';

import './contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="feedback-container">

        <div className="feedback-form justify-content-md-center row">
        <Form className='col-md-6 col-sm-6'>
            <div className="row">
                <div className="col-12">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                </div>
                <div className="col-12">
                    <Form.Group className="mb-4" controlId="ControlTextarea1">
                        {/* <Form.Label>Example textarea</Form.Label> */}
                        <Form.Control as="textarea" placeholder="Message" rows={7} />
                    </Form.Group>
                </div>
            </div>
            <BlockButton text='Submit' />
        </Form>
        </div>

      </div>
    )
  }
}
