import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getToken } from '../services/data-fetcher.js'


export default function Home() {

  // State variables go here

  const [token, setToken] = useState();

  // Handlers go here or in '../services/data-fetcher.js'

  function loginHandler(){
    data = getToken();
    setToken(data.token);
  }

  function logoutHandler(){
    url = `https://slack.com/api/auth.revoke?token=${ token }`;
    axios.post(url);
    setToken(null);
  }

  if (!token) {
    return (
      <div className="">
        <LoginPage loginHandler={ loginHandler } />
      </div>
    )
  } else {
    return (
      <div className="">
        <Head>
          <title>Code Fellows Rubric</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header logoutHandler={ logoutHandler } />
        <main className="">
          
        </main>

        <footer className="">

        </footer>
      </div>
    )
  }

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
