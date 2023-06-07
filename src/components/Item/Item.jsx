import React from 'react'
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = (data) => {

    let image;

    if(data.behaviour == 'name'){
      image = `${data.sprite}${data.poke.name}.png`
    }
    else if(data.behaviour == 'id'){
      image = `${data.sprite}${data.id}.png`
    }
    const capFirstLetter = (word) => {
        if(word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }

        return "";
    }

    return(
        <Card className="pokemonCardWrapper rounded-4 bg-transparent border border-0">
        <Link to={`/item/${data.type}/${data.id}`}><Card.Link style={{color:'black'}} href={`/item/${data.type}/${data.id}`}>
        <Card.Header className="pokemonCardId rounded-top-4">#{data.id}</Card.Header>
        <Card.Body className="pokemonCardContent rounded-bottom-4">
          <div className="pokemonCardImage">
            <Card.Img
              variant="top"
              src={`${image}`}
              alt={data.poke.name}
            />
          </div>
          <Card.Title className="pokemonCardTitle">{capFirstLetter(data.poke.name)}</Card.Title>
        </Card.Body>
        </Card.Link></Link>
      </Card>
    )
}

export default Item