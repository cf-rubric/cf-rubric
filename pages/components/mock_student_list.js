import DateBox from "./date_picker"

export default function StudentList(props) {
    const students = [
        {name: 'Hodor',
        class: 'Seattle-Python-401n2',
        instructor: 'Darth Roger'},
        {name: 'Glitter Gizmo',
        class: 'Seattle-Java-401d73',
        instructor: 'Little Nicky'},
        {name: 'Benji',
        class: 'Seattle-Python-401d7',
        instructor: "Tells Oneaux"}
    ]
    const student_list = students.map((student) => {
        return (
            <tr className="even:bg-gray-300">
                <td className="border-r-2 border-gray-300">{student.name}</td>
                <td className="border-r-2 border-gray-300">{student.class}</td>
                <td className="border-r-2 border-gray-300">{student.instructor}</td>
                <td className="border-r-2 border-gray-300"><DateBox selectedDate={ props.selectedDate } setSelectedDate={ props.setSelectedDate } form="schedule" /></td>
                <td><button className="w-4/5 bg-red-600 rounded" type="submit" form="schedule">Schedule</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            { student_list }
        </tbody>
    )
}