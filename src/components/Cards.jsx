import React from 'react'
import "./CSS/Cards.css"
import { cards } from "./dummyCards"

const Cards = () => {
  return (
    <div className='cards_container'>
      <div className='cards_wrapper'>
        {cards.map((items) =>(
          <div className='card' key={items.id}>
             <h3>{items.title}</h3>
             <p>{items.paragraph}</p>
             <span>{items.text}</span>
             <img src={items.icon} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default Cards
