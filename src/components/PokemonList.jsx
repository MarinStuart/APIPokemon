import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokemonCard } from "./PokemonCard";
import { Row } from "antd";



export const PokemonList = () => {

  const { allPokemons } = useContext( PokemonContext );

  
  return (
       <Row justify="center" gutter={30}>
      {
        allPokemons.map( pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
      }
    </Row>
  )
    
}