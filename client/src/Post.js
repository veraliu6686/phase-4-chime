import Comment from "./Comment";
import {useState} from "react";

function Post({postObj, userData, setPostsData}){

    const [showComment, setShowComment] = useState (false)

    const flipPost = () => {
        setShowComment(!showComment)
    }

    const deletePost = id => {

        setPostsData(currentPost => currentPost.filter( post => post.id !== id ))
        
    }


    const handleDelete = () => {
        fetch(`/posts/${postObj.id}`, {
            method: 'DELETE'
        })
        .then( () => { deletePost(postObj.id)} )
    }
    return(
    <div className ="flip-post-card" >
        { showComment ?
            (<div className="post-container-back">

                    <div className="post-comments">
                    <Comment postId ={postObj.id} userData = {userData}/>
                    </div>
                    <p className="post-direction" onClick = {flipPost}> ---back to the post---</p>
            </div>)
            :
            (<div className="post-container-front" >
                <div className="post-card">
                    <div className="post-header">
                        <img className="post-image" src={postObj.image_url} onClick = {flipPost} alt = {postObj.description}/>
                    </div>
                    <span className="post-tag">{postObj.tag}</span>
                    <div className="post-text">
                        <p className="post-description">{postObj.description}</p>
                    </div>
                    <div className="post-user-info">
                        <img className="user-profile-pic" src={postObj.user_data.avatar} alt="user"/>
                        <p className="post-username">{postObj.user_data.username}</p>
                    </div>
                    <div className = "post-delete-button-div">
                        { postObj.user_id === userData.id ? (
                        <button onClick = {handleDelete} className = "post-delete-button">Delete</button>)
                        : <></>}
                    </div>
                </div>
            </div> )
        }
    </div>
    )

}


export default Post
