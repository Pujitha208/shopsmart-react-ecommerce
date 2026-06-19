import { useState } from "react";


function Payment({amount, placeOrder}){


const [method,setMethod]=useState("");


const payNow=()=>{


if(method===""){

alert("Please select payment method");

return;

}


alert("Payment Successful");


placeOrder();


};




return(


<div

style={{

padding:"30px",

border:"2px solid gray",

borderRadius:"15px",

width:"400px",

margin:"30px auto"

}}

>


<h1>

💳 Payment

</h1>



<h2>

Amount : ₹{amount}

</h2>




<h3>

Select Payment Method

</h3>



<div>


<input

type="radio"

name="payment"

onChange={()=>setMethod("UPI")}

/>

UPI



</div>




<div>


<input

type="radio"

name="payment"

onChange={()=>setMethod("Card")}

/>

Debit / Credit Card



</div>





<div>


<input

type="radio"

name="payment"

onChange={()=>setMethod("COD")}

/>

Cash On Delivery



</div>







<button

onClick={payNow}

style={{

marginTop:"20px",

padding:"12px",

background:"green",

color:"white"

}}

>

Pay Now

</button>





</div>


);


}



export default Payment;