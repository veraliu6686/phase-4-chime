import React from "react"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

function Profile({userData, postsData}){
    const [loading, setLoading] = useState(true)
    
    // render posts that belongs to the logged in user only
    const userPost = postsData.map((post) => {
        if (post.user_id === userData.id){
            return (
                <div className="post-container-front" >
                    <div className="post-card">
                        <div className="post-header">
                            <img className="post-image" src={post.image_url} alt = {post.description}/>
                        </div>
                        <span className="post-tag">{post.tag}</span>
                        <div className="post-text">
                            <p className="post-description">{post.description}</p>
                            <br></br>
                            <div id = "like-btn">
                            <i className="fa-regular fa-heart"></i>
                                <p>{post.like_btn}</p>
                            </div>
                        </div>

                        <div className="post-user-info">
                            <img className="user-profile-pic" src={post.user_data.avatar} alt="user"/>
                            <p className="post-username">{post.user_data.username}</p>
                        </div>
                    </div>
                </div>
            )
        }
    })

    useEffect(() => {
        const loadData = async () => {
    
          // Wait for one second
          await new Promise((r) => setTimeout(r, 1000));
    
          setLoading((loading) => !loading);
        };
    
        loadData();
      }, [])
    
      if (loading) {
        return (
            <div  >
                <div className = "text-wrap">Chiming....</div>
            </div>
      )
      }

    return(
        <div className = "profile-con">
            {/* redirect to the post page */}
            <NavLink to="/posts">
                <p id = "post-link">go checkout more posts</p>
            </NavLink>
            <div className = "post-list">
            {/* render posts */}
            {userPost}
            </div>
        </div>
    )

}

export default Profile;
