import Link from 'next/link'
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule (props){
    // const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null);

    const formHandler = (event) => {
        event.preventDefault();

        alert(event.target.date.value)
        const formData = new FormData(event.target)
    }

    return (
        <div className="mx-20 border bg-green-400">
            <form name="formData" onSubmit={formHandler}>
            <Link href="/">Home</Link>
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
            <input name="whiteboard" className="border-2 bg-green-400">

            <p>Select Whiteboard Challenge</p>
            </input>
            <br />
            <br />
            <button className="px-20 py-3 m-2 bg-blue-500">Submit</button>
            </form>
        </div>
    )
}