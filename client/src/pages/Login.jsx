/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" name="username" id="username" placeholder="username" />
        <input required type="password" name="password" id="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't you have an account?<Link to="/register"> Register</Link></span>
      </form>
    </div>
  )
}

export default Login