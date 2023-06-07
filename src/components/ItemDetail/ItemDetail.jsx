import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './ItemDetail.css'

const ItemDetail = () => {
    
  const capFirstLetter = (word) => {
    if(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return "";
}

    let { name, id } = useParams();

    let url = `https://pokeapi.co/api/v2/${name}/${id}`

    let sprite, cost;

    if(name == 'pokemon'){
      sprite='front_default';
    }
    else if(name== 'item'){
      sprite='default';
      cost='cost;'
    }

    const [detail, setDetail] = useState()
    useEffect(() => {
        const fetchInfo = async () => {
            try{
                const res = await axios.get(`${url}`)
                setDetail(res.data || {});
                console.log(detail)
            }
            catch(err){
                console.log('No se ha hecho una petición, prueba navegando por una de las categorias :D')
            }
            
        };

        fetchInfo();
        console.log(detail)
    }, [])


    return(
      <Container className="d-flex justify-content-center">
        <Card className="detailCardWrapper align-items-center d-flex rounded-4 bg-transparent border border-0">
        <Card.Header className="detailCardId d-flex justify-content-center rounded-top-4">{capFirstLetter(detail?.name)}</Card.Header>
        <Card.Body className="detailCardContent rounded-bottom-4">
          <div className="detailCardImage">
            <Card.Img
              variant="top"
              src={detail?.sprites?.[sprite]}
              alt={detail?.name}
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ItemDetail