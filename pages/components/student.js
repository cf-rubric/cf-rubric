import Link from 'next/link'
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Header from './header'

export default function Student (){
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <Link href="/">Home</Link>
            <br />
            <br />
            <p>Select Date and Time</p>
            <DatePicker className="border-2"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="MM/dd/yyyy h:mm aa"
            />
        </div>
    )
}
