import { useState } from "react";


function Register({setShowRegister}){


const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [showPassword,setShowPassword]=useState(false);





const register=()=>{


if(!name || !email || !password){

alert("Please fill all details");

return;

}




const user={

name:name,

email:email,

password:password

};




// SAVE USER

localStorage.setItem(

"user",

JSON.stringify(user)

);



alert("Registration Successful. Please Login");



setShowRegister(false);



};








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



<h2>

Register

</h2>




<input

placeholder="Name"

value={name}

onChange={(e)=>setName(e.target.value)}

style={{

width:"100%",

padding:"10px",

marginBottom:"10px"

}}

/>





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

onClick={register}

style={{

marginTop:"20px",

width:"100%",

padding:"10px",

background:"green",

color:"white"

}}

>

Create Account

</button>







<button

onClick={()=>setShowRegister(false)}

style={{

marginTop:"10px",

width:"100%",

padding:"10px",

background:"blue",

color:"white"

}}

>

Back To Login

</button>




</div>


);


}



export default Register;