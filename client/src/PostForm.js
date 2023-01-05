import React from 'react';
import { useState } from 'react'

function PostForm ({postsData, setPostsData, userData}){

    const [showForm, setShowForm] = useState (false) // track toggle to hide form
    const [newPostObj, setNewPostObj] = useState ( // stores post obj for form
        {
            description: "",
            image_url: "",
            tag: ""
        }
    )
    // function that sends a POST request to the server when form is submitted
    function handleSubmit(e){
        e.preventDefault();

        const newPost = {
            description: newPostObj.description,
            image_url: newPostObj.image_url,
            tag: newPostObj.tag,
            user_id: userData.id
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

    //  allow user to add a post to the page w/ a select tag
    return (
        <div className = "post-form-con">
            <div>
                <h3 onClick = {() => setShowForm(!showForm)}>Click to Create A New Post </h3> {/*If clicked show form*/}
            </div>
            {
                showForm ?
                {/*If form appears, show everything the form has*/}
                (<div className = "post-form">
                    <form onSubmit={handleSubmit}>
                        <input className = "post-input" onChange={(e) => setNewPostObj({...newPostObj, description: e.target.value})}
                        name="description" type="text" value= {newPostObj.description} placeholder="Description"/>
                        <input className = "post-input" onChange={(e) => setNewPostObj({...newPostObj, image_url: e.target.value})}
                        name="image_url" type="text" value= {newPostObj.image_url} placeholder="Image Link"/>
                        <select className = "post-form-tags" onChange={(e) => setNewPostObj({...newPostObj, tag: e.target.value})}
                        name="tag" type="text" value= {newPostObj.tag} placeholder="Add a tag">
                            <option value=""> Choose your tag </option>
                            <option value="Adventure">Adventure</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Cinema">Cinema</option>
                            <option value="Fall">Fall</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food">Food</option>
                            <option value="Friendship">Friendship</option>
                            <option value="Funny">Funny</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Geography">Geography</option>
                            <option value="Hardship">Hardship</option>
                            <option value="History">History</option>
                            <option value="Inspirational">Inspirational</option>
                            <option value="Literature">Literature</option>
                            <option value="Music">Music</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Pet">Pet</option>
                            <option value="Deep">Philosophy</option>
                            <option value="Photography">Photography</option>
                            <option value="Politics">Politics</option>
                            <option value="Relationship">Relationship</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Science">Science</option>
                            <option value="Sport">Sport</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                            <option value="Winter">Winter</option>
                            <option value="Work">Work</option>
                        </select>
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
