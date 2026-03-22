import React from 'react'
import "./CSS/Connect.css"
import Button from './Button'

const Connect = () => {
  return (
    <div className="connect_section">
        <section className="connect_text">
            <h1>Connect over 300+ integrations</h1>
            <p>Asana connects with the enterprise tools your organization already uses, right out of the box.</p>
        </section>

        <div className="connect_button">
            <Button text={"See all integrations"} className="see"/> 
        </div>
      
    </div>
  )
}

export default Connect
