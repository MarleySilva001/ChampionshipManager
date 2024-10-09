import React from 'react';
import styles from '../styles/CadastroForm.module.css'
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';

const LoginForm = () =>{
    return(
        <div className={styles.bodyCadastro}>
        <div className={styles.formC}>
            <p>LOGIN</p>
        <form>
            
            <Input 
            placeholder={'Nome'}
            type={'text'}
            />
            <Input 
            placeholder={'Senha'}
            type={'password'}
            />
            <Link to={'/home'}>
            <Button
            type={'submit'}
            name={'CONFIRMAR'}
            />
            </Link>
        </form>
        </div>
        </div>
    )
}

export default LoginForm;