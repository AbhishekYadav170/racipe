import React from 'react'
import { useState, createContext } from 'react';

export const recipeContext = createContext(null);


export const RacipeContext = (props) => {

  const [data, setData] = useState([]);
  console.log(data);
  
  return (
    <recipeContext.Provider value={{data, setData}}>
        {props.children}
    </recipeContext.Provider>

  );
};

export default RacipeContext
