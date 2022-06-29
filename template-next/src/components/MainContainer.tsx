import styles from '../styles/Home.module.css'
import Footer from "./Footer";
import Header from "./header";

export default function MainContainer(props) {
    return (
        <div className={styles.container}>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}