import ItemList from './components/ItemList/ItemList'
import NavBar from './components/NavBar/NavBar';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {

  return (
    <>
    <Container className="appContainer container-xxl">
      <NavBar />
      <ItemList />
      <h6>Made by: <a className='gh-link' href="https://github.com/LeoGrasso2">Leonardo Grasso</a></h6>
    </Container>
    </>
  )
}

export default App
