import { useMemo } from "react";
import { useState } from "react"




const Childmemo=({text})=>{
const[count,setcount]=useState(0)





const increment=()=>{

setcount(count+1);
}



const arr=useMemo(()=>{
    console.log(text)
    return text.toUpperCase();
},[])



return(
    <>
    <h1>{arr}</h1>
    <h1>{count}</h1>
     <button onClick={increment}>increment</button>
    
   </>
)
}
export  default Childmemo