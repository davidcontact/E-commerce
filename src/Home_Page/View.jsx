/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./View.css";
import React, { useState } from "react";
import Header from "../component/Header";

function View({
  setCart,
  view,
  setView,
  addView,
  cart,
  setshowCart,
  setwarning,
}) {
  function handleRemove(id) {
    const arr = view.filter((product) => product.id !== id);
    setView(arr);
  }
  return (
    <>
      {view.map((product) => (
        <>
          <div className="view-Box">
            <Header cart={cart} setshowCart={setshowCart} />
            <div className="Back" onClick={() => handleRemove(product.id)}>
              <i className="fa-solid fa-angles-left"></i>
              <h4>Back</h4>
            </div>
            <div className="View-item" key={product.id}>
              <div className="view-img">
                <img src={product.image} alt="" />
              </div>
              <div className="view-detail">
                <div className="category">{product.category}</div>
                <div>
                  <h4>{product.title}</h4>
                </div>
                <div className="detail-price">
                  <p>Price: $ {product.price}</p>
                  <select className="Size-detail" size="1" id="">
                    <option value="Select Size">Select Size</option>
                    <option value="Select Size">Size: M</option>
                    <option value="Select Size">Size: L</option>
                    <option value="Select Size">Size: XL</option>
                  </select>
                  <div className="add-detail">
                    <input type="text" placeholder="1" />
                    <button
                      onClick={() => {
                        addView(product);
                        let isPresent = true;
                        if (isPresent) {
                          setwarning(true);
                          setTimeout(() => {
                            setwarning(false);
                          }, 2000);
                          return;
                        }
                        setCart([...cart, product]);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>

                  <div className="detail-info">
                    <h4>Product Detail</h4>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default View;
