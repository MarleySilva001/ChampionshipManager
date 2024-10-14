import React from 'react';
import styles from '../styles/CadastroForm.module.css'
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';

const CadastroForm = ({onChange, formData, onSubmit}) =>{
    return(
        <form onSubmit={onSubmit}>  
            <Input 
            placeholder={'Nome'}
            type={'text'}
            onChange={onChange}
            value={formData.Nome}
            />
            <Input 
            placeholder={'Email'}
            type={'email'}
            onChange={onChange}
            value={formData.Email}
            />
            <Input 
            placeholder={'Senha'}
            type={'password'}
            onChange={onChange}
            value={formData.Senha}
            />
            <Input 
            placeholder={'Confirme a senha'}
            type={'password'}
            onChange={onChange}
            value={formData.ConfirmarSenha}
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