import React, { useEffect, useState } from "react";
import { CardProcess } from "../common/card-process/card-process.component";
import { ViewTxn } from "../common/view-txn/view-txn.component";
import { useParams } from "react-router-dom";
import config from "../../config.json";

import "./txn-detail.css";
import axios from "axios";

const TxnDetail = () => {
  const [data, setData] = useState({ txn: {} });

  const id = useParams().id;

  useEffect(() => {
    if (id) {
      const getTxn = async () => {
        // filter transaction
        const { data: txn } = await axios.get(
          `${config.baseUrl}/txn/list/${id}/`
        );
        setData({ txn });
      };

      getTxn();
    }
  }, [id]);

  return (
    <div className="home ">
      <div className="create-card d-md-flex d-sm-block container">
        <div
          className="card-container mb-5 process-card-bg"
          style={{ backgroundColor: "#ffffff" }}
        >
          <CardProcess txn={data.txn} id={id} />
        </div>

        <div className="form-box">
          <div className="card-side">
            <ViewTxn id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxnDetail;
