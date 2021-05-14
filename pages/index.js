import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LoginForm from './components/login-form';
import { getToken } from './api/data-fetcher'
import Header from './components/header'
import Footer from './components/footer'

export default function Home (){
  
  const [token, setToken] = useState();

  const [username, setUsername] = useState('');

  async function loginHandler(values) {

      const fetchedToken = await getToken(values);

      setToken(fetchedToken);

      setUsername(values.username);
  }

  function logoutHandler() {
    setToken(null);
}

if (!token) return <LoginForm onSubmit={loginHandler} />

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
