import { Button, Card } from "antd";
import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { InfoCardPokemon } from "../components/InfoCardPokemon";


export const InfoPokemonView = () => {

     const { allPokemons } = useContext( PokemonContext );


     const {id} = useParams();


  return (

    <div className="container-infoView">
        {
            allPokemons.map(pokemon =>{
                if( parseInt(id) === parseInt(pokemon.id )){
                    return <InfoCardPokemon pokemon={pokemon} key={pokemon.id}/>
                }else{
                    return
                }
            })
        }
    </div>
  )
}
