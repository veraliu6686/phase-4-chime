import {useState} from "react";
import Comment from "./Comment";

function Post({postObj, userData, setPostsData}){
    // Initializing state variales
    const [showComment, setShowComment] = useState (false) // to store comments in back of card
    const [addLike, setAddLike] = useState (false) // to track like button
    const [addDislike, setDislike] = useState (false) // track dislike button
    const [count, setCount] = useState(postObj.like_btn)

    // Function to toggle showComment state
    const flipPost = () => {
        setShowComment(!showComment)
    }

    // Function to delete post 
    const deletePost = id => {
        setPostsData(currentPost => currentPost.filter( post => post.id !== id ))
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")){
        fetch(`/posts/${postObj.id}`, {
            method: 'DELETE'
        })
        .then( () => { deletePost(postObj.id)} )
        }}

     // Function to handle updating the like count for a post
    const handleLikes = () =>{
            fetch(`/posts/${postObj.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    like_btn: addLike ? --postObj.like_btn : ++postObj.like_btn
                    })
            })
            .then(res => res.json())
            .then(newCount => {
                setCount(newCount.like_btn)
            })
            console.log(count)
        setAddLike(!addLike)
    }
    // function to handle dislike button for a post
    const handleDislike = () =>{
        setDislike(!addDislike)
    }

    return(
    <div>
        <div className ="flip-post-card" >
        { showComment ?
            (<div className="post-container-back">
                {/* Display comments when showComment is true */}
                    <div className="post-comments">
                    <Comment postId ={postObj.id} userData = {userData}/>
                    </div>
                {/* Link to go back to post when showComment is true */}
                    <p className="post-direction" onClick = {flipPost}> ---back to the post---</p>
            </div>)
            :
             // if showComment is false, display the front of the post card
            (<div className="post-container-front" >
                <div className="post-card">
                    <div className="post-header">
                        <img className="post-image" src={postObj.image_url} onClick = {flipPost} alt = {postObj.description}/>
                    </div>
                    <span className="post-tag">{postObj.tag}</span>
                    <div className="post-text">
                        <p className="post-description">{postObj.description}</p>
                        <br></br>        
                    </div>
                    <div className="post-user-info">
                        <img className="user-profile-pic" src={postObj.user_data.avatar} alt="user"/>
                        <p className="post-username">{postObj.user_data.username}</p>
                    </div>
                    <div className = "post-button-div">
                    <div className = "btns">
                            <div onClick = {handleLikes} className = "btn-child">
                                {/* for different like button icon + number increments or decrements when clicked */}
                                {addLike ?
                                <i className="fa-solid fa-heart"></i>
                                :
                                <i className="fa-regular fa-heart"></i>
                                }
                                <p>{postObj.like_btn}</p>
                            </div>
                            <div onClick = {handleDislike} >
                                {/* for different dislike button when clicked */}
                                {addDislike ?
                                <i className ="fa-solid fa-thumbs-down"></i>
                                :
                                <i className="fa-regular fa-thumbs-down"></i>
                                }
                            </div>
                            <i className="fa-solid fa-comment-dots btn-child" onClick = {flipPost}></i>
                            { postObj.user_id === userData.id ? <i class="fa-solid fa-trash-can btn-child" onClick = {handleDelete}></i> : <></>}
                        </div>
                    </div>
                </div>
            </div> )
        }
        </div>
    </div>

    )

}


export default Post
