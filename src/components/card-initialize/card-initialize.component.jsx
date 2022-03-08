import React from 'react';
import './card-initialize.style.css';

import cardImg from '../../assets/img/card-img.png';

export const Card = ({cardData}) => {

  let {amount, selectedProvider, selectedCountry} = cardData

  let styles = {
    color:selectedProvider.color ? selectedProvider.color : '#000000'
  }

  return (
    <div className='card-data' style={styles}>
      <div className="section1">
        <div className="card-category">Recharge card</div>
        <div className="card-image">
          <img src={cardImg} alt="" />
        </div>
      </div>
      <div className="section2">
        <div className="card-amount">
          <div className="card-fiat">{selectedCountry.currencies} {parseInt(amount)?parseInt(amount).toLocaleString():''}</div>
          <div className="card-crypto">Ξ 0.0013</div>
        </div>
        <div className="provider-img">
          {selectedProvider.logo? <img src={selectedProvider.logo} alt="Network provider" />: ''}
        </div>
      </div>
    </div>
  )
}
