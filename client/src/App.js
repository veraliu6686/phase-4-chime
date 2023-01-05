import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import PostList from "./PostList"
import Profile from "./Profile";


function App() {
   // Initializing state variables
  const [ postsData, setPostsData ] = useState([]) // for storing posts data
  const [currentUser, setCurrentUser] = useState(false) // for storing current user data
  const [errors, setErrors] = useState(false) // for storing errors
  const [ userData, setUserData ] = useState( [] )// for storing all users data

  // Function for updating current user
  const updateUser = (user) => setCurrentUser(user)

  // Fetching authorized user data
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

  // Fetching posts data
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

  // Rendering errors if they are present
  if(errors) return <h1>{errors}</h1>

  return (
    <>
      {userData.id ? <NavBar updateUser = {updateUser}/> : null}
      {/* http paths */}
      <Routes>
        <Route exact path= "/" element= {<Home updateUser = {updateUser} />}> </Route>
        <Route path= "/welcome" element= {<Welcome userData= {userData} postsData={postsData}/>}> </Route>
        <Route path= "/posts" element= {<PostList setPostsData= {setPostsData} postsData={postsData} userData= {userData} />}> </Route>
        <Route path= "/profile" element = {<Profile userData = {userData} postsData = {postsData} />}></Route>
      </Routes>
    </>
  );
}

export default App;
