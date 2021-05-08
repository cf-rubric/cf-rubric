import Schedule from './components/schedule.js';
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getToken } from '../services/data-fetcher.js'



export default function Home() {

  // State variables go here

  // const [token, setToken] = useState();

  // // Handlers go here or in '../services/data-fetcher.js'

  // function loginHandler(){
  //   data = getToken();
  //   setToken(data.token);
  // }

  // function logoutHandler(){
  //   url = `https://slack.com/api/auth.revoke?token=${ token }`;
  //   axios.post(url);
  //   setToken(null);
  // }

  // if (!token) {
  //   return (
  //     <div className="">
  //       <LoginPage loginHandler={ loginHandler } />
  //     </div>
  //   )
  // } else {
    return (
      <div className="">
        <Head>
          <title>Code Fellows Rubric</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Header logoutHandler={ logoutHandler } /> */}
        <Header />
        <main className="">
          
        </main>

        <footer className="">

        </footer>
      </div>
    )
  // }

  function Header(props){
    return(
    <header className="bg-gray-500">
      <nav>
        <h1 className="text-xl">Code Fellows Rubric</h1>
        {/* Make sure when adding an href to keep the same format as below */}
        <Link href="/components/schedule">Schedule Student</Link>
        <Link href="/student">Student</Link>
      </nav>
    </header>
    )
  }
}
