import React, { Component } from 'react';

import './verify.css';

import { Form, Table, FormControl, Button, Pagination, InputGroup } from 'react-bootstrap';
import { FooterBar } from '../../components/footer/footer.component';
import { NavigationBar } from '../../components/navbar/navbar.component';
import { BlockButton } from '../../components/block-button/block-button.component';

export default class Verify extends Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <div className="verify">
        <div className="navigationbar">
          <NavigationBar />
        </div>

        <div className="container mx-auto">
          <div className="search my-5">
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search: transaction id, transaction hash, phone number, gift card number... etc"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form> */}
          <Form>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search: transaction id, transaction hash, phone number, gift card number... etc"
                aria-label="Search transaction"
                aria-describedby="Transaction"
              />
              <Button variant="dark" id="search-button">
                Search
              </Button>
            </InputGroup>
          </Form>
          </div>

          <div className="txn-table">
            <Table striped borderedless hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction hash</th>
                  <th>Amount (Ξ)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>18/02/22 10:23:46</td>
                  <td>0x6e16a2365324c97...ab93</td>
                  <td>0.00013</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </Table>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              {items}
              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>

        <div className="footer">
          <FooterBar />
        </div>
      </div>
    )
  }
}
