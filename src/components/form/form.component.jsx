import React from 'react';

import './form.style.css'

import { BlockButton } from '../block-button/block-button.component';
import { InputField } from '../input/input.component';
import { SelectInput } from '../select-input/select-input.component';

export const CardForm = ({providers}) => {

  return (
    <div className='card-form'>

      <SelectInput
        data={providers}
        default_name='Select Providers' 
        uni_key='id'
        value='id'
        displayed_name='name' />

      <div className="phone">
        {/* <div className="country-code"></div> */}
        <InputField formType='text' placeholder='08xx xxx xxxx' />
      </div>
      <InputField formType='text' placeholder='Amount' />

      <BlockButton text='Top up' />
    </div>
  )
}
