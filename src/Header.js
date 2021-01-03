import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <nav className="header">
          <Link to="/">
           <img className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
            alt=" " />
       
          </Link>  

       <input type="text" className="search__input"/>
       
       

        

        </nav>
    )
}



