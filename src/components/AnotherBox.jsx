import React from 'react'
import "./CSS/AnotherBox.css"
import Button from './Button'

const AnotherBox = () => {
  return (
       <div className='card_section'> 
          <h2>What sets Asana apart</h2>

            <div className='card_box'>

                <div className='card'>
                   <div className='card_text'>
                      <h3>Amplify your impact with AI</h3>
                      <p>Let Asana AI handle work for you—with the full context of your business—so your teams can achieve their goals faster.</p>
                      <Button text={"Meet Ai Teammates"} className="meet"/>
                   </div>
                   <div>
                     <img src="" alt="image"/>
                   </div>
                </div>

                <div className='card'>
                    <div className='card_text'>
                        <h3>More clarity and accountability</h3>
                        <p>Connect strategic goals to the teams that help achieve them. Keep your company on track with AI working alongside your teams.</p>
                        <Button text={"Learn about goals"} className="learn"/>
                    </div>

                    <div className='card_image'>
                        <img src="" alt="image "/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnotherBox


                   
