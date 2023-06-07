import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import './ItemList.css'
import { Container } from 'react-bootstrap';



const ItemList = (apiLink) => {

    const [pokeInfo, setPokeInfo] = useState()
    useEffect(() => {
        const fetchPokeAPI = async () => {
            try{
                const res = await axios.get(`${apiLink.link}`)
                setPokeInfo(res.data.results || {});
            }
            catch(err){
                console.log('No se ha hecho una petición, prueba navegando por una de las categorias :D')
            }
            
        };

        fetchPokeAPI();
    }, [])


    const renderList = () => {
        const list = []
        pokeInfo?.map((item, i) => {
            list.push(
                
                <Item sprite={apiLink.sprite} key={i+1} type={apiLink.type} behaviour={apiLink.behaviour} id={i+1} poke={item}/>
            )
            })

        return list;
    }

    return (
        <>
            <Container className="itemListContainer">
                {renderList()}
            </Container>
        </>
    )
}
export default ItemList