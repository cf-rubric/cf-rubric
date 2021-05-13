import Link from 'next/link'
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import Header from '../components/header'
import Footer from '../components/footer'


export default function Schedule (){
    const [selectedDate, setSelectedDate] = useState(null);
    const [schedule, setSchedule] = useState("")

    const formHandler = (event) => {
        event.preventDefault();

        // alert(event.target.student.value)
        // alert(event.target.date.value)
        // alert(event.target.whiteboard.value)

        const formData = new FormData(event.target)
        const schedule = JSON.stringify(Object.fromEntries(formData))
        setSchedule(schedule)
    }

    return (
        <div>
            <Header/>
            <h1 className="p-4 text-4xl text-center">Schedule Student</h1>
            <form name="formData" onSubmit={formHandler} className="p-20 mb-5 border-4 border-gray-500 mx-96">

            <p>Student</p>
            <input name="student" className="border-2 " />
            
            <br />
            <br />
            <p>Select Date and Time</p>
            <DatePicker name="date" className="border-2 "
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                // Important that HH needs to be capitalized
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="Time"
                // aa shows am/pm
                dateFormat="MM/dd/yyyy h:mm aa"
            />
            <br />
            <br />
            <p>Select Whiteboard Challenge</p>
            <input name="whiteboard" className="border-2 ">

            </input>
            <br />
            <br />
            <button className="px-20 py-3 m-2 transition bg-red-500 hover:bg-red-400">Submit</button>
            </form>

            <Footer/>
        </div>
    )
}