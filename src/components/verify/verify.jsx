import React, { useEffect, useState } from "react";
import { Form, Table, FormControl, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";

import "./verify.css";
import axios from "axios";

const Verify = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ txns: [], search: "" });

  // const id = parseInt(useParams().id);

  useEffect(() => {
    const getTxn = async () => {
      // filter transaction
      const { data: txns } = await axios.get(`${config.baseUrl}/txn/list/`);
      const state = {...data}
      state.txns = txns
      setData({ ...state });
    };

    getTxn();
  }, []);

  const status = {
    V: "verifying",
    P: "pending",
    S: "successful",
    F: "failed",
  };

  const handleChange = (e) => {
    e.preventDefault();
    const initial = { ...data };
    initial.search = e.target.value;
    setData({ ...initial });
  };

  const searchTransaction = async () => {
    // console.log(data);
    const { data: txns } = await axios.get(`${config.baseUrl}/txn/list/?search=${data.search}`);
    const state = {...data}
    state.txns = txns
    setData({ ...state });
  };

  return (
    <div className="verify">
      <div className="container mx-auto">
        <div className="search my-5">
          <Form>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search: transaction id, transaction hash, phone number, gift card number... etc"
                aria-label="Search transaction"
                aria-describedby="Transaction"
                onChange={(e) => handleChange(e)}
                value={data.search}
              />
              <Button
                variant="light"
                id="search-button"
                onClick={() => searchTransaction()}
              >
                Search
              </Button>
            </InputGroup>
          </Form>
        </div>

        <div className="txn-table">
          <Table striped borderedless="false" variant="dark" hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction id</th>
                <th>Transaction hash</th>
                <th>Amount (Ξ)</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.txns.map((txn) => (
                <tr key={txn.txn_id} onClick={() => navigate(`${txn.txn_id}`)}>
                  <td>{txn.created_at}</td>
                  <td>{txn.txn_id}</td>
                  <td>{txn.hash}</td>
                  <td>{txn.amount}</td>
                  <td>{status[txn.status]}</td>
                  <td>
                    <i className="fas fa-angle-right"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Verify;
