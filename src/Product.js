import React from "react";
import "./Product.css";

//with new JavaScript standard Es6
// instead of props, we are going to destructor and splitt apart the object
export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>

        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>{" "}
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button> Add to basket </button>
    </div>
  );
}
