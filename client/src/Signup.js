import React from 'react';
import { useState } from 'react'

function SignupForm ( {switchPage, updateUser} ){
    // Initializing state variables
    const [submited, setSubmited] = useState (false) // for switching between signup form and success message
    const [signupData, setSignupData] = useState({ // for storing form data
        username: "",
        email: "",
        password:"",
        avatar: ""
    })
    const [errors, setErrors] = useState([]) // for storing form errors
    const {username, email, password, avatar} = signupData

    // Function for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            avatar
        }
        // Sending a POST request to the server with the user data
        fetch('/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
            if (res.ok){
                res.json().then(user => {
                    updateUser(user)
                })
            }else{
                res.json().then(json => setErrors(Object.entries(json.errors))) // for storing signup form errors
            }
        })
        setSubmited(!submited) // Switching to success message

        setSignupData({
            username: "",
            email: "",
            password:"",
            avatar: ""
        })
    }

    // Function for handling form input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleAvatar = (e) => {
        setSignupData({ ...signupData, avatar: e.target.src }) // Setting avatar in form data
        const classNameList = e.target.parentNode.classList
        classNameList.contains("selected") ?
        classNameList.remove("selected"):
        classNameList.add("selected")
    }

     // Signup form
    return (
        <div className = "signup-form">
            <form onSubmit={handleSubmit}>
                <div className = "title">
                    <h1> SIGNUP</h1>
                </div>
                <div className = "input-box">
                    <div className = "input-div">
                        <i className="fa-solid fa-user fa-lg"></i>
                        <input
                            type = "text"
                            placeholder = 'enter username'
                            name = "username"
                            value = {username}
                            onChange = {handleChange}/>
                    </div>
                    <div className = "input-div">
                        <i className ="fa-solid fa-envelope"></i>
                        <input
                            type = "text"
                            placeholder = 'enter your email'
                            name = "email"
                            value = {email}
                            onChange = {handleChange}
                            />
                    </div>
                    <div className = "input-div">
                        <i className = "fa-solid fa-lock fa-lg"></i>
                        <input
                            type = "password"
                            placeholder = 'enter password'
                            name = "password"
                            value = {password}
                            onChange = {handleChange}
                        />
                    </div>
                    <div className = "input-div">
                        <div className = "img-div">
                            <i className = "fa-solid fa-circle-user"></i>
                            <div className = "avatar-wrap"
                                name = "avatar"
                                value = {avatar}
                                onClick = { handleAvatar }
                            >
                                {/* custom avatar by clicking on the image */}
                                <div className = "avatar-div"
                                >
                                    <li type = "text" value = "Bluuuu" >Bluuuue</li>
                                    <img  className = "avatar-img" src = "https://robohash.org/LWA.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div" value = "Yellooow">
                                    <li>Yellooow</li>
                                    <img className = "avatar-img" src = "https://robohash.org/OTC.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Viiiolet">Viiiolet</li>
                                    <img className = "avatar-img" src = "https://robohash.org/NPC.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Ooorange">Ooorange</li>
                                    <img className = "avatar-img" src = "https://robohash.org/3JR.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Coooffee">Coooffee</li>
                                    <img className = "avatar-img" src = "https://robohash.org/S15.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Reeeed">Reeeed</li>
                                    <img className = "avatar-img" src = "https://robohash.org/OYT.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Grrrreen">Grrrreen</li>
                                    <img className = "avatar-img" src = "https://robohash.org/LEJ.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Pinnnk">Pinnnk</li>
                                    <img className = "avatar-img" src = "https://robohash.org/SQ0.png?set=set1" alt = "avatar-img"/>
                                </div>
                                <div className = "avatar-div">
                                    <li value = "Whieeet">Whiteeee</li>
                                    <img className = "avatar-img" src = "https://robohash.org/YW8.png?set=set1" alt = "avatar-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={ {margin : "10px" }}>
                        { submited ?
                        <p className = 'link-btn' onClick = {switchPage}> Successed, Log in here</p>
                        :
                        <p className = 'link-btn' onClick = {switchPage}> Have an account? Log in</p>}
                    </div>

                </div>
                <div className = "btn-box">
                    <button type = "submit">Sign Up</button>
                </div>
            </form>
            {/* error massage */}
            {errors?errors.map(e => <div className = "error-message">{e[0]+': ' + e[1]}</div>) : null}
        </div>
    )
}

export default SignupForm
