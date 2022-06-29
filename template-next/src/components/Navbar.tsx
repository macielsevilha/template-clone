import Link from "../../node_modules/next/link"
import styles from '../styles/Home.module.css'
interface NavbarProps {
  
}

export default function Navbar() {
    return (
        <nav className={styles.layout}>
          <div className={`
            bg-slate-700 fixed right-0 
            hidden rounded
          `}>
             <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
          </div>
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