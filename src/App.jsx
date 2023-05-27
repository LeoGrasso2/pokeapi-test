import ItemList from './components/ItemList/ItemList'
import './index.css'

function App() {

  return (
    <>
    <div className="appContainer">
      <h1 className="appTitle">PokéApi Test!</h1>
      <h6>Made by: <a className='gh-link' href="https://github.com/LeoGrasso2">Leonardo Grasso</a></h6>
      <ItemList />
    </div>
    </>
  )
}

export default App
