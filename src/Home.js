import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_2x._CB412256578_.jpg"
        alt=""
      />

      <Product
        id="1137953"
        title="RUNMUS Gaming Headset"
        price={25.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SX679_.jpg"
      />
    </div>
  );
}
