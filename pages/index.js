import Schedule from './components/schedule.js';
import Head from 'next/head'
import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'
import { useState } from 'react'
import { getToken } from '../services/data-fetcher.js'


export default function Home() {

  // // State variables go here

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
        <main className="h-screen">
          <p>List of Students go here</p>
        </main>

        <Footer />
      </div>
    )
  // }

}
