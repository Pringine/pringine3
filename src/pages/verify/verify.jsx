import React from 'react';

import './verify.css';
import { Form, Table, FormControl, Button, InputGroup } from 'react-bootstrap';
import {Txns} from '../../services/transactions.service';
import { useNavigate } from 'react-router-dom';


// const handleClick=(tx)=>{
//   console.log(tx);
// }


const Verify = () => {
  const navigate = useNavigate();
  
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
            />
            <Button variant="dark" id="search-button">
              Search
            </Button>
          </InputGroup>
        </Form>
        </div>

        <div className="txn-table">
          <Table striped borderedless='false' hover>
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
              {Txns.map(txn=> 
                <tr key={txn.id} onClick={()=>navigate(`${txn.id}`)}>
                  <td>{txn.date}</td>
                  <td>{txn.id}</td>
                  <td>{txn.hash}</td>
                  <td>{txn.eth}</td>
                  <td>{txn.status}</td>
                  <td><i className="fas fa-angle-right"></i></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  )
}

export default Verify;
