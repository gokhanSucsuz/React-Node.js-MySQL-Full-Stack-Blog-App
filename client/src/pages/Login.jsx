/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/api/auth/login", inputs, { withCredentials: true })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" name="username" id="username" placeholder="username" onChange={handleChange} />
        <input required type="password" name="password" id="password" placeholder="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        <p>This is an error!</p>
        <span>Don't you have an account?<Link to="/register"> Register</Link></span>
      </form>
    </div>
  )
}

export default Login