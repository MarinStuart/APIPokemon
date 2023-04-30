import { Navbar } from "../components/Navbar"

export const PokemonLayout = ( { children } ) => {

  return (

        <div className="container-pokemon"> 

        <Navbar/>

          { children }
          
        </div>
  )
}
