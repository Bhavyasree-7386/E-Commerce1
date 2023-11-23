import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../bootstrap/Bootstrap";
const HomeScreen = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(response.data);
        console.log(response.data);
      });
  }, []);

  const handleIncrement = (productId) => {
    setState((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, rating: { ...product.rating, count: (product.rating?.count || 0) + 1 } }
          : product
      )
    );
  };
  
  const handleDecrement = (productId) => {
    setState((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, rating: { ...product.rating, count: (product.rating?.count || 0) - 1 } }
          : product
      )
    );
  };
  

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Header />
      {state.map((data) => (
        <div key={data.id} style={{ width: 330, height: 420, display: "inline-block", padding: 10, margin: 12 }}>
          <center>
            <p style={{color:"blue"}}>{data.id}</p>
            <p style={{color:"orange"}}>{data.title}</p>
            <p><img src={data.image}  width={200} height={200} /></p>
            <p style={{color:"green"}}>{data.price}</p>
            <button onClick={() => handleClick(data.id)}>View More</button>
            <p>{data.rating.count}</p>
            <button onClick={() => handleIncrement(data.id)} >Add to card</button>
            
            <button onClick={() => handleDecrement(data.id)}>Remove from card</button>
          </center>
        </div>
      ))}
    </>
  );
};

export default HomeScreen;