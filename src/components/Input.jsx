import React from 'react';
import styles from '../styles/Input.module.css'
const Input =({placeholder, type, value, onChange, name}) =>{
    return(
        <>
        <div>
            <input
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            required='true'
            />
        </div>
        </>
    )
}

export default Input