import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

export default function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=" "
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>

      {/*links*/}
      <div className="header__nav">
        {/*1st link*/}

        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option-line-one">
              Hello, {user?.email}{" "}
            </span>
            <span className="header__option-line-two">
              {" "}
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/*2nd link*/}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option-line-one">Returns</span>
            <span className="header__option-line-two">& Orders</span>
          </div>
        </Link>

        {/*3rd link*/}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option-line-one">Your </span>
            <span className="header__option-line-two">Prime </span>
          </div>
        </Link>

        {/*4rd link*/}

        <Link to="/checkout" className="header__link">
          <div className="header__option-basket">
            <ShoppingBasketIcon />
            <span className="header__option-line-two header__basket-count">
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
