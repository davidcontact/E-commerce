/* eslint-disable no-unused-vars */
import img1 from "../assets/d1.jpg";
import img2 from "../assets/d2.jpg";
import { useState } from "react";
import img3 from "../assets/bgcn.png";
import Product from "./Product";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ViewItem from "./View";
import CartShop from "./CartShop";
function Home() {
  const [view, setView] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(true);
  const [warning, setwarning] = useState(false);

  // add To Cart
  function handleClick(item) {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) isPresent = true;
    });
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  // view product
  function ViewClick(item) {
    console.log(item);
    let isPresent = false;
    view.forEach((product) => {
      if (product.id === item.id) isPresent = true;
    });

    setView([item]);
  }

  // add to cart in view
  function addView(product) {
    console.log(product);

    let Present = false;
    view.forEach((product) => {
      if (product.id === product.id) Present = true;
    });
    setCart([...cart, product]);
    setView([]);
  }
  return (
    <>
      {warning && alert("This Item Already add to cart 👌")}
      <Header
        cart={cart.length}
        setshowCart={setshowCart}
        showCart={showCart}
      />
      {showCart ? (
        " "
      ) : (
        <CartShop cart={cart} setCart={setCart} setshowCart={setshowCart} />
      )}

      <div className="head1">
        <div className="usd">
          <select className="cty" size="1">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">JPY</option>
            <option value="">KH</option>
            <option value="">AED</option>
            <option value="">CAD</option>
          </select>
          <div>
            <h4>Country:</h4>
            <select className="cty1" size="1">
              <option value="">English</option>
              <option value="">Japanese</option>
              <option value="">Cambodia</option>
              <option value="">Chinese</option>
              <option value="">Korea</option>
            </select>
          </div>
        </div>
      </div>
      <div className="space2">
        <div className="NameShop">
          <div className="intro">
            <h4>Good product from world wide</h4>
            <h2>Chinese New Year 🎉</h2>
            <p>Discount all product in this website %</p>
            <a href="#product">Shop Now</a>
          </div>
        </div>
        <div className="item">
          <img src={img1} className="img1" />
          <img src={img2} className="img1" />
          <img src={img3} className="img1" />
        </div>
      </div>
      <ViewItem
        setCart={setCart}
        setwarning={setwarning}
        view={view}
        setView={setView}
        addView={addView}
        cart={cart.length}
        setshowCart={setshowCart}
      />

      <Product handleClick={handleClick} ViewClick={ViewClick} />
      <Footer />
    </>
  );
}

export default Home;
