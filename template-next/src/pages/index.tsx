import styles from '../styles/sass/index.module.scss'
import Menu from '../components/Menu'


export default function Home(props) {
  return ( 

      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.menu}>
            <Menu />
          </div>
        </header>
      </div>

  )
}
