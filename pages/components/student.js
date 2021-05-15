import Link from 'next/link'
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import StudentList from'./mock_student_list'


export default function Student (props){
    const [selectedDate, setSelectedDate] = useState(null);

    function handleSubmit(event) {
        event.preventDefault()
        // add functionality to schedule whiteboard
        props.changeView('schedule')
    }

    return (
        <div className="m-10 border-2 border-black">
            <form onSubmit={ (event) => handleSubmit(event) } className="" id="schedule" />
            <table className="w-11/12 m-auto mt-5 mb-5 text-xl leading-loose bg-gray-200 border-2 border-gray-400">
                <thead>
                    <tr className="bg-gray-300 border-b-2 border-gray-400">
                        <td>Name</td>
                        <td>Class</td>
                        <td>Instructor</td>
                        <td>Date</td>
                        <td>Schedule/Status</td>
                    </tr>
                </thead>
                <StudentList />
            </table>
        </div>
    )
}
