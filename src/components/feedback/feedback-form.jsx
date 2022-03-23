import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BlockButton } from "../common/block-button/block-button.component";

import config from '../../config.json'

import "./feedback-form.css";

const FeedbackForm = () => {
  const { id } = useParams();
  const [data, setData] = useState({ email: "", txn_id: id, message: "" });

  const handleChange = (e, state) => {
    const value = e.target.value;

    const feedback = { ...data };
    feedback[state] = value;

    setData({ ...feedback });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${config.baseUrl}/txn/feedback/`, data).then(
      // Toast for success
      toast("Feedback sent", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    );
    // Reset form
    setData({ email: "", txn_id: id, message: "" });
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form justify-content-md-center row">
        <Form className="col-md-6 col-sm-6" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => handleChange(e, "email")}
                  value={data.email}
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
                  value={data.message}
                />
              </Form.Group>
            </div>
          </div>
          <BlockButton url="transaction-detail" text="Submit" type="Submit" />
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default FeedbackForm;
