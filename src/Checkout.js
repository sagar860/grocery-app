import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://st4.depositphotos.com/5515738/19927/v/950/depositphotos_199270982-stock-illustration-cute-mix-fruits-vegetables-seamless.jpg"
          alt=""
        />

        <div>
          <h3 className="checkout__title1"> <span style={{ fontSize: "18px" }}> Hello,  </span> {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>


          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
      <div className="checkout__right">
      
        <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;
