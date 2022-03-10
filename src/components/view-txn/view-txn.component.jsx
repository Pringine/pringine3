import React from 'react';
import './view-txn.style.css';
import { BlockButton } from '../block-button/block-button.component';
import qrcode from '../../assets/img/qrcode.png'

export const ViewTxn = ({id}) => {
  return (
    <div className="view-txn">
        <div className="qrcode">
          <img src={qrcode} alt="qrcode" />
        </div>
        <BlockButton url='feedback' text='Feedback' id={id} />
    </div>
  )
}
