import { on } from "stream"
import Link from "../../node_modules/next/link"
import styles from '../styles/Navbar.module.css'
import Icons from "./Icons"
import NavbarIcon from './Icons'



export default function Navbar(props) {
    return (
        <nav className={styles.menu}>
         <NavbarIcon  onClick />
          <ul className={`
            flex justify-center p-2
            text-white 
            
          `}>
                <li className="m-1 px-7 py-3 border bg-slate-700">
                    <Link href="/">
                      <a>Homepage</a>
                    </Link>
                </li>
                <li className="m-1 px-7 py-3 border">
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                </li>
                <li className="m-1 px-7 py-3 border">
                    <Link href="/service">
                      <a>Services</a>
                    </Link>
                </li>
                <li className="m-1 px-7 py-3 border">
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                </li>
                <li className="m-1 px-7 py-3 border">
                    <Link href="/external">
                      <a>External</a>
                    </Link>
                </li>
                
            </ul>
        </nav>
    )
}