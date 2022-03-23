import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import config from "../../../config.json";

import "./card-process.style.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export const CardProcess = ({ txn }) => {
  const [data, setData] = useState({ provider: {} });

  useEffect(() => {
    if (txn.provider) {
      const getProvider = async() =>{
        const { data: provider } = await axios.get(
          `${config.baseUrl}/provider/${txn.provider}/`
        )
        setData({ provider });
      }
      getProvider()
    }
  }, [txn]);

  // Completion rate
  const now = 80;

  const status = {
    V: 'verifying',
    P: 'pending',
    S: 'successful',
    F: 'failed'
  }

  return (
    <div className="process-card">
      <div className="process-stat">
        <div className="process-card-amount">
          <div className="card-fiat">
            Ξ {txn.amount ? parseFloat(txn.amount).toLocaleString() : ""}
          </div>
          {/* <div className="card-crypto">Ξ {txn.eth}</div> */}
          <div className="timestamp mt-2">
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>
                    <span>Txn id:</span>
                  </td>
                  <td>{txn.txn_id}</td>
                </tr>
                {/* <tr>
                  <td>
                    <span>Category:</span>
                  </td>
                  <td>{txn.category}</td>
                </tr> */}
                {/* <tr>
                  <td>
                    <span>Country:</span>
                  </td>
                  <td>{txn.country}</td>
                </tr> */}
                <tr>
                  <td>
                    <span>Number:</span>
                  </td>
                  <td>{txn.hidden_phone}</td>
                </tr>
                <tr>
                  <td>
                    <span>Timestamp:</span>
                  </td>
                  <td>{txn.created_at}</td>
                </tr>
                <tr>
                  <td>
                    <span>Status:</span>
                  </td>
                  <td>{status[txn.status]}</td>
                </tr>
                <tr>
                  <td>
                    <span>Txn hash:</span>
                  </td>
                  <td>
                    <a
                      href={`https://etherscan.io/address/${txn.hash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {txn.hash}
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="provider-img-process">
          <img src={data.provider ? data.provider.logo : ""} alt="" />
        </div>
      </div>

      <div className="mx-4 txn-process">
        <ProgressBar
          striped
          variant="success"
          animated
          now={now}
          label={`${now}%`}
        />
      </div>
    </div>
  );
};
