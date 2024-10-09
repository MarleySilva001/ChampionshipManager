import React from 'react';
import styles from '../styles/NavHome.module.css'

const NavHome = () =>{
    return(
            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <li>campeonatos</li>
                    <li>Novo </li>
                    <li>Ranking</li>
                    <li>Recomendações</li>
                </ul>
            </div>
    )
}
export default NavHome