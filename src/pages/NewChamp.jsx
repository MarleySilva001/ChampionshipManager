import Footer from "../components/Footer"
import NavHome from "../components/NavHome"
import styles from '../styles/NewChamp.module.css'

const NewChamp = () => {
    return(
        <div className={styles.newChamp}>
        <NavHome />
        <div className={styles.homeBody}>
        <img className={styles.newimg} src="../../public/+.png" alt=""/>
        </div>
        <Footer />
        </div>
    )
}

export default NewChamp