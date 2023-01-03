import React from "react";
// import ReactLoading from "react-loading";

function Welcome({userData}){
    return(
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


      {/* <img src =  */}
      {/* <ReactLoading type="balls" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="bars" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="bubbles" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="cubes" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="cylon" color="#0000FF"
        height={100} width={50} /> */}
      {/* <ReactLoading type="spin" color="#0000FF"
        height={100} width={50} /> */}
      {/* <ReactLoading type="spokes" color="#000"
        height={100} width={50}/> */}
      {/* <ReactLoading
        type="spinningBubbles"
        color="#0000FF"
        height={100}
        width={50}
      /> */}
    </div>
    )
}

export default Welcome
