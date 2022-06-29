import Navbar from "./Navbar"
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header} >
            <Navbar />
        </header>
    )
}