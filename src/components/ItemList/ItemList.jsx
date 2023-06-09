import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import './ItemList.css'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const ItemList = (cat) => {

    const { id } = useParams();
    const [pokeInfo, setPokeInfo] = useState()
    let query = []

    if(id === 'objects'){
        query.push(
            {
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/',
                link: 'https://pokeapi.co/api/v2/item/?limit=20',
                behaviour: 'name',
                type: 'item'
            }
        )
    }
    else if(id === 'pokemon'){
        query.push(
            {
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
                link: 'https://pokeapi.co/api/v2/pokemon/?limit=20',
                behaviour: 'id',
                type: 'pokemon'
            }
        )
    }
    useEffect(() => {
        const fetchPokeAPI = async () => {
            try{
                const res = await axios.get(`${query[0].link}`)
                setPokeInfo(res.data.results || {});
            }
            catch(err){
                console.log('No se ha hecho una petición, prueba navegando por una de las categorias :D')
            }
            
        };

        if (query.length > 0) {
            fetchPokeAPI();
          }


        return () => {
            setPokeInfo(null);
          };
    }, [id])

    console.log(query)
    const renderList = () => {
        if(query.length>0){
            const list = []
            pokeInfo?.map((item, i) => {
                list.push(
                    
                    <Item 
                    sprite={query[0].sprite}
                    key={i+1} 
                    type={query[0].type} 
                    behaviour={query[0].behaviour} 
                    id={i+1} 
                    poke={item}/>
                )
                })

            return list;
        }
        else{
            return <div className='centeredDiv'><div>Haz click en una categoria para ver el catálogo!</div></div>
        }
    }

    return (
        <>
        <div className="d-flex">
            <Container className="itemListContainer">
                {renderList()}
            </Container>
        </div>
        </>
    )
}
export default ItemList