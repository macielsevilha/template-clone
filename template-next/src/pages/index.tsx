import Head from '../../node_modules/next/head'
import Header from '../components/header'

export default function Home(props) {
  return (
    <>
    <Head>
       <title>Clonagem de site</title>
       <meta name='keykorks' content='clonagem, treinamento' />
       <meta name='description' content='criando clonagem com next' />

    </Head>
     <Header></Header>
    </>
  )
}
