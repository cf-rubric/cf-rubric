import axios from "axios";

const fetchData = async () => 
await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => ({
        error: false,
        users: res.data,
    }))
    .catch(() => ({
        error: true,
        users: null,
    }),
);
console.log(fetchData())
const MySchedule = ({ users, error }) => {
    console.log(users, "this is users")
    return (
        <div>
            <main className="h-screen">
                <section className="h-3/4">
                <article className="inline-block w-3/5 h-full p-4 m-8 bg-gray-300 border-4 border-black">
                    <h2 className="text-2xl text-center">My Class</h2>
                    {error && <div>There was an error fetching data.</div>}
                    {!error && users && ( 
                        <table className="w-11/12 mx-auto my-8 bg-gray-400 border-2 border-black">
                            <thead>
                                <tr>
                                    <th className="border border-black">Student Name</th>
                                    <th className="border border-black">Scheduled With</th>
                                    <th className="border border-black">Scheduling Status</th>
                                </tr>
                            </thead>

                            <tbody >
                                    {users.map((user, key) => (
                                    <tr key={key} className="text-center odd:bg-gray-200">
                                        <td className="pl-2 border border-black">{user.username}</td>
                                        <td className="pl-2 border border-black">{user.user}</td>
                                        <td className="pl-2 border border-black">Complete</td>
                                    </tr>
                                    ))}
                                
                                    <tr className="text-center ">
                                        <td className="pl-2 border border-black">Hodor Jarlson</td>
                                        <td className="pl-2 border border-black">TBD</td>
                                        <td className="pl-2 border border-black">Pending</td>
                                    </tr>
                                
                                    <tr className="text-center odd:bg-gray-200">
                                        <td className="pl-2 border border-black">Benjie Longbeard</td>
                                        <td className="pl-2 border border-black">John C.</td>
                                        <td className="pl-2 border border-black">03/21/2021</td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    )} 
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
                            <td className="pl-2 border border-black">03/21/2021 @ 2:30pm</td>
                        </tr>
                    </tbody>
                    </table>
                </article>
                
                </section>
            </main>
        </div>
    );
}
export async function getStaticProps(){
    const data = await fetchData();

    return {
        props:data,
    };
}

export default MySchedule;
