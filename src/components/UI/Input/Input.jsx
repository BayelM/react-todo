import React from 'react'

import style from './Input.module.scss'
export default function Input({ onChange, value }) {
  return (
    <input 
      className={style.inp}
      onChange={onChange}
      value={value}
    />
  )
}
