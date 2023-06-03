import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import './ItemList.css'
import { Container } from 'react-bootstrap';


const ItemList = () => {

    const [pokeInfo, setPokeInfo] = useState()

    useEffect(() => {
        const fetchPokeAPI = async () => {
            try{
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
                setPokeInfo(res.data.results || {});
            }
            catch(err){
                console.log(err)
            }
            
        };

        fetchPokeAPI();
    }, [])


    const renderList = () => {
        const list = []

        pokeInfo?.map((item, i) => {
            console.log(item)
            list.push(
                <Item key={i+1} id={i+1} poke={item}/>
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