import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>sign in</h1>
        <form>
          <h5>E-mail </h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit" className="login__sign-in-button">
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__register-button">
          {" "}
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
