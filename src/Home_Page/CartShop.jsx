import React, { useEffect, useState } from "react";

function CartShop({ cart, setCart, setshowCart }) {
  const [price, setprice] = useState(0);

  // Remove Product

  function handleRemove(id) {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
  }

  // Total Price Product

  function totalPrice() {
    let rsl = 0;
    cart.map((product) => (rsl += product.price));
    setprice(rsl);
  }
  useEffect(() => {
    totalPrice();
  });
  function Order() {
    alert("Your Order Complete!👌");

    const arr = cart.filter((product) => product == "");
    setCart(arr);
  }

  return (
    <>
      <div id="Cart" className="Card-product">
        <div className="box-cart">
          <h5
            onClick={() => {
              setshowCart(true);
            }}
          >
            Shopping Cart{" "}
            <p>
              <i
                className="fa-solid fa-delete-left"
                onClick={() => {
                  setshowCart(true);
                }}
              ></i>
            </p>
          </h5>
          {cart.map((product) => (
            <div className="item-card" key={product.id}>
              <img className="cart-img" src={product.image} alt="" />
              <div>
                <h4>{product.title}</h4>
                <p>{product.price} $</p>
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => handleRemove(product.id)}
                ></i>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h4>Total Price of your Cart Order</h4>
            <div>
              <p>{price} $</p>
              <button className="order" onClick={() => Order()}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartShop;
