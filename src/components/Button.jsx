import React from 'react';
import style from '../styles/Button.module.css'

const Button = ({type, onClick, name}) =>{
    return(
        <button
        type={type}
        onCLick={onClick}
        >{name}</button>
    )

}
export default Button