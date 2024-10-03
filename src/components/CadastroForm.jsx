import React from 'react';
import styles from '../styles/CadastroForm.module.css'
import Input from './Input';
import Button from './Button';

const CadastroForm = () =>{
    return(
        <div className={styles.formC}>
            <p>Cadastro</p>
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
            <Button
            type={'submit'}
            name={'CADASTRE-SE'}
            />
        </form>
        </div>
    )
}

export default CadastroForm;