import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.paulo}>
                    <p className={styles.fooTitle}>DESENVOLVIDO POR:</p>
                    <ul className={styles.ulFooter}>
                        <li>Ian Murad <img src="ian.png" alt="oi" /></li>
                        <li>Marlei Cliff <img src="marlei.png" alt="oi" /></li>
                        <li>Tiago Domingos <img src="thiago.png" alt="oi" /></li>
                        <li>Kalil Domingues <img src="kalil.png" alt="oi" /></li>
                        <li>Victor Sêmen <img src="mickey.png" alt="oi" /></li>
                        <li>Pedro Rofmann <img src="pedro.png" alt="oi" /></li>
                    </ul>
                    <p className={styles.copy}>TODOS OS DIREITOS RESERVADOS &copy;</p>
                </div>
            </section>
        </>
    )
}
export default Footer;