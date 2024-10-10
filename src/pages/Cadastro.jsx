import React from 'react';
import styles from '../styles/cadastro.module.css'
import CadastroForm from '../components/CadastroForm';
import { Link } from 'react-router-dom';

const Cadastro =() =>{
    return(
        <>
        <div className={styles.body}>
            
            <div className={styles.container}>
                <p className={styles.titulo}>Cadastro</p>
                <CadastroForm />
                <p>Já tem uma conta? <Link to={'/'}>Conecte-se</Link></p>
            </div>
        </div>
    </>
    )
}

export default Cadastro