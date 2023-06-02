import React from 'react'
import './Item.css'

const Item = (data) => {

    const capFirstLetter = (word) => {
        if(word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }

        return "";
    }
    

    return(
            <a className="pokemonCardWrapper" href={`https://www.wikidex.net/wiki/${data.poke.name !== 'nidoran-f' && data.poke.name !== 'nidoran-m' ? data.poke.name : 'nidoran'}`}>
                <div className="pokemonCardId">#{data.id}</div>
                <div className="pokemonCardContent">
                    <div className='pokemonCardImage'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}></img>
                    </div>
                    <div className="pokemonCardTitle">{capFirstLetter(data.poke.name)}</div>
                </div>
            </a>
    )
}

export default Item