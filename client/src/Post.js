import {useState} from "react";
import Comment from "./Comment";

function Post({postObj, userData, setPostsData}){

    const [showComment, setShowComment] = useState (false)
    const [addLike, setAddLike] = useState (false)
    const [addDislike, setDislike] = useState (false)
    const [count, setCount] = useState(postObj.like_btn)

    const flipPost = () => {
        setShowComment(!showComment)
    }

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

    const handleDislike = () =>{
        setDislike(!addDislike)
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
                    </div>
                    <div className="post-user-info">
                        <img className="user-profile-pic" src={postObj.user_data.avatar} alt="user"/>
                        <p className="post-username">{postObj.user_data.username}</p>
                    </div>
                    <div className = "post-button-div">
                    <div className = "btns">
                            <div onClick = {handleLikes} className = "btn-child">
                                {addLike ?
                                <i className="fa-solid fa-heart"></i>
                                :
                                <i className="fa-regular fa-heart"></i>
                                }
                                <p>{postObj.like_btn}</p>
                            </div>
                            <div onClick = {handleDislike} >
                                {addDislike ?
                                // <i class="fa-solid fa-heart-crack"></i>
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
