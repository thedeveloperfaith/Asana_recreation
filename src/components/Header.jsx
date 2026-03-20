import React from 'react'
import "./CSS/Header.css"
import Button from './Button'

const navLinks =[
    {id:1, menu:"product"},
    {id:2, menu:"product"},
    {id:3, menu:"product"},
    {id:4, menu:"product"}  
]

const navLinks2=[
    {id:1, menu:"contact sales"},
    {id:2, menu:"log in "}
]

const Header = () => {
  return (
        <header className='header'>
            <div className='header_container'>
                <div className='header_left'>
                    <span className='logo'>asana</span>
                    <nav className='nav_links' >
                        <ul>
                            {navLinks.map((link)=>(
                                <li key={link.id}>{link.menu}</li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='header_right'>
                    <ul>
                        {navLinks2.map((link)=>(
                            <li key={link.id}>{link.menu}</li>
                        ))}
                    </ul>
                </div>

                <div className='header_button'>
                    <Button text={"Get started"} className="get_started"/>
                </div>
            </div>
        </header>

    )
}

export default Header
