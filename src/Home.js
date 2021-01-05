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
      <div className="home__row">
        <Product
          id="1137953"
          title="RUNMUS Gaming Headset"
          price={25.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SX679_.jpg"
        />

        <Product
          id="728499372"
          title="KORJO Dream Color LED Strip Lights, 32.8ft/10M Bluetooth LED"
          price={42.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81Mdg-l2KwL._AC_SX569_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="113837453"
          title="Amazon Basics amazonbaiscs Humidifier, 4 L, Black"
          price={39.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71n3DlokliL._AC_SL1500_.jpg"
        />

        <Product
          id="114576953"
          title="MorePro Fitness Tracker Waterproof Activity Tracker with Heart Rate Blood"
          price={25.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51d4DQXKufL._AC_SL1000_.jpg"
        />

        <Product
          id="2348848953"
          title="100PCS 3 ply black disposable face shield filter protection"
          price={14.95}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/617D0j72B1L._SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1933953"
          title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide"
          price={549.995}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81x55WcoReL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}
