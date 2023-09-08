import '@/styles/globals.css'
import '@/styles/App.css'
import Head from 'next/head';
import Layout from "../components/layouts/layout";
export default function App({ Component, pageProps }) {
  return( 

    <>
    <Head>
    <title>E.S</title>
    </Head>
        <Layout>
            <Component {...pageProps} />
         </Layout>
    </>
   
  )
}
