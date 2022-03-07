import React from 'react';
import './card-initialize.style.css';

import mtn from '../../assets/img/mtn.png';
import cardImg from '../../assets/img/card-img.png';

export const Card = ({cardData}) => {

  return (
    <div className='card-data' style={{color:cardData.selectedProvider.color?cardData.selectedProvider.color:'#000000'}}>
      <div className="section1">
        <div className="card-category">Recharge card</div>
        <div className="card-image">
          <img src={cardImg} alt="" />
        </div>
      </div>
      <div className="section2">
        <div className="card-amount">
          <div className="card-fiat">{cardData.selectedCountry.currencies} {parseInt(cardData.amount)?parseInt(cardData.amount).toLocaleString():''}</div>
          <div className="card-crypto">Ξ 0.0013</div>
        </div>
        <div className="provider-img">
          {cardData.selectedProvider.logo? <img src={cardData.selectedProvider.logo} alt="Network provider" />: ''}
        </div>
      </div>
    </div>
  )
}
