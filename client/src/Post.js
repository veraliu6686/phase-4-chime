import {useState, useEffect} from "react";
import Comment from "./Comment";

function Post({postObj, userData, setPostsData}){

    const [showComment, setShowComment] = useState (false)
    const [addLike, setAddLike] = useState (false)
    const [count, setCount] = useState(postObj.like_btn)

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

    const handleLikes = () =>{
            fetch(`/posts/${postObj.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( {like_btn: count +1 })
            })
            .then(res => res.json())
            .then(newCount => {
                setCount(newCount.like_btn)
            })
            console.log(count)
        setAddLike(!addLike)

    }


    return(
    <div>
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
                        <br></br>
                        <div onClick = {handleLikes} id = "like-btn">
                            {addLike ?
                            <i class="fa-solid fa-heart"></i>
                            :
                            <i class="fa-regular fa-heart"></i>
                            }
                       <p>{postObj.like_btn}</p>
                       </div>
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
    </div>

    )

}


export default Post
