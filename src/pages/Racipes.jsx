import React from 'react'
import { useContext } from 'react'
import  {recipeContext} from '../context/RacipeContext'
const Racipes = () => {

  const {data} = useContext(recipeContext);

  const renderRacipes = data.map((racipe) => (
    <div key={racipe.id}>
      <h3>{racipe.name}</h3>
      <p>{racipe.description}</p>
    </div>
  ));

  return <div>{renderRacipes}</div>
};

export default Racipes
