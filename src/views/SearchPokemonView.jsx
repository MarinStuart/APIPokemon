import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useLocation } from "react-router-dom";
import { Row } from "antd";
import { PokemonCard } from "../components";


export const SearchPokemonView = () => {

    const location = useLocation();

    const { allPokemons } = useContext(PokemonContext);

    const filerPokemon = allPokemons.filter( pokemon => pokemon.name.includes(location.state) );

    console.log(allPokemons);
    console.log(location)
  return (
    <div className="containerView">
       <Row justify="space-between" gutter={30}>
      {
        filerPokemon.map( pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
      }
    </Row>
    </div>
  )
}
