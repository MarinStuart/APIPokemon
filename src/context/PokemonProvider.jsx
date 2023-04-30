import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { getAllPokemons } from "../helpers";
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ( { children } ) => {

  //estados para manejo de filtrado y cargando
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(false);
  //estados que manejan el llamado a la API
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch:"",
  });

  
  useEffect(() => {
    getAllPokemons( 
      {
       offset,
       setAllPokemons,
       setIsLoading,
       allPokemons,
      });
  }, []);

  
    
  return (
    <PokemonContext.Provider value={{
      allPokemons,
      valueSearch,
      onInputChange,
      onResetForm,
    }}>
        { children }
    </PokemonContext.Provider>
  )
}
