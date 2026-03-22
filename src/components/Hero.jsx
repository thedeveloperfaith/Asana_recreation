import React from 'react'
import "./CSS/Hero.css"
import Button from './Button'

const Hero = () => {
  return (
    <section className='hero_container'>
      <div className='hero_content'>
        <h1 className='hero_heading'>
          Supercharge your teams
          with AI that gets work done
        </h1>
        <p className='hero_paragraph'>
          Give your teams AI that understands their work, keeps projects moving, and gets
          better the more your teams use it.
        </p>
        <div className='hero_buttons'>
          <Button text={"Get started"} className="get_started_hero"/>
          <Button text={"Contact Sales"} className="contact_sales"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
