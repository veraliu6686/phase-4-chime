import React from "react";
import { useState, useEffect } from "react"
// import ReactLoading from "react-loading";

function Welcome({userData}){

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  if (loading) {
      return <div>Loading....</div>
  }

  else {
    return (
      <div id = "welcome-con">
          <h2 className = "welcome-title">Welcome Back to Chime</h2>
        <div  className = "welcome-info">
          <div>
            <div>
              <img  className = "welcome-avatar" src = {userData.avatar} alt = {userData.username}/>
          </div>
            </div>
          <h3 className = "welcome-user"> {userData.username}</h3>
        </div>
      </div>
    )
  }
    // return(
    //     <div id = "welcome-con">
    //   <h2 className = "welcome-title">Welcome Back to Chime</h2>

    // <div  className = "welcome-info">
    // <div>
    //     <div>
    //       <img  className = "welcome-avatar" src = {userData.avatar} alt = {userData.username}/>
    //     </div>
    //   </div>
    //   <h3 className = "welcome-user"> {userData.username}</h3>
    // </div>
    // </div>
    // )
}

export default Welcome
