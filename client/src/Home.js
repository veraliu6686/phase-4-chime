import SignupForm from "./Signup"
import LoginPage from "./Login"
import { useState, useEffect } from "react"


function Home({updateUser}){
    // Initializing state variables
    const [slide, setSlide] = useState (false) // for switching between login and signup forms
    const [loading, setLoading] = useState(true)  // for loading animation

    // Function for switching between login and signup forms
    const switchPage = () => {
        setSlide(!slide)
    }

    // Loading data asynchronously and setting loading state to false
    useEffect(() => {
        const loadData = async () => {


          await new Promise((r) => setTimeout(r, 2000));  // adding a delay for loading animation

          setLoading((loading) => !loading);
        };

        loadData();
      }, [])

      // Rendering loading message if data is being fetched
      if (loading) {
          return (
                <div>
                    <div className = "text-wrap">Chiming....</div>
                </div>
          )
      }

      // Rendering homepage if data is finished loading
      else {
          return (
            <div id = "bg-con">
                <div className = "container" >
                <div className = { slide ? "wrapper-slide" : "wrapper" }>
                    {/* sliding between login and signup forms */}
                   {slide ?
                    <h1>Have fun!</h1> : <h1> Welcome to Chime!</h1>  }
                    <div className = "login-img">
                        <img src= "https://media2.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif?cid=ecf05e47lc9vpaf4dss497mwytvz7vta0rhc9y8rj5mkdwnh&rid=giphy.gif&ct=g" alt = "login"/>
                    </div>
                </div>
                    <SignupForm switchPage={switchPage} updateUser = {updateUser}/>
                    <LoginPage  switchPage={switchPage} updateUser = {updateUser}/>
                </div>
            </div>
        )
      }

}

export default Home
