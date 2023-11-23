import { useState } from "react"
import Childmemo from "./memo"




const Parentmemo=()=>{


const[greeting]=useState("Goodmorning")



    return(
        <>
        
        <Childmemo text={greeting}/>
        </>
    )
}
export default Parentmemo