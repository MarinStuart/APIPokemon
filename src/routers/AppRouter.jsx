import { Navigate, Route, Routes } from "react-router-dom"
import { InfoPokemonPage, PokemonsPage, SearchPokemonPage } from "../pages"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="pokemons" element={ <PokemonsPage/> } />
      <Route path="search-pokemon" element={ <SearchPokemonPage/> } />
      <Route path="pokemon/:id" element={ <InfoPokemonPage/> } />

      <Route path="/" element={ <Navigate to="/pokemons" />} />
    </Routes>
  )
}
