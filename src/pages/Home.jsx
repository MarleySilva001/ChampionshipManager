import React from 'react';
import NavHome from '../components/NavHome';
import styles from '../styles/home.module.css'
import CardCamp from '../components/CardCamp';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <NavHome />
            <div className={styles.homeBody}>
                <div className={styles.homecard}>
                    <CardCamp />
                    <CardCamp />
                    <CardCamp />
                    <CardCamp />
                </div>
                <div className={styles.homecard}>
                    <CardCamp />
                    <CardCamp />
                    <CardCamp />
                    <CardCamp />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home