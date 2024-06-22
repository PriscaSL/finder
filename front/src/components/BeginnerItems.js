import React from 'react'
import '../styles/BeginnerItem.css'

function BeginnerItems({imageb, titleb, paragrapheb}) {
    return (

    
    <div className='begItem'>
        <div className='begcontent'>
        <div className='iconback'>
           <p id='begicimg' ><img src={imageb} alt='ttt'/></p>
        </div>
        <h4 className='titlbeg'>{titleb}</h4>
        <p className='p'>{paragrapheb}</p>
        </div>
    </div>
  )
}

export default BeginnerItems