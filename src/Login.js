import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  //this will be the hook to redirect to the homepage
  const history = useHistory();
  //see React docs on useState hook
  //with this we can go to input and use the values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    //login logic here
    //this function is buind into firebase

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to home page.
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  const register = (event) => {
    event.preventDefault();
    //register logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in
      })
      .catch((event) => alert(event.message));
  };

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
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            onClick={login}
            type="submit"
            className="login__sign-in-button"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__register-button">
          {" "}
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
