import React from 'react'
import "./CSS/Iconic.css"
import { images } from './dummyIconic'

const Iconic = () => {
  return (
    <div className='icon_section'>
        <div className='icon_container'> 

            <div className='icon_in_grid'>
                {images.map((img) =>(
                    <div className='icon_card' key={img.id }>
                        <img src={img.src} />
                    </div>
                ))}
            </div>
        </div> 
    </div>
  )
}

export default Iconic
