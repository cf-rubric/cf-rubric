import { useState, useEffect } from 'react'
import Head from 'next/head'
import { getToken } from '../api/data-fetcher'
import LoginForm from './login-form'
import Header from './header'
import Student from './student'
import Schedule from './schedule'
import MySchedule from './mySchedule'
import Footer from './footer'

export default function Index( ) {
    const [token, setToken] = useState();

    const [username, setUsername] = useState('');

    const [view, setView] = useState('');

        async function loginHandler(values) {
    
        const fetchedToken = await getToken(values);
        
        setView('home');
    
        setToken(fetchedToken);
    
        setUsername(values.username);
        
    }

    async function changeView(page) {
        
        setView(page);
    }

    if (!token) {
        return <LoginForm loginHandler={ loginHandler } />
    } else {
        if (view === 'home') {
            return (
                <div className="">
                    <Head>
                        <title>Code Fellows Rubric</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
    
                    <Header changeView={ changeView } />
                    <Student />
                    <Footer />
                </div>
            )
        } else if (view === 'schedule') {
            return (
                <div className="">
                    <Head>
                        <title>Code Fellows Rubric</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
    
                    <Header changeView={ changeView } />
                    <Schedule />
                </div>
            )
        } else if (view === 'mySchedule') {
            return (
                <div className="">
                    <Head>
                        <title>Code Fellows Rubric</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
    
                    <Header changeView={ changeView } />
                    <MySchedule />
                </div>
            )
        }
    }
}