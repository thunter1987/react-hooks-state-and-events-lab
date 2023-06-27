import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  function onAddToCart() {
    setIsInCart(!isInCart)
  }
  const className = isInCart ? "in-cart" : null
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={onAddToCart}>(isInCart) ? Add to Cart : Remove From Cart</button>
    </li>
  );
}

export default Item;
