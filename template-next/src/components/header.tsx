import Navbar from "./Navbar"
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.fundo + `
         bg-fixed bg-top-right bg-no-repeat
         bg-cover 

        `} >
           <header className={styles.header}>
              <Navbar />
          </header>
        </div>
     
    )
}