import React from 'react';
import './card-initialize.style.css';

export const Card = ({cardData}) => {

  let {card, selectedProvider: provider, selectedCountry: country} = cardData

  let styles = {
    color:provider.color ? provider.color : '#000000'
  }

  return (
    <div className='card-data' style={styles}>
      <div className="section1">
        <div className="card-category">Recharge card</div>
        {/* <div className="card-image">
          <img src={cardImg} alt="" />
        </div> */}
      </div>
      <div className="section2">
        <div className="card-amount">
          <div className="card-fiat">{country.currency} {parseInt(card.amount)?parseInt(card.amount).toLocaleString():''}</div>
          <div className="card-crypto">Ξ 0.0013</div>
        </div>
        <div className="provider-img">
          {provider.logo? <img src={provider.logo} alt="Network provider" />: ''}
        </div>
      </div>
    </div>
  )
}
