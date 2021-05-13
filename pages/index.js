import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'

export default function Home (){
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
