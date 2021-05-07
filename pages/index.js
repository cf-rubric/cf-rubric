import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Code Fellows Rubric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        
      </main>

      <footer className="">

      </footer>
    </div>
  )

  function Header(props){
    return(
    <header className="">
      <nav>
        <h1>Code Fellows Rubric</h1>
        <Link href="/schedule">Schedule Student</Link>
      </nav>
    </header>
    )
  }
}
