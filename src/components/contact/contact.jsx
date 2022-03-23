import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { BlockButton } from "../common/block-button/block-button.component";
import config from "../../config.json";

import "./contact.css";

const Contact = () => {
  const [data, setData] = useState({ email: "", message: "" });

  const handleChange = (e, state) => {
    const value = e.target.value;

    const fb = { ...data };
    fb[state] = value;

    setData({ ...fb });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${config.baseUrl}/contact/`, data).then(
      // Toast for success
      toast("Message sent", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    );
    // Reset form
    setData({ email: "", message: "" });
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
          <BlockButton text="Submit" type="Submit" />
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default Contact;
