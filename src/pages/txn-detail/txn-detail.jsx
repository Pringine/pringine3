import React, { useEffect, useState } from 'react'
import { CardProcess } from '../../components/card-process/card-process.component';
import { ViewTxn } from '../../components/view-txn/view-txn.component';
import { useParams } from 'react-router-dom';
import {Txns} from '../../services/transactions.service'

import './txn-detail.css';


const TxnDetail = () => {

  const [data, setData] = useState({ txn: {} });

  const id = parseInt(useParams().id);

  useEffect(()=>{
    // filter transaction
    const txn = Txns.filter(tx=>tx.id===id)[0];
    setData({txn})
  },[id])

  return (
    <div className="home ">
      <div className="create-card d-md-flex d-sm-block container">
        <div className="card-container mb-5" style={{backgroundColor:'#ffffff'}}>
          <CardProcess txn={data.txn} id={id} />
        </div>

        <div className="form-box">
          <div className="card-side">
            <ViewTxn id={id} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default TxnDetail
