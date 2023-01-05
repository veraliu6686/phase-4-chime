import SignupForm from "./Signup"
import LoginPage from "./Login"
import { useState, useEffect } from "react"


function Home({updateUser}){

    const [slide, setSlide] = useState (false)
    const [loading, setLoading] = useState(true)

    const switchPage = () => {
        setSlide(!slide)
    }

    useEffect(() => {
        const loadData = async () => {


          await new Promise((r) => setTimeout(r, 2000));

          setLoading((loading) => !loading);
        };

        loadData();
      }, [])

      if (loading) {
          return <div className = "loading-message">Loading....</div>
      }

      else {
          return (
            <div id = "bg-con">
               {/* <h1> HOME </h1> */}
                <div className = "container" >
                <div className = { slide ? "wrapper-slide" : "wrapper" }>
                   {slide ?
                    <h1>Have fun!</h1> : <h1> Hello My Friend!</h1>  }
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
