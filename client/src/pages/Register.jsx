/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8080/api/auth/register", inputs, { withCredentials: true })
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" name="username" id="username" placeholder="username" onChange={handleChange} />
                <input required type="email" name="email" id="email" placeholder="email" onChange={handleChange} />
                <input required type="password" name="password" id="password" placeholder="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
                <p>This is an error!</p>
                <span>Do you have an account?<Link to="/login"> Login</Link></span>
            </form>
        </div>
    )
}

export default Register