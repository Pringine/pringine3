import React from 'react';

import './form.style.css'

import { BlockButton } from '../block-button/block-button.component';
import { InputField, InputFieldGroup } from '../input/input.component';
import { SelectInput } from '../select-input/select-input.component';

// import m

export const CardForm = ({data, getCountry, getProvider, getAmount}) => {

  const {countryCallingCodes: dial_code, flag} = data.selectedCountry;

  const prefix = dial_code ?`${flag} ${dial_code}`:'Country Code';

  return (
    <div className='card-form'>

      <SelectInput
        data={data.countries}
        default_name='Select Countries' 
        uni_key='alpha2'
        value='alpha2'
        displayed_name='name'
        getData={getCountry} />

      <SelectInput
        data={data.providers}
        default_name='Select Providers' 
        uni_key='id'
        value='id'
        displayed_name='name'
        getData={getProvider} />

      <div className="phone">
        <InputFieldGroup 
          formType='number' 
          placeholder='08xx xxx xxxx' 
          prefix={prefix} />
      </div>
      <InputField formType='number' placeholder='Amount' getAmount={getAmount} />

      <BlockButton url='transaction-detail' text='Top up' />
    </div>
  )
}
