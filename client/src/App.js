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
  const [ userData, setUserData ] = useState( [] )

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(postsArray => setPostsData(postsArray))
  },[])

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
        });
      }
    })
    },[userData.id])

    useEffect( () =>{
      fetch ("/users/:id")
      .then ( res => res.json())
      .then (setUserData)
    },[currentUser])

  const updateUser = (user) => setCurrentUser(user)

  return (
    <>
      {currentUser ? <NavBar updateUser = {updateUser}/> : null}
      <Routes>
        <Route path= "/" element= {<Home updateUser = {updateUser} />}> </Route>
        <Route path= "/welcome" element= {<Welcome userData= { userData }/>}> </Route>
        <Route path= "/posts" element= {<PostList setPostsData= {setPostsData} postsData={postsData} userData= { userData } />}> </Route>
        <Route path= "/profile" element = {<Profile userData = {userData} postsData = {postsData} />}></Route>
        {/* <Route path= "/posts" element= {<PostList allUserData = {allUserData} setPostsData= {setPostsData} postsData={postsData} userData= { userData }/>}> </Route> */}
      </Routes>
    </>
  );
}

export default App;
