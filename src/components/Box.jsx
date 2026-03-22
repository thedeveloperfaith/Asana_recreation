import React from 'react'
import "./CSS/Box.css"
import Button from './Button'

const Box = () => {
  return (
    <div className='box_container'>
        <div className='box_buttons'>
            <Button text={"Marketing"} className="marketing"/>
            <Button text={"Operation"} className="operation"/>
            <Button text={"IT"} className="it"/>
            <Button text={"Leadership"} className="leadership"/>
        </div>

        <div className='box_content'>
            <aside className='box_image'>
                <img src="https://assets.asana.biz/transform/a06e7cef-41f6-4474-b06e-ae0e43501edb/homepage_ai_update?io=transform:fill,width:2560&format=webp" alt="campaign_image"/>
            </aside>

            <article className='box_text'>
                <h2>Maximize campaign ROI</h2>
                <ul>
                   <li>Streamline campaign management</li> 

                   <li>Enhance creative production</li> 

                   <li>Manage events and editorial calendars</li> 
                </ul>
                <Button text={"Get started"} className="get_started_box"/>
            </article>
        </div>
    </div>
  )
}

export default Box
