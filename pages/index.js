import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Route from './components/Route.js';



export default function Home() {
  const [fakerData, setFakerData] = useState(null)
  console.log(fakerData)


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/api/fakeData', {
        method: 'POST',
        body: JSON.stringify({
          limit: 5,
        }),
      })
      return response.json()
    }
    getData().then((fakerData) => {
      setFakerData(fakerData)
    })
  }, [])

    return (
      <div className="">
        <Head>
          <title>Code Fellows Rubric</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Route path='/'>
          <Overview />
        </Route>
        <main className="">
          <h1>Hello, World!</h1>

          {/* {djangoData.detail.map(detail => {detail.detail})} */}
          {!fakerData ? '...Loading Fake Data' : <pre>{JSON.stringify(fakerData, null, 2)}</pre>}
        </main>

        <footer className="">

        </footer>
      </div>
    )
  // }


}
