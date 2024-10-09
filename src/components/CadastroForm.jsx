import React from 'react';
import styles from '../styles/CadastroForm.module.css'
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';

const CadastroForm = () =>{
    return(
        <form>  
            <Input 
            placeholder={'Nome'}
            type={'text'}
            />
            <Input 
            placeholder={'Email'}
            type={'email'}
            />
            <Input 
            placeholder={'Senha'}
            type={'password'}
            />
            <Input 
            placeholder={'Confirme a senha'}
            type={'password'}
            />
            <Link to={'/home'}>
            <Button
            type={'submit'}
            name={'CADASTRE-SE'}
            />
            </Link>
        </form>
        )
}

export default CadastroForm;