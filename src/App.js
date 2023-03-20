import Navbar from "./components/Navbar"
import Home from "./views/Home";
import Pokemons from "./views/Pokemons"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";


function App() {
  return (
    <div className="App" style={{
    }}>


      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pokemons/:capture" element={<Pokemons />} />
          </Routes>
        </Container>
      </BrowserRouter>
 
      
    </div>
  );
}

export default App;
