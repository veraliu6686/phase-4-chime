import React from 'react';
import { useState } from 'react'

function PostForm ({postsData, setPostsData}){

    const [showForm, setShowForm] = useState (false)
    // console.log(postsData)
    const [newPostObj, setNewPostObj] = useState (
        {
            description: "",
            image_url: "",
            tag: ""
        }
    )

    function handleSubmit(e){
        e.preventDefault();

        const newPost = {
            description: "",
            image_url: "",
            tag: ""
        }
         fetch('/posts', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( newPost )
        })
        .then(res => res.json())
        .then(newPostData => {
            setPostsData([...postsData, newPostData])
        })

        setNewPostObj({
            description: "",
            image_url: "",
            tag: ""
        })

        setShowForm(!showForm)
    }
    return (
        <div className = "post-form-con">
            <div>
                <h3 onClick = {() => setShowForm(!showForm)}>Click to Create A New Post </h3>
            </div>
            {
                showForm ?
                (<div className = "post-form">
                    <form onSubmit={handleSubmit}>
                        <input className = "post-input" onChange={(e) => setNewPostObj({...newPostObj, description: e.target.value})}
                        name="description" type="text" value= {newPostObj.description} placeholder="Description"/>
                        <input className = "post-input" onChange={(e) => setNewPostObj({...newPostObj, image_url: e.target.value})}
                        name="image_url" type="text" value= {newPostObj.image_url} placeholder="Image Link"/>
                        <input className = "post-input"onChange={(e) => setNewPostObj({...newPostObj, tag: e.target.value})}
                        name="tag" type="text" value= {newPostObj.tag} placeholder="Add a tag"/>
                        <div className="post-form-button">
                            <button className = "lg-btn" type="submit">New Post</button>
                        </div>
                    </form>
                </div>
                ) : <></>
            }
        </div>
    )
}

export default PostForm
