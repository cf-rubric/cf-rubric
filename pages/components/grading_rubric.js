export default function GradingRubric(props) {
    return (
        <div className="mt-5 p-5 border-2 border-black w-2/3 m-auto">
            <form onSubmit={ (event) => {props.submitWhiteboardHandler(event)} } id="whiteboard"></form>
            <input type="hidden" name="problem_domain_url" value="props" form="whiteboard" />
            <p className="w-11/12 bg-gray-200 m-auto border-2 border-black mt-10">Problem Domain: </p>
            <table className="m-auto w-11/12 bg-gray-200 border-l-2 border-r-2 border-black" >
                <thead className="">
                    <tr>
                        <td>Student Name</td>
                        <td>Class Code</td>
                        <td>Instructor Name</td>
                        <td>Passed (true/false)</td>
                        <td>Todays Date</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td><input className="w-full border-t-2 border-r-2 border-black" name="student_name" placeholder="Student name" type="text" form="whiteboard" /></td>
                        <td><input className="w-full border-t-2 border-r-2 border-black" name="class_code" placeholder="Class code" type="text" form="whiteboard" /></td>
                        <td><input className="w-full border-t-2 border-r-2 border-black" name="instructor_name" placeholder="Instructor name" type="text" form="whiteboard" /></td>
                        <td><input className="w-full border-t-2 border-r-2 border-black" name="passed_wb" placeholder="Passed (true/false)" type="text" form="whiteboard" /></td>
                        <td><input className="w-full border-t-2 border-black" name="date" type="" value={ Date() } form="whiteboard" /></td>
                    </tr>
                </tbody>
            </table>
            <table className="m-auto w-11/12 bg-gray-200 border-2 border-black">
                <tr className="bg-gray-300 border-2 border-black">
                    <td></td>
                    <td className="">
                        <p className="">Score:</p>
                    </td>
                    <td className="">
                        <p className="">Notes:</p>
                    </td>
                </tr>
                <tr className="bg-gray-300 border-2 border-black">
                    <td className="">
                        Interpreted the Question:
                    </td>
                    <td className=""></td>
                    <td className=""></td>
                </tr>
                <tr className="">
                    <td>
                        <p>Asked meaningful clarifying questions: </p>
                        <p>Identified inputs and outputs: </p>
                        <p>Visually illustrated the problem domain: </p>
                        <p>Identified optimal data structure and/or algorithm: </p>
                    </td>
                    <td className="border-2 border-black">
                        <input className="w-full border-b-2 border-black" name="crit_1" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_2" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_3" type="text" form="whiteboard" /><br />
                        <input className="w-full" name="crit_4" type="text" form="whiteboard" />
                    </td>
                    <td className="">
                        <input className="w-full h-auto" name="interpretation" type="text" form="whiteboard" />
                    </td>
                </tr>
                <tr className="bg-gray-300 border-2 border-black">
                    <td className="">Solved the technical problem: </td>
                    <td className=""></td>
                    <td className=""></td>
                </tr>
                <tr className="">
                    <td className="">
                        <p>Presented and understood a working algorithm: </p>
                        <p>Final code was syntactically correct: </p>
                        <p>Final code was idiomatically correct: </p>
                        <p>Solution was the best possible option: </p>
                    </td>
                    <td className="border-2 border-black">
                        <input className="w-full border-b-2 border-black" name="crit_5" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_6" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_7" type="text" form="whiteboard" /><br />
                        <input className="w-full" name="crit_8" type="text" form="whiteboard" />
                    </td>
                    <td className="">
                        <input className="w-full" name="solved_technical" type="text" form="whiteboard" />
                    </td>
                </tr>
                <tr className="bg-gray-300 border-2 border-black">
                    <td className="">Analyzed the proposed solution: </td>
                    <td className=""></td>
                    <td className=""></td>
                </tr>
                <tr className="">
                    <td className="">
                        <p>Stepped through their solution: </p>
                        <p>Big O time and space are analyzed: </p>
                        <p>Explain an approach to testing: </p>
                        <p>Verbalized their thought process: </p>
                    </td>
                    <td className="border-2 border-black">
                        <input className="w-full border-b-2 border-black" name="crit_9" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_10" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_11" type="text" form="whiteboard" /><br />
                        <input className="w-full" name="crit_12" type="text" form="whiteboard" />
                    </td>
                    <td>
                        <input className="w-full" name="analyzed_solution" type="text" form="whiteboard" />
                    </td>
                </tr>
                <tr className="bg-gray-300 border-2 border-black">
                    <td className="">Communicated effectively throughout: </td>
                    <td className=""></td>
                    <td className=""></td>
                </tr>
                <tr className="">
                    <td className="">
                        <p>Used correct terminology: </p>
                        <p>Used the time available effectively: </p>
                        <p>Was not overconfident (not listening to suggestions): </p>
                        <p>Was not under-confident (unsure of known algorithm): </p>
                        <p>Whiteboard was readable (penmanship and spacing): </p>
                    </td>
                    <td className="border-2 border-black">
                        <input className="w-full border-b-2 border-black" name="crit_13" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_15" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_16" type="text" form="whiteboard" /><br />
                        <input className="w-full border-b-2 border-black" name="crit_17" type="text" form="whiteboard" /><br />
                        <input className="w-full" name="crit_18" type="text" form="whiteboard" />
                    </td>
                    <td className="">
                        <input className="w-full h-full" name="communication" type="text" form="whiteboard" />
                    </td>
                </tr>
            </table>
            <button className="h-10 w-40 m-auto mt-5 bg-red-600 rounded" type="submit">Submit Rubric</button>
        </div>
    )
}