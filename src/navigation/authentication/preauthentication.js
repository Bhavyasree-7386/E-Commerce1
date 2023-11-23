import { Route, Routes } from "react-router-dom";
import Register from "../authentication1/Register";
import LoginPage from "../Login";

function PreAuthentication(){
    return(
        <>
       <Routes>
        
        <Route path="/" element={<Register/>}/>
        <Route path="/Login"  element={<LoginPage/>}/>
        </Routes>
        </>
    )
}
export default PreAuthentication;