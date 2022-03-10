import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./card-process.style.css";

import { Providers } from "../../services/providers.service";

export const CardProcess = ({ txn }) => {
  const [data, setData] = useState({ providers: [] });

  const provider = data.providers.length
    ? data.providers.filter((prov) => prov.id === txn.provider)[0]
    : [];

  useEffect(() => {
    // set provider
    setData({ providers: Providers });
  }, []);

  // Completion rate
  const now = 80;

  return (
    <div className="process-card">
      <div className="process-stat">
        <div className="process-card-amount">
          <div className="card-fiat">
            {txn.amount ? parseFloat(txn.amount).toLocaleString() : ""}
          </div>
          <div className="card-crypto">Ξ {txn.eth}</div>
          <div className="timestamp mt-2">
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>
                    <span>Txn id:</span>
                  </td>
                  <td>{txn.id}</td>
                </tr>
                <tr>
                  <td>
                    <span>Category:</span>
                  </td>
                  <td>{txn.category}</td>
                </tr>
                <tr>
                  <td>
                    <span>Country:</span>
                  </td>
                  <td>{txn.country}</td>
                </tr>
                <tr>
                  <td>
                    <span>Number:</span>
                  </td>
                  <td>{txn.utilNumber}</td>
                </tr>
                <tr>
                  <td>
                    <span>Timestamp:</span>
                  </td>
                  <td>{txn.date}</td>
                </tr>
                <tr>
                  <td>
                    <span>Status:</span>
                  </td>
                  <td>{txn.status}</td>
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
          <img src={data.providers.length ? provider.logo : ""} alt="" />
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
