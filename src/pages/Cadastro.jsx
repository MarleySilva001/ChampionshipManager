import React, { useState } from 'react';
import styles from '../styles/cadastro.module.css'
import CadastroForm from '../components/CadastroForm';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cadastro =() =>{
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    }); 
    const [confirmarSenha, setConfirmarSenha]=useState('')


    const [error,setError] = useState('')
    const Navigate = useNavigate()
         
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }
        localStorage.setItem('usuario', formData.usuario);

        try {
            await axios.post('http://localhost:5000/usuarios', formData);
            alert('Cadastro realizado com sucesso!');
            localStorage.setItem('usuario', formData.nome);
            Navigate('/home')
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Houve um erro ao cadastrar.');
        }   
    };
    return(
        <>
        <div className={styles.body}>
            
            <div className={styles.container}>
                <p className={styles.titulo}>Cadastro</p>
                <CadastroForm formData={formData} onChange={handleChange} onSubmit={handleSubmit}
                confirmarSenha={confirmarSenha} setConfirmarSenha={setConfirmarSenha}
                />
                <p className={styles.temLogin}>Já tem uma conta? <Link to={'/'}>Conecte-se</Link></p>
            </div>
        </div>
    </>
    )
}

export default Cadastro