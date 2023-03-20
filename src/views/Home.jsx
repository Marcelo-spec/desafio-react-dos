import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PokemonsImage from "../img/pokemonsImage.png"
import { useEffect, useState } from "react";
import { getPokemons } from "../components/ComponentPokemon";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);
  const [capturePokemon, setCapturePokemon] = useState('');

  const getList = async () => {
    const data = await getPokemons();
  
    setListPokemons(data.results);
  };

  const buscar = () => {
    if (capturePokemon === "") {
      return alert("Selecciona un Pokemon");
    }
    navigate(`/Pokemons/${capturePokemon}`);
  };

  const onChangeData = (e) => {
    const data = e.target.value;
    setCapturePokemon(data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-center">Sé un Maestro Pokemon</h1>
        <img className="justify-content-md-center"
            alt="PokemonsImage"
            src={PokemonsImage}
            width="60%"
            height="20%"
            />
        <Row>
          <Col md={6} lg={3}>
            <Form.Select aria-label="Seleccione" onChange={onChangeData} className="form">
              <option>Pokemones</option>
              {listPokemons.map((list, index) => (
                <option value={list.name} key={index}>
                  {list.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={6} lg={3}>
            <Button variant="dark" onClick={() => buscar()} className="btn">
              {" "}
              Ver Detalle{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
