import React, { useState } from 'react';
import styles from '../styles/CadastroForm.module.css'
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';

const CadastroForm = ({onChange, formData, onSubmit, confirmarSenha, setConfirmarSenha}) =>{
    return(
        <form onSubmit={onSubmit}>  
            <Input 
            placeholder={'Nome'}
            type={'text'}
            onChange={onChange}
            value={formData.nome}
            name={'nome'}
            />
            <Input 
            placeholder={'Email'}
            type={'email'}
            onChange={onChange}
            value={formData.email}
            name={'email'}
            />
            <Input 
            placeholder={'Senha'}
            type={'password'}
            onChange={onChange}
            value={formData.senha}
            name={'senha'}
            />
            <Input 
            placeholder={'Confirme a senha'}
            type={'password'}
            onChange={setConfirmarSenha}
            value={confirmarSenha}
            />
            <Button
            type={'submit'}
            name={'CADASTRE-SE'}
            />
        </form>
        )
}

export default CadastroForm;