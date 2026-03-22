import React from 'react'
import "./CSS/Asana.css"
import Button from './Button'

const Asana = () => {
  return (
    <div className='asana_section'>
        <div className='asana_container'>
            <div className='asana_left'>
              <span>Logo</span>
            </div>

            <article className='asana_middle'>
                <h2>Stay secure and compliant with Asana Gov</h2>
                <p>Asana Gov empowers government agencies to coordinate critical work—
                    from strategic planning to rapid response—on a platform that’s easy to
                    implement, scales seamlessly, and meets your compliance needs.</p>
            </article>
            <div className='asana_right'>
                <Button text={"Check out Asana Gov"} className="Check"/>
            </div>
        </div>
    </div>
  )
}

export default Asana
