import Post from "./Post"
import PostForm from "./PostForm"
import { useState, useEffect } from "react"

function PostList({postsData, setPostsData, userData}){
    const [loading, setLoading] = useState(true)
    // Map for rendering the posts + sending props to Post component
    const renderPosts = postsData.map(postObj => {
        return (
                <Post key={postObj.id} postObj={postObj} userData={userData} setPostsData = {setPostsData}/>
        )
    })

    // Same function as the Home component 
    useEffect(() => {
        const loadData = async () => {


          await new Promise((r) => setTimeout(r, 1000));

          setLoading((loading) => !loading);
        };

        loadData();
      }, [])

      if (loading) {
        return (
            <div >
                <div className = "text-wrap">Chiming....</div>
            </div>
      )
      }

      // Returning the post list and sending props to post form
    return(
        <div>
            <PostForm setPostsData={setPostsData} postsData={postsData} userData= { userData }/>
            <div className= "post-list">
               {renderPosts}
            </div>
        </div>
        )
}

export default PostList
