import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";


export default function App() {
  return (
   <Router> 
   <div className="app">
     <Switch>
<Route path="/checkout"> 
<h1> check out </h1>
</Route>

<Route path="/login">
 <h1> login page </h1> 
</Route>

<Route path="/"> 
<Header/>
<h1> this is the Home page </h1>
</Route>

     </Switch>
    </div>
    </Router>
  );
}


