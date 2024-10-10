import React from 'react';
import NavHome from '../components/NavHome';
import styles from '../styles/home.module.css'
import CardCamp from '../components/CardCamp';
import Footer from '../components/Footer';
const Home =() =>{
    return(
        <>
        <NavHome />
        <div className={styles.homeBody}>
           
           <CardCamp />  
        </div>
        <Footer />
        </>
    )
}

export default Home