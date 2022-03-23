import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BlockButton } from "../common/block-button/block-button.component";

import "./feedback-form.css";

const FeedbackForm = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    feedback: { email: "", txn_id: id, message: "" },
  });

  const handleChange = (e, state) => {
    const value = e.target.value;

    const fb = { ...data.feedback };
    fb[state] = value;

    setData({ feedback: fb });
  };

  const handleSubmit = () =>{
    axios.post('http://localhost:8000/txn/feedback/', data.feedback)

    // Toast for success
  }

  return (
    <div className="feedback-container">
      <div className="feedback-form justify-content-md-center row">
        <Form className="col-md-6 col-sm-6">
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => handleChange(e, "email")}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </div>
            <div className="col-12">
              <Form.Group className="mb-4" controlId="formBasicText">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Transaction ID"
                  defaultValue={id}
                  disabled={true}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </div>
            <div className="col-12">
              <Form.Group className="mb-4" controlId="ControlTextarea1">
                {/* <Form.Label>Example textarea</Form.Label> */}
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  rows={7}
                  onChange={(e) => handleChange(e, "message")}
                />
              </Form.Group>
            </div>
          </div>
          <BlockButton url="transaction-detail" text="Submit" onClick={(e) => handleSubmit(e, "email")} />
        </Form>
      </div>
    </div>
  );
};

export default FeedbackForm;
