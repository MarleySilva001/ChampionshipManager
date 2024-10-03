import React from 'react';
import styles from '../styles/Input.module.css'
const Input =({placeholder, type}) =>{
    return(
        <>
        <div>
            <input
            className={styles.input}
            placeholder={placeholder}
            type={type}
            />
        </div>
        </>
    )
}

export default Input