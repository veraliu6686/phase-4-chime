import React from "react";
import { useState, useEffect } from "react"


function Welcome({userData, postsData}){
  const [loading, setLoading] = useState(true)

  // Mapping over Posts data to show each post with sliding css animations
  const posts = postsData.map( post => {
    return (
      <div key={post.id} className="text-line">
        <p> {post.description} </p>
      </div>
    )
  })

  // Same function and state as in the Home component
  useEffect(() => {
    const loadData = async () => {

      // Wait for three second
      await new Promise((r) => setTimeout(r, 3000));

      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  if (loading) {
      return(
		<div className = "text-wrap">
		   <div className="loading-message">Chiming....</div>
		</div>
	  )

		}

  else {
    // Returns welcome message page with user's username, avatar, and custom background
    return (
      <>
      <div id = "welcome-con">
        <h2 className = "welcome-title">Welcome Back to Chime</h2>
        <div  className = "welcome-info">
          <div className = "info-div">
            <div>
              <img  className = "welcome-avatar" src = {userData.avatar} alt = {userData.username}/>
            </div>
            <h3 className = "welcome-user"> {userData.username}</h3>
            <div className= "animated-text">
              {posts}
            </div>
          </div>
        </div>
      </div>

      {/* CSS background animation */}
    <div className="section-center">
		<div className="section-up">
			<div className="sun">
				<span></span>
			</div>
			<div className="cloud-left">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="cloud-middle">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="cloud-right">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="bird-wrapper">
				<div className="left-wing">
					<span></span>
				</div>
				<div className="right-wing">
					<span></span>
				</div>
			</div>
			<div className="bird-wrapper snd">
				<div className="left-wing">
					<span></span>
				</div>
				<div className="right-wing">
					<span></span>
				</div>
			</div>
			<div className="bird-wrapper trd">
				<div className="left-wing">
					<span></span>
				</div>
				<div className="right-wing">
					<span></span>
				</div>
			</div>
			<div className="building-left">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="building-right">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span><span></span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="left-tree">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="right-tree">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="hill">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="hill snd">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="hill trd">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="hill frt">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div className="section-down">
			<div className="ship-wrapper">
				<div className="ship">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="water-big-wrapper">
				<div className="water-big-wrap">
					<div className="water-big">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water-big snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water-big trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className="water-lines-wrapper">
				<div className="water-lines">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="water-lines-wrapper right">
				<div className="water-lines">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="fish-wrapper">
				<div className="fish-wrap">
					<div className="fish">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className="fish-wrapper right">
				<div className="fish-wrap">
					<div className="fish">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className="water-wrapper top">
				<div className="water-wrap">
					<div className="water">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className="water-wrapper">
				<div className="water-wrap">
					<div className="water">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className="water-wrapper top right">
				<div className="water-wrap">
					<div className="water">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div className="water-wrapper right">
				<div className="water-wrap">
					<div className="water">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="water trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
      </>
    )
  }
}

export default Welcome
