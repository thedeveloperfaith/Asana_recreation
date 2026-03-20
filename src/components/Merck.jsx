import React from 'react'
import "./CSS/Merck.css"

const icons=[
    {id:1,image:"https://assets.asana.biz/transform/94a2af9e-55e7-489b-bcd9-7f2836f5e45f/amazon?io=transform:fill,width:375&format=webp"},
    {id:2,image:"https://assets.asana.biz/transform/7aa89522-d837-49fc-ae5b-d8701de258fd/accenture?io=transform:fill,width:375&format=webp"},
    {id:3,image:"https://assets.asana.biz/transform/64c6de51-290f-40fa-808a-241c6bae8528/JJ?io=transform:fill,width:375&format=webp"},
    {id:4,image:"https://assets.asana.biz/transform/29c5cd4b-7a60-4557-8004-f78cbb8c5ffc/dell?io=transform:fill,width:375&format=webp"},
    {id:5,image:"https://assets.asana.biz/transform/8d9b2024-7c0b-463b-88c0-ee3107d4f5fe/merck?io=transform:fill,width:375&format=webp"}
]

const Merck = () => {
  return (
    <div className='container_85'> 
        <div className='paragraph_wrapper'>
            <p>85% of Fortune 100<br/>
             companies choose Asana¹</p>
        </div>

        <div className='icons_container'>
            {icons.map((icon)=>(
              <div className='merck_wrapper'key={icon.id}>
                <img src={icon.image} alt="company logo"/>  
              </div>
            ))}
        </div>
    </div>
  )
}

export default Merck
