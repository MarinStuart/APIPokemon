import {  Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export const PokemonCard = ( { pokemon } ) => {



  return (
    
        <Col className="col-card" xs={24} sm={12} md={8} lg={6} >
        <Link to={`/pokemon/${pokemon.id}`}> 
            <Card
                hoverable
                style={{ width: 220 }}
                cover={<img src={pokemon.sprites.other.dream_world.front_default} />}
            >
                <Meta title={pokemon.name}  description={pokemon.id}/>     
            </Card>
        </Link>
        </Col>

  )
}
