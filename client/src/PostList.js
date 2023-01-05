import Post from "./Post"
import PostForm from "./PostForm"
import { useState, useEffect } from "react"

function PostList({postsData, setPostsData, userData}){
    const [loading, setLoading] = useState(true)
    const renderPosts = postsData.map(postObj => {
        return (
                <Post key={postObj.id} postObj={postObj} userData={userData} setPostsData = {setPostsData}/>
        )
    })

    useEffect(() => {
        const loadData = async () => {


          await new Promise((r) => setTimeout(r, 1000));

          setLoading((loading) => !loading);
        };

        loadData();
      }, [])

      if (loading) {
          return <div className = "loading-message">Loading....</div>
      }

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
