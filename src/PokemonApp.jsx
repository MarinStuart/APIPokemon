import { PokemonProvider } from "./context/PokemonProvider"
import { AppRouter } from "./routers/AppRouter"

export const PokemonApp = () => {
  return (
    <PokemonProvider>
        <AppRouter/>
    </PokemonProvider>
  )
}
