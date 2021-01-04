//set data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER, to wrap the entire app inside and give it access to the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a component
//and then we need useStateValue on Header.js
export const useStateValue = () => useContext(StateContext);
