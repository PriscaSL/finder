import React from 'react'
import '../styles/ModuleItems.css'

function ModuleItems({ bg, image, title, paragraphe }) {
  return (
    <div className='moduleItem'>
      <div className='modulecontent'>
        <div className='iconbackground' style={{ backgroundColor: bg }}>
          <p id='iconimg' > {image} </p>
        </div>
        <h4 id='titlemodule'>{title}</h4>
        <p id='number'>{paragraphe}</p>
      </div>
    </div>

  )
}

export default ModuleItems