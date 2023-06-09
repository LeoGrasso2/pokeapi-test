import React from 'react'
import ItemList from '../../components/ItemList/ItemList'

const ObjectPage = () => {
  return (
    <ItemList sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" type="item" behaviour="name" link="https://pokeapi.co/api/v2/item/?limit=20"></ItemList>
  )
}

export default ObjectPage