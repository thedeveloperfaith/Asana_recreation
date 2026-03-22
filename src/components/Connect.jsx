import React from 'react'
import "./CSS/Connect.css"
import Button from './Button'

const Connect = () => {
  return (
    <div className="connect_section">
        <section className="connect_text">
            <h1>Connect over 300+
              <span className='break_between'>integrations</span> 
            </h1>
            <p>Asana connects with the enterprise tools your 
              <span className='break_between'>organization already uses, right out of the box</span>
            </p>
        </section>

        <div className="connect_button">
            <Button text={"See all integrations"} className="see"/> 
        </div>
      
    </div>
  )
}

export default Connect
