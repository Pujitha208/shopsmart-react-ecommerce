import { useState } from "react";
import products from "./products";
import Login from "./Login";
import Register from "./Register";
import Payment from "./Payment";
import Orders from "./Orders";

function App() {
  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [showPayment, setShowPayment] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(null);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [showRegister, setShowRegister] = useState(false);

  if (!user) {
    if (showRegister) {
      return <Register setShowRegister={setShowRegister} />;
    }

    return (
      <Login
        setUser={setUser}
        setShowRegister={setShowRegister}
      />
    );
  }

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === "All" ||
        product.category === category)
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    const now = new Date();

    const newOrder = {
      id: Math.floor(Math.random() * 100000),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      total: totalPrice,
      items: [...cart],
    };

    const updatedOrders = [...orders, newOrder];

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrderPlaced(newOrder);

    setCart([]);
  };

  return (
    <div
      style={{
        padding: "25px",
        background: "#eef2ff",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background: "#1f2937",
          color: "white",
          padding: "20px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "38px",
            }}
          >
            🛒 ShopSmart
          </h1>

          <p
            style={{
              color: "#d1d5db",
            }}
          >
            Your Smart Shopping Destination
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "white",
              color: "black",
              padding: "12px",
              borderRadius: "12px",
              minWidth: "140px",
            }}
          >
           <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <div
    style={{
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "#2563eb",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "18px",
    }}
  >
    {user.name.charAt(0).toUpperCase()}
  </div>

  <div>
    <strong>{user.name}</strong>
    <br />
    Customer
  </div>
</div> 
          </div>

          <div
            style={{
              background: "#dbeafe",
              color: "black",
              padding: "12px",
              borderRadius: "12px",
              minWidth: "120px",
            }}
          >
           <strong>🛒 Cart Items</strong>
<br />
{
  cart.reduce(
    (total, item) => total + item.quantity,
    0
  )
} 
          </div>

          <div
            style={{
              background: "#dcfce7",
              color: "black",
              padding: "12px",
              borderRadius: "12px",
              minWidth: "120px",
            }}
          >
            <strong>📦 Orders</strong>
            <br />
            {orders.length}
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* PRODUCTS */}

      <h2>Products</h2>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "8px",
        }}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Accessories</option>
        <option>Mens Fashion</option>
        <option>Womens Fashion</option>
        <option>Footwear</option>
        <option>Groceries</option>
        <option>Books</option>
        <option>Home Appliances</option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((product) => (
         <div
  key={product.id}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.03)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    width: "260px",
    background: "white",
    borderRadius: "15px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer",
  }}
> 
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
<h3>{product.name}</h3>

<div
  style={{
    color: "#f59e0b",
    fontSize: "18px"
  }}
>
  ⭐⭐⭐⭐⭐
</div>

<p>{product.category}</p>

<h3>₹{product.price}</h3>
            
            
            

            <button
              onClick={() =>
                addToCart(product)
              }
              style={{
                width: "100%",
                padding: "10px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}

      <h2
        style={{
          background: "#2563eb",
          color: "white",
          padding: "12px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        🛒 Your Cart ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <div
  style={{
    textAlign: "center",
    padding: "30px",
  }}
>
  <h1>🛒</h1>

  <h3>Your Cart Is Empty</h3>

  <p>Add products to continue shopping</p>
</div>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              background: "white",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "15px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div>
              <h3>{item.name}</h3>

              <p>Price: ₹{item.price}</p>

              <button
                onClick={() =>
                  decrease(item.id)
                }
              >
                -
              </button>

              <span
                style={{
                  margin: "0 10px",
                }}
              >
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  increase(item.id)
                }
              >
                +
              </button>

              <br />

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                style={{
                  background: "red",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  <h2>Cart Summary</h2>

  <p>
    Total Products:
    {" "}
    {
      cart.reduce(
        (total, item) => total + item.quantity,
        0
      )
    }
  </p>

  <h2 style={{ color: "green" }}>
    Total Amount: ₹{totalPrice}
  </h2>
</div>
      

      {cart.length > 0 && (
        <>
          <button
            onClick={() => {
              if (
              window.confirm(
  "⚠️ Are you sure?\n\nAll cart items will be removed."
)
                )
               {
                setCart([]);
              }
            }}
            style={{
              background: "red",
              color: "white",
              padding: "10px",
              marginRight: "10px",
            }}
          >
            Clear Cart
          </button>

          <button
            onClick={() =>
              setShowPayment(true)
            }
            style={{
              background: "green",
              color: "white",
              padding: "12px",
            }}
          >
            Proceed To Checkout
          </button>
        </>
      )}

      {showPayment && (
        <Payment
          amount={totalPrice}
          placeOrder={() => {
            setShowPayment(false);
            placeOrder();
          }}
        />
      )}

      {orderPlaced && (
        <div
          style={{
            marginTop: "25px",
            background: "#111827",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h1>✅ ORDER CONFIRMED</h1>

          <h3>
            Order ID: {orderPlaced.id}
          </h3>

          <h3>
            Date: {orderPlaced.date}
          </h3>

          <h3>
            Time: {orderPlaced.time}
          </h3>
       <h2>Ordered Items</h2>

{orderPlaced.items.map((item) => (
  <div
    key={item.id}
    style={{
      background: "white",
      color: "black",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
    }}
  >
    <h3>{item.name}</h3>

    <p>Quantity: {item.quantity}</p>

    <p>Price: ₹{item.price}</p>
  </div>
))}   
<h2>
  Total Paid: ₹
  {orderPlaced.total}
</h2>
<div
  style={{
    marginTop: "20px",
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px"
  }}
>
  <h3>Order Status</h3>

  <p>✅ Ordered</p>

  <p>🚚 Shipped</p>

  <p>📦 Out For Delivery</p>

  <p>🏠 Delivered</p>
</div>
          
        </div>
      )}

      <>
  <Orders orders={orders} />

  <hr
    style={{
      marginTop: "30px"
    }}
  />

  <div
    style={{
      textAlign: "center",
      padding: "20px",
      color: "gray"
    }}
  >
    ShopSmart © 2026
    <br />
    Developed by Pujitha Naidu
  </div>
</>

{/* Scroll To Top Button */}

<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  }}
>
  ↑
</button>

</div>
);
}
export default App;