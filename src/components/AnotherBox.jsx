import React from 'react'
import "./CSS/AnotherBox.css"
import Button from './Button'

const AnotherBox = () => {
  return (
       <div className='card_section'> 
          <h2>What sets Asana apart</h2>

            <div className='card_box'>

                <div className='another_card'>
                   <div className='card_text'>
                      <h3>Amplify your impact with AI</h3>
                      <p>Let Asana AI handle work for you—with the full context of your business—so your teams can achieve their goals faster.</p>
                      <Button text={"Meet Ai Teammates"} className="meet"/>
                   </div>
                   <div>
                     <img src="https://assets.asana.biz/m/546c7302c2dfac4a/original/homepage_ai_update.png" alt="image"/>
                   </div>
                </div>

                <div className='another_card'>
                    <div className='card_text'>
                        <h3>More clarity and accountability</h3>
                        <p>Connect strategic goals to the teams that help achieve them. Keep your company on track with AI working alongside your teams.</p>
                        <Button text={"Learn about goals"} className="learn"/>
                    </div>

                    <div className='card_image'>
                        {/* <img src="https://assets.asana.biz/transform/84bd82a5-8756-4b9b-a760-e790c5cbbc5b/WEB-homepage-goals-en_us?io=transform:fill" alt="image "/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnotherBox


                   
