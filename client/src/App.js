import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import PostList from "./PostList"
import Profile from "./Profile";


function App() {
  const [ postsData, setPostsData ] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [ userData, setUserData ] = useState( [] )
  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          fetchPost()
        });
      }
    })
  },[userData.id])

  const fetchPost =() =>{
    fetch("/posts")
    .then(res => {
      if(res.ok){
        res.json().then(setPostsData)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }


  useEffect( () =>{
    fetch ("/users/:id")
    .then ( res => res.json())
    .then (setUserData)
  },[currentUser])

  if(errors) return <h1>{errors}</h1>

  return (
    <>
      {userData.id ? <NavBar updateUser = {updateUser}/> : null}
      <Routes>
        <Route path= "/" element= {<Home updateUser = {updateUser} />}> </Route>
        <Route path= "/welcome" element= {<Welcome userData= {userData} postsData={postsData}/>}> </Route>
        <Route path= "/posts" element= {<PostList setPostsData= {setPostsData} postsData={postsData} userData= {userData} />}> </Route>
        <Route path= "/profile" element = {<Profile userData = {userData} postsData = {postsData} />}></Route>
        {/* <Route path= "/posts" element= {<PostList allUserData = {allUserData} setPostsData= {setPostsData} postsData={postsData} userData= { userData }/>}> </Route> */}
      </Routes>
    </>
  );
}

export default App;
