import { BrowserRouter } from "react-router-dom"
import { PostAuthentication } from "./authentication1/postauthentication"
import PreAuthentication from "./authentication/preauthentication"
import { createContext,  useState } from "react"



export const Login = createContext()


const NavigationComponent=()=>{

const [login,setlogin]=useState(false)

const handlelogin=()=>{
    

    setlogin(true)
}


    return(
        <>
                <Login.Provider value={{login,handlelogin}}>

        <BrowserRouter>
        
            {

              login ? <PostAuthentication/> :<PreAuthentication/>


            }

          
        </BrowserRouter>
              </Login.Provider>

        </>
    )
}
export default NavigationComponent