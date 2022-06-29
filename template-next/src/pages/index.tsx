import styles from '../styles/Home.module.css'
import Head from '../../node_modules/next/head'
import Navbar from '../components/Navbar'


export default function Home(props) {
  return (
    <>
    <Head>
       <title>Clonagem de site</title>
       <meta name='keykorks' content='clonagem, treinamento' />
       <meta name='description' content='criando clonagem com next' />
       
    </Head>
      <div className={styles.container}>
        <div>
          {props.children}
        </div>
      </div>
    </>
  )
}
