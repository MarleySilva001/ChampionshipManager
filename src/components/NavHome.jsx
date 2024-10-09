import React from 'react';
import styles from '../styles/NavHome.module.css'

const NavHome = () =>{
    return(
            <div className={styles.nav}>
                <ul>
                    <li>Meus campeonatos</li>
                    <li>Novo campeonato</li>
                    <li>Ranking</li>
                    <li>Recomendações</li>
                </ul>
            </div>
    )
}
export default NavHome