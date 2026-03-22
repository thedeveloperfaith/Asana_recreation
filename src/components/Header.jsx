import React from 'react'
import "./CSS/Header.css"
import Button from './Button'

const navLinks =[
    {id:1, menu:"Product"},
    {id:2, menu:"Solution"},
    {id:3, menu:"Learning & Support"},
    {id:4, menu:"Pricing"}  
]

const navLinks2=[
    {id:1, menu:"Contact sales"},
    {id:2, menu:"Log in "}
]

const Header = () => {
  return (
        <header className='header'>
            <div className='site_wrapper'>

               <div className='header_container'>
                    <div className='header_left'>
                      <img src="https://sm.pcmag.com/pcmag_au/review/a/asana/asana_cd5e.jpg" alt="Asana logo" className='logo'/>
                    </div>
                    <nav className='nav_links' >
                        <ul>
                           {navLinks.map((link)=>(
                             <li key={link.id}>{link.menu}</li>
                           ))}
                        </ul>
                    </nav>
                    <div className='header_actions'>
                       <div className='header_right'>
                         <img src="https://assets.asana.biz/transform/3ac30492-304b-4644-a39b-e89fad0df303/SD040-web-nav-GlobeIcon-en-US" alt="icon" className="header_icon" />

                            <ul>
                              {navLinks2.map((link)=>(
                              <li key={link.id}>{link.menu}</li>
                              ))}
                            </ul>
                        </div>

                        <div className='header_button'>
                         <Button text={"Get started"} className="get_started"/>
                        </div>
                        <div className='mobile'>
                           ☰
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
