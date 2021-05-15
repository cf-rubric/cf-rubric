import Link from 'next/link'
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Header from './header'
import Footer from './footer'

export default function MySchedule(){
    const user = {
        username: 'hodor',
        user: 'rudy',
        date:'5/15/2021'
    }
    return (
        <div>
            <main className="h-screen">
                <section className="h-3/4">
                <article className="inline-block w-3/5 h-full p-4 m-8 bg-gray-300 border-4 border-black">
                    <h2 className="text-2xl text-center">My Class</h2>
                   
                        <table className="w-11/12 mx-auto my-8 bg-gray-400 border-2 border-black">
                            <thead>
                                <tr>
                                    <th className="border border-black">Student Name</th>
                                    <th className="border border-black">Scheduled With</th>
                                    <th className="border border-black">Scheduling Status</th>
                                </tr>
                            </thead>

                            <tbody >
                                    
                                    <tr className="text-center odd:bg-gray-200">
                                        <td className="pl-2 border border-black">{user.username}</td>
                                        <td className="pl-2 border border-black">{user.user}</td>
                                        <td className="pl-2 border border-black">Complete/PASS</td>
                                    </tr>
                                 
                                
                                    <tr className="text-center ">
                                        <td className="pl-2 border border-black">Glitter Gizmo</td>
                                        <td className="pl-2 border border-black">TBD</td>
                                        <td className="pl-2 border border-black">Pending</td>
                                    </tr>
                                
                                    <tr className="text-center odd:bg-gray-200">
                                        <td className="pl-2 border border-black">Benjie Longbeard</td>
                                        <td className="pl-2 border border-black">John C.</td>
                                        <td className="pl-2 border border-black">05/14/2021 02:30 PM</td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    
                </article>
                
                <article className="inline-block w-4/12 h-full p-4 text-center bg-gray-300 border-4 border-black">
                <h2 className="text-2xl text-center">My Schedule</h2>
                <table className="w-11/12 mx-auto my-8 bg-gray-400 border-2 border-black">
                    <thead>
                        <tr >
                            <th className="border border-black">Name</th>
                            <th className="border border-black">Date and Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="text-center odd:bg-gray-200">
                            <td className="pl-2 border border-black">Benjie Longbeard</td>
                            <td className="pl-2 border border-black">05/14/2021 2:30 PM</td>
                        </tr>
                    </tbody>
                    </table>
                </article>
                
                </section>
            </main>
        </div>
    );
}
