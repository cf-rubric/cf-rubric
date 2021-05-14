import { useState } from 'react'
import LoginHeader from './login_header'
export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (
        <div>
        <LoginHeader />
        <form className="w-1/3 p-10 m-auto mt-5 text-center bg-gray-200 rounded" onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">User Name</label>
                <input className="w-5/6 h-10 mb-5 border-2 border-gray-500 rounded" type="text" name="username" placeholder="Username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input className="w-5/6 h-10 mb-5 border-2 border-gray-500 rounded"  type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="Password" />
            </div>

            <button className="w-5/6 h-10 transition bg-red-600 rounded hover:bg-red-500" type="submit">Sign In</button>

        </form>
        </div>
    );
}