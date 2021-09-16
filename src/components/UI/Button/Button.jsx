import React from 'react'
import style from './Button.module.scss'

export default function Button({ children, onClick }) {
  return (
    <button
      className={style.myBtn}
      onClick={onClick}
     
    >
      { children }
    </button>
  )
}
