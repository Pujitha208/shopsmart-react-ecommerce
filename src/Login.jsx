import { useState } from "react";


function Login({setUser,setShowRegister}){


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [showPassword,setShowPassword]=useState(false);



const login=()=>{


const savedUser=JSON.parse(
localStorage.getItem("user")
);



if(!savedUser){

alert("Please Register First");

return;

}



if(
email===savedUser.email &&
password===savedUser.password

){

setUser(savedUser);


}

else{

alert("Wrong Email or Password");

}


}




return(

<div

style={{

width:"350px",
margin:"50px auto",
padding:"20px",
border:"1px solid gray",
borderRadius:"10px"

}}

>


<h2>Login</h2>



<input

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

style={{

width:"100%",
padding:"10px",
marginBottom:"10px"

}}

/>




<input

type={showPassword?"text":"password"}

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

style={{

width:"100%",
padding:"10px"

}}

/>



<div>

<input

type="checkbox"

onChange={()=>setShowPassword(!showPassword)}

/>

Show Password

</div>





<button

onClick={login}

style={{

marginTop:"20px",
width:"100%",
padding:"10px",
background:"green",
color:"white"

}}

>

Login

</button>





<button

onClick={()=>setShowRegister(true)}

style={{

marginTop:"10px",
width:"100%",
padding:"10px",
background:"blue",
color:"white"

}}

>

New User? Register

</button>



</div>


);


}


export default Login;