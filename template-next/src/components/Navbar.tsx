import Link from "../../node_modules/next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
          <ul className="m-2">
                <li className={styles.border}>
                    <Link href="/">
                      <a>Homepage</a>
                    </Link>
                </li>
                <li className={styles.border} >
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                </li>
                <li  className={styles.border}>
                    <Link href="/service">
                      <a>Services</a>
                    </Link>
                </li>
                <li className={styles.border} >
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/external">
                      <a>External</a>
                    </Link>
                </li>
                
            </ul>
        </nav>
    )
}