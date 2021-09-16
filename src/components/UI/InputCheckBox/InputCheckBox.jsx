import React from 'react'

import style from './CheckBox.module.scss'

export default function InputCheckBox({ onClick }) {
  return (
    <input
       className={style.box} 
       type="checkbox" 
      onClick={onClick}
    />
  )
}