import React from 'react';
import './card-initialize.style.css';

import cardImg from '../../assets/img/card-img.png';

export const Card = ({cardData}) => {

  let {amount, provider, country} = cardData

  let styles = {
    color:provider.color ? provider.color : '#000000'
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
          <div className="card-fiat">{country.currencies} {parseInt(amount)?parseInt(amount).toLocaleString():''}</div>
          <div className="card-crypto">Ξ 0.0013</div>
        </div>
        <div className="provider-img">
          {provider.logo? <img src={provider.logo} alt="Network provider" />: ''}
        </div>
      </div>
    </div>
  )
}
