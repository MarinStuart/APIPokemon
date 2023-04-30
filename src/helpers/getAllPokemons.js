const baseUrl = 'https://pokeapi.co/api/v2/';

export const getAllPokemons = async(  {limite = 100, offset, setAllPokemons, setIsLoading, allPokemons}) =>{
    const res = await fetch ( `${baseUrl}pokemon?limit=${limite}&offset=${offset}` );
    const data = await res.json();
    const { results } =  data;

    const newPokemons = results.map( async( pokemon ) =>{
        const res = await fetch ( pokemon.url );
        const poke = res.json();
        return poke;
    } );

    const infoPokemons = await Promise.all( newPokemons );

    setAllPokemons( [...allPokemons, ...infoPokemons ]);
    setIsLoading(false);
}