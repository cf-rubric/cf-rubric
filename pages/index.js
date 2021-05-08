import Schedule from './components/schedule.js';
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
        {/* Make sure when adding an href to keep the same format as below */}
        <Link href="/components/schedule">Schedule Student</Link>
        <Link href="/student">Student</Link>
      </nav>
    </header>
    )
  }
}
