import { Button, Card } from "antd"
import { InfoChartsPokemon } from "./InfoChartsPokemon"

    

export const InfoCardPokemon = ({ pokemon }) => {

    const data = [
        { name: 'Group A', value: pokemon.stats[0].base_stat },
        { name: 'Group B', value: pokemon.stats[1].base_stat },
        { name: 'Group C', value: pokemon.stats[2].base_stat },
        { name: 'Group D', value: pokemon.stats[3].base_stat },
        { name: 'Group E', value: pokemon.stats[4].base_stat },
        { name: 'Group F', value: pokemon.stats[5].base_stat },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#06B73B', '#FFFF2B' ];

  return (
    <div className="container-mainInfo">
                                <div className="caja-info c-info1">
                <span className="span-info">
                    #{pokemon.id}
                </span>
            </div>
            <div className="caja-info c-info2">
                <img src={pokemon.sprites.other.dream_world.front_default}/>
                
            </div>
            <div className="caja-info c-info3">

                <div>
                <div>
                    <Button style={{ marginRight:4, marginBottom: 10 }}>
                        Tipo
                    </Button>
                    <Button>
                        Contramedida
                    </Button>
                </div>
                <div>
                    <span style={{ fontWeight:1000, fontSize:30, marginTop: 5 }}>
                        Altura
                    </span>
                </div>
                <div style={{ marginTop:5 }}>
                    <span style={{ fontWeight:1000, fontSize:15, marginTop: 5 }}>
                        {pokemon.height}
                    </span>
                </div>
                </div>

            </div>
            <div className="caja-info c-info4">
                <div className="info-nombrePokemon">
                    <span style={{ fontSize:50, fontWeight:1000 }}>
                        { pokemon.name }
                    </span>
                </div>
                <div className="info-pesoPokemon" style={{ marginTop: 40 }}>
                    <div >
                        <div>
                        <span style={{ fontWeight:1000, fontSize:30, marginTop: 5 }} >
                        Peso
                    </span>
                    </div>
                    <div style={{ marginTop:4 }}>
                        <span style={{ fontWeight:1000, fontSize:15 }} >
                            {pokemon.weight}
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="caja-info c-info5">
                <span style={{ fontSize:30, fontWeight:1000 }}>
                        Estadisticas
                </span>
            </div>
            <div className="caja-info c-info6">
                <ul style={{marginRight:"20px", listStyleType:"circle"}}>
                    <li style={{color:'#0088FE'}}>
                        HP:{pokemon.stats[0].base_stat}
                    </li>
                    <li style={{color:'#00C49F'}}>
                        Attack:{pokemon.stats[1].base_stat}
                    </li>
                    <li style={{color:'#FFBB28'}}>
                        Defense:{pokemon.stats[2].base_stat}
                    </li>
                    <li style={{color:'#FF8042'}}>
                        Special Attack:{pokemon.stats[3].base_stat}
                    </li>
                    <li style={{color:'#06B73B'}}>
                        Special Defense:{pokemon.stats[4].base_stat}
                    </li>
                    <li style={{color:'#FFFF2B'}}>
                        HP:{pokemon.stats[5].base_stat}
                    </li>
                </ul>
                <InfoChartsPokemon data={data} COLORS={COLORS}/>
            </div>
        
        </div>
  )
}
