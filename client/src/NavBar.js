import { NavLink } from "react-router-dom"
import{ useNavigate } from "react-router-dom"
import Logo from "./image/chimelogo-ch.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar( {updateUser}){

    let navigate = useNavigate()

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        updateUser(false)
        navigate("/")
      }
    })
  }

    return (
    <div className= "navbar">
        <div className= "navbar-div">
            <div className="logo">
                <img src = {Logo} alt = "logo"/> 
            </div>
           <div className= "navbar-list">
                <NavLink to="/welcome">
                  <button className = "nav-btns">Welcome!</button>
                </NavLink>
                <NavLink to="/profile">
                    <button className="nav-btns">Profile</button>
                </NavLink>
                <NavLink to="/posts">
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                  <button className = "nav-btns">Posts</button>
                </NavLink>
                <i class="fa-solid fa-right-from-bracket" style = {{marginRight : "60px" , padding : "15px", cursor: "pointer"}}  onClick = {handleLogOut}></i>
                {/* <button className = "nav-btns" onClick = {handleLogOut}>Log Out</button> */}
           </div>
        </div>
    </div>
    )

}

export default NavBar
