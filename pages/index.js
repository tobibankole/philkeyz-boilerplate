import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Philkeyz Music Official" />
        <p className="description">
          Website coming shortly. in the meantime, check out my socials @philkeyz 🔥
        </p>
      </main>

      <Footer />
    </div>
  )
}
