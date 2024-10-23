import React from 'react';
import styles from '../styles/NavHome.module.css'
import { Link } from 'react-router-dom';

const NavHome = () =>{
    return(
            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link to={'/home'}>Meus campeonatos</Link></li>
                    <li>Ranking</li>
                    <li>Recomendações</li>
                    <li><Link to={'/novo'}>Novo campeonato </Link></li>
                </ul>
            </div>
    )
}
export default NavHome