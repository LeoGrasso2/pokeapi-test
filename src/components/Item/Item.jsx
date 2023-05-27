import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Item.css'

const Item = ({poke}) => {
    const [pokeInfo, setPokeInfo] = useState({})

    const capFirstLetter = (word) => {
        if(word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }

        return "";
    }
    
    const fetchPokeAPI = async (id) => {
        try{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokeInfo(res.data || {});
        }
        catch(err){
            console.log(err)
        }
    }
 
    const getPokemonData = (id) => {
        fetchPokeAPI(id);
    }

    useEffect(() => {
        getPokemonData(poke);
        if(pokeInfo.name="nidoran-f"){
        }
      }, []);

    return(
            <a className="pokemonCardWrapper" href={`https://www.wikidex.net/wiki/${pokeInfo.name !== 'nidoran-f' && pokeInfo.name !== 'nidoran-m' ? pokeInfo.name : 'nidoran'}`}>
                <div className="pokemonCardId">#{pokeInfo.id}</div>
                <div className="pokemonCardContent">
                    <div className='pokemonCardImage'>
                        <img src={pokeInfo.sprites?.front_default}></img>
                    </div>
                    <div className="pokemonCardTitle">{capFirstLetter(pokeInfo.name)}</div>
                </div>
            </a>
    )
}

export default Item