import React from 'react';
import NavHome from '../components/NavHome';
import styles from '../styles/home.module.css'
const Home =() =>{
    return(
        <>
        <div className={styles.homeBody}>
           <NavHome />
        </div>
        </>
    )
}

export default Home