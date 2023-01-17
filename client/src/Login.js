import React from 'react';
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage ( {switchPage, updateUser}){
    const [loginData, setLoginData] = useState({// for storing login form data
        username:"",
        password:""
    })
    let navigate = useNavigate() // for navigating to a different route when login is triggered

    // Initializing state variables
    const [errors, setErrors] = useState([]) // for storing errors data 
    const {username, password} = loginData // for storing user's entered username and password in loginData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }

         // Sending a POST request to the server with the user data
        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                updateUser(user) // updating user from App component
                navigate('/welcome') // navigating to the welcome route
            })
            } else{
                res.json().then(json => setErrors(json.errors)) // for storing login form errors
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value }) // Updating login data in state
    }

    // Login form
    return (
        <div className = "login-form">
        <form onSubmit={handleSubmit}>
            <div className = "title">
                <h1>LOG IN</h1>
            </div>
            <div className = "input-box">
                <div className = "input-div">
                <i className="fa-solid fa-user fa-lg"></i>
                <input
                    type = "text"
                    name = "username"
                    value = {username}
                    placeholder = 'enter username'
                    onChange = {handleChange} />
                </div>
                <div className = "input-div">
                <i className="fa-solid fa-lock fa-lg"></i>
                <input
                    type = "password"
                    name = "password"
                    value = {password}
                    placeholder = 'enter password'
                    onChange = {handleChange}
                    />
                </div>
                <div style={ {margin : "10px" }}>
                    <p className = 'link-btn' onClick = {switchPage}> Create An Account</p>
                </div>
            </div>
            <div className = "btn-box">
                <button type="submit"> Login</button>
            </div>
        </form>
        {/* error message */}
        {errors? <div className = "error-message">{errors}</div>: null}
    </div>
    )
}

export default LoginPage
