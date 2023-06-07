import ItemList from './components/ItemList/ItemList'
import NavBar from './components/NavBar/NavBar';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import HomePage from './pages/HomePage/HomePage'
import ObjectPage from './pages/ObjectPage/ObjectPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {

  return (
    <>
    <Container className="appContainer container-xxl">
      <Router>
          <NavBar />

          {/* Routes */}

          <Routes>
            <Route path="/" element={<ItemList />}></Route>
              <Route path="/category/pokemon" element={<PokemonPage />}></Route>
              <Route path="/category/objects" element={<ObjectPage />}></Route>
              <Route path="/item/:name/:id" element={<ItemDetail />}></Route>

          
          </Routes>
          <h6>Made by: <a className='gh-link' href="https://github.com/LeoGrasso2">Leonardo Grasso</a></h6>
      </Router>
      </Container>

    </>
  )
}

export default App
