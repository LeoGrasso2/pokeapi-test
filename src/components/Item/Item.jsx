import React from 'react'
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Item = (data) => {

    const capFirstLetter = (word) => {
        if(word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }

        return "";
    }
    

    return(
        <Card className="pokemonCardWrapper rounded-4 bg-transparent border border-0">
        <Card.Link style={{color:'black'}} href={`https://www.wikidex.net/wiki/${
        data.poke.name !== 'nidoran-f' && data.poke.name !== 'nidoran-m' ? data.poke.name : 'nidoran'
      }`}>
        <Card.Header className="pokemonCardId rounded-top-4">#{data.id}</Card.Header>
        <Card.Body className="pokemonCardContent rounded-bottom-4">
          <div className="pokemonCardImage">
            <Card.Img
              variant="top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              alt={data.poke.name}
            />
          </div>
          <Card.Title className="pokemonCardTitle">{capFirstLetter(data.poke.name)}</Card.Title>
        </Card.Body>
        </Card.Link>
      </Card>
    )
}

export default Item