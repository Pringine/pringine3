import React from 'react';
import './card-initialize.style.css'

export const Card = () => {
  return (
    <div className='card-data'>
      <div className="section1">
        <div className="card-category">Recharge card</div>
        <div className="card-img">Image</div>
      </div>
      <div className="section2">
        <div className="card-amount">
          <div className="card-fiat">₦ 1,500</div>
          <div className="card-crypto">Ξ 0.0013</div>
        </div>
        <div className="provider-img">IMG</div>
      </div>
    </div>
  )
}
