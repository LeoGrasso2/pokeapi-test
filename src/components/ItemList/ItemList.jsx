import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = () => {

    const renderList = () => {
        const list = []

        for(let i=1; i<=151; i++){
            list.push(
                <div key={i}>
                    <Item poke={i}></Item>
                </div>
            )
        }

        return list;
    }

    return (
        <>
            <div className="itemListContainer">
                {renderList()}
            </div>
        </>
    )
    
}

export default ItemList