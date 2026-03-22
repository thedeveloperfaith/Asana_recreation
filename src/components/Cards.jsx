import React from 'react'
import "./CSS/Cards.css"
import { cards } from "./dummyCards"

const Cards = () => {
  return (
    <div className='cards_container'>
      <div className='cards_wrapper'>
        {cards.map((items) =>(
          <div className='card_card' key={items.id}>
            <img src={items.icon} alt={items.title} />
             <h3>{items.title}</h3>
             <p>{items.paragraph}</p>
             <span>{items.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
