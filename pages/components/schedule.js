import Link from 'next/link'
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule (props){
    // const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null);

    const formHandler = (event) => {
        event.preventDefault();

        alert(event.target.student.value)
        alert(event.target.date.value)
        alert(event.target.whiteboard.value)

        const formData = new FormData(event.target)
    }

    return (
        <div>
            <Link href="/" className="text-xl">Home</Link>
            <form name="formData" onSubmit={formHandler} className="mx-20 border-black bg-green-400">
            <br />
            <br />

            <p>Student</p>
            <input name="student" className="border-2 bg-green-400">

            </input>
            <br />
            <br />
            <p>Select Date and Time</p>
            <DatePicker name="date" className="border-2 bg-green-400"
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
            <input name="whiteboard" className="border-2 bg-green-400">

            </input>
            <br />
            <br />
            <button className="px-20 py-3 m-2 bg-blue-500">Submit</button>
            </form>
        </div>
    )
}