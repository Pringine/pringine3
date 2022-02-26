import React from 'react';
import { Table } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './card-process.style.css'

import mtn from '../../assets/img/mtn.png'
import barcode from '../../assets/img/barcode.png'

export const CardProcess = () => {
  const now = 80;
  return (
    <div className="process-card">
      <div className="process-stat">
        <div className="process-card-amount">
           <div className="card-fiat">₦ 1,500</div>
           <div className="card-crypto">Ξ 0.0013</div>
           <div className="timestamp mt-2">
            <Table borderless size='sm'>
              <tbody>
                <tr>
                  <td><span>Category:</span></td>
                  <td>Top up card</td>
                </tr>
                <tr>
                  <td><span>Number:</span></td>
                  <td>+234 810 XXX XX02</td>
                </tr>
                <tr>
                  <td><span>Timestamp:</span></td>
                  <td>Feb-18-2022 10:23:46</td>
                </tr>
                <tr>
                  <td><span>Status:</span></td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </Table>
           </div>
         </div>
        <div className="provider-img-process">
          <img src={mtn} alt="" />
        </div>
      </div>

      <div className="mx-4 txn-process">
        <ProgressBar striped variant="success" animated now={now} label={`${now}%`} />
      </div>

      <div className="txn-code-container">
        <div className="barcode">
          <img src={barcode} alt="" />
        </div>
        <div className="txn-code">1234567890</div>
      </div>
    </div>
  )
}
