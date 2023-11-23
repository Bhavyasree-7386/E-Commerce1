import { useState } from "react"
const Contorelledform=()=>{

    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
      const[password,setpassword]=useState("");
    const[error3,seterror3]=useState("");
    const[error1,seterror1]=useState(false);
    const[error2,seterror2]=useState(false);
    const validusername = (data) => {
        const inputValue = data.target.value;
        setusername(inputValue);
        if (inputValue.length > 10) {
          seterror1(true);
        } else {
          seterror1(false);
        }


    }
    const validemail=(data)=>{
        const inputemail=data.target.value;
        let regex=  /^[A-Za-z0-9._%-]+@gmail\.com$/
        setemail(inputemail)
        if(!inputemail.match(regex) ){
            seterror2(true);
        }
        else{
            seterror2(false)
        }
    }
    const validpassword=(data)=>{
          const inputpassword=data.target.value;
          setpassword(inputpassword)
          if(inputpassword.length>10){
            seterror3(true)
          }else{
            seterror3(false)
          }
    }
    const submitt = (e) => {
      e.preventDefault();
  
      if (!error1 && !error2 && !error3) {
          alert("You have successfully submitted!")
      
      } else {
          alert("Please correct the errors in the form.");
      }
  }
  
    return(
        <div>
          <form onSubmit={submitt}>
        username:<input type="text" value={username} onChange={validusername}/>
        {
            error1 &&<p style={{color:"red"}}>user name must less than 10 letters</p>
        }
        <br/>
        email:<input type="text" value={email} onChange={validemail}/>
        {
            error2 &&<p style={{color:"red"}}>email must contain @</p>
        }
        <br/>
        password:<input type="text" value={password} onChange={validpassword}/>
         {
            error3 &&<p style={{color:"red"}}>password must be 
            less then 10</p>
         }
         Submit:<input type="submit"  />
         </form>
        </div>
    )
}
export default Contorelledform;