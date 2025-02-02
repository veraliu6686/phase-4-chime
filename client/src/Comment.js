 import { React, useState, useEffect} from "react"
 import CommentItem from "./CommentItem"

function Comment ({postId, userData}){
    const [ commentsAry, setComments ] = useState ( [] )
    const [ input, setInput ] = useState ( "" )
    // render comment based on the post user clicked on
    useEffect( () =>{
    fetch (`/postcomments/${postId}`)
    .then ( r => r.json() )
    .then ( setComments )
    },[postId])

    // add comment to the selected post 
    const handleSubmit = e => {
        e.preventDefault();
        const newComment = {
            content: input,
            user_id: userData.id,
            post_id: postId
        }
        fetch('/comments',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( newComment )
        })
        .then(res => res.json())
        .then( newComment => setComments([...commentsAry, newComment]))

        setInput("")
    }
    // render the comments related to the post from the database
    const renderComments = commentsAry.map( comment => {
        return <CommentItem key = {comment.id} comment = {comment} setComments= {setComments} setInput = {setInput} userData = {userData}/>
    })

    // returns comments
    return(
        <div id= "comment-con">
           <h3> Comments:</h3>
           {renderComments}
           <form id = "comment-form" onSubmit={ handleSubmit }>
                <input type ='text' placeholder = "add your comment" value = {input} onChange={ e => setInput(e.target.value)}/>
                <button className = "lg-btn"type="submit"> + </button>
           </form>
        </div>
    )
}

export default Comment
