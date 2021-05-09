import Link from 'next/link'
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const faker = require('faker');

export default function Schedule (){
    const [selectedDate, setSelectedDate] = useState(null);

    const randomName = faker.name.findName();

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