function Orders({ orders }) {

  return (
    <div>

      <h2>My Orders</h2>

      {
        orders.length === 0 ? (
          <h3>No orders placed yet</h3>
        ) : (

          orders.map((order,index)=>(

            <div 
            key={index}
            style={{
              background:"#fff",
              padding:"15px",
              margin:"15px",
              borderRadius:"10px",
              boxShadow:"0 0 10px gray"
            }}
            >

              <h3>Order ID: #{1000+index}</h3>

              <h4>Ordered Items:</h4>

              {
                order.items.map((item)=>(

                  <p key={item.id}>
                    {item.name} - ₹{item.price}
                  </p>

                ))
              }


              <h3>
                Total Amount: ₹{order.total}
              </h3>


              <p>
                Date: {order.date}
              </p>


              <p>
                Time: {order.time}
              </p>


              <h3 style={{color:"green"}}>
                Status: Order Confirmed ✅
              </h3>


            </div>

          ))

        )
      }


    </div>
  )
}


export default Orders;