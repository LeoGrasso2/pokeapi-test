import ItemList from '../../components/ItemList/ItemList'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const PokemonPage = () => {
    return (
        <>
            <ItemList sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" type="pokemon" behaviour="id" link="https://pokeapi.co/api/v2/pokemon/?limit=20"></ItemList>
        </>
    )
}

export default PokemonPage