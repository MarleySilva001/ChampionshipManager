import React from 'react';
import styles from '../styles/NavHome.module.css'

const NavHome = () =>{
    return(
            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <li>Meus campeonatos</li>
                    <li>Ranking</li>
                    <li>Recomendações</li>
                    <li>Novo campeonato </li>
                </ul>
            </div>
    )
}
export default NavHome