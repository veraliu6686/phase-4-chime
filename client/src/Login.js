import React from 'react';
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage ( {switchPage, updateUser}){
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    })
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const {username, password} = loginData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
    //    console.log(user)
        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                updateUser(user)
                navigate('/welcome')
            })
            } else{
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

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
                    <p className = 'link-btn' onClick = {switchPage}> create an account</p>
                </div>
            </div>
            <div className = "btn-box">
                <button type="submit"> Login</button>
            </div>
        </form>
        {errors? <div className = "error-message">{errors}</div>: null}
    </div>
    )
}

export default LoginPage
