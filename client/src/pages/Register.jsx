/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" name="username" id="username" placeholder="username" />
                <input required type="email" name="email" id="email" placeholder="email" />
                <input required type="password" name="password" id="password" placeholder="password" />
                <button>Login</button>
                <p>This is an error!</p>
                <span>Do you have an account?<Link to="/login"> Login</Link></span>
            </form>
        </div>
    )
}

export default Register