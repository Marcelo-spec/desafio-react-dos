import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import poke from '../img/poke.png'
import { NavLink } from "react-router-dom";


function Navigator() {
  const setActivo = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <>
      <Navbar bg="dark" 
      variant="dark">
        <Container>
          <Navbar.Brand>PokePage
            <img
            alt="Pokeball"
            src={poke}
            width="20"
            height="20"
            />
          </Navbar.Brand>
          
          <Nav className="position-relative">
            <Nav.Link className="position-end">
              <NavLink to="/" className={`text-white text-decoration-none ${setActivo}`}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="position-end">
              <NavLink to="/Pokemons/random" className={`text-white text-decoration-none ${setActivo}`}>
                Pokemons
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigator;