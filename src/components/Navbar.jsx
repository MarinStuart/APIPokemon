import { Row, Col, Input } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const Navbar = () => {

  const navigate = useNavigate();

  const {formState, onInputChange, onResetForm, valueSearch} = useContext(PokemonContext);


  const onSubmit = (event) =>{
    event.preventDefault();
    navigate("/search-pokemon",{
      state:valueSearch,
    });
    onResetForm();
  }

   
  return (
    <div  style={{ width:"100%", backgroundColor:"white", height: "55px" }}>

      <div>
          <Row justify="space-around">

              <Col className="col-nav" span={6} >
                <Link to="/">
                  <img src= "\assets\img\Pokédex_logo.png" alt="Pokemon" width="100px" />
                </Link>
              </Col>
              
              <Col className="col-nav" span={10}  >
                <form onSubmit={onSubmit} style={{display:"flex"}}>    
                <Input
                      size="large" 
                      onChange={  onInputChange }
                      name="valueSearch"
                      placeholder="large size" 
                      prefix={<UserOutlined />}
                      type="search"
                />
                 
                </form>
              </Col>

          </Row>
      </div>
      
    </div>
  )
}
