export default function LoginForm(props) {
    return (
        <form className="m-auto bg-gray-200 w-1/3 text-center mt-5 p-10 rounded" onSubmit={ (event) => { props.loginHandler(event) }}>
            <input className="mb-5 w-5/6 h-10 rounded" type="text" name="username" placeholder="Username" />
            <br />
            <input className="mb-5 w-5/6 h-10 rounded" type="text" name="password" placeholder="Password" />
            <br />
            <button className="bg-red-600 w-5/6 h-10 rounded" type="submit">Sign In</button>
        </form>
    )
}