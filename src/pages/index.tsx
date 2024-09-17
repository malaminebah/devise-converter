import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '@/components/Nav/nav'
import Header from '@/components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Currency Converter</title>
        <meta name="description" content="Currency converter application" />
      </Head>

      <main>
        <NavBar/>
        <Header />
      </main>
    </>
  )
}

export default Home