import React from 'react';
import { useState } from 'react'

function SignupForm ( {switchPage, updateUser} ){
    const [submited, setSubmited] = useState (false)
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password:"",
        avatar: ""
    })
    const [errors, setErrors] = useState([])
    const {username, email, password, avatar} = signupData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            avatar
        }
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
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setSubmited(!submited)

        setSignupData({
            username: "",
            email: "",
            password:"",
            avatar: ""
        })

        console.log(e.target)
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleAvatar = (e) => {
        setSignupData({ ...signupData, avatar: e.target.src })
        const classNameList = e.target.parentNode.classList
        classNameList.contains("selected") ?
        classNameList.remove("selected"):
        classNameList.add("selected")
    }
    
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
                        {/* <select
                            type = "text"
                            placeholder = 'pick your avatar'
                            name = "avatar"
                            // value = {avatar}
                            onChange = {handleChange}
                        /> */}
                            <div className = "avatar-wrap"
                                name = "avatar"
                                value = {avatar}
                                onClick = { handleAvatar }
                            >

                                <div className = "avatar-div"
                                >
                                    <li type = "text" value = "Bluuuu" >Bluuuu</li>
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
                                    <li value = "Whieeet">Whieeet</li>
                                    <img className = "avatar-img" src = "https://robohash.org/YW8.png?set=set1" alt = "avatar-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={ {margin : "10px" }}>
                        {errors === [] || submited ?
                        <p className = 'link-btn' onClick = {switchPage}> Successed, log in here</p>
                        :
                        <p className = 'link-btn' onClick = {switchPage}> Have an account? log in</p>}
                    </div>

                </div>
                <div className = "btn-box">
                    <button type = "submit">Sign Up</button>
                </div>
            </form>
            {errors?errors.map(e => <div className = "error-message">{e[0]+': ' + e[1]}</div>) : null}
        </div>
    )
}

export default SignupForm
