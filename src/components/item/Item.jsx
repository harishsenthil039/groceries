import React, { useState } from 'react'
import './Item.css'
import { assets } from '../../assets/Assets'
const Item = ({id,name,price,description,image}) => {

   const [itemCount,setItemCount] = useState(0)
    
  return (
    <div className='item'>
      <div className='itemimg-container' >
        <img src={image} alt="" className="itemimage" />
        {!itemCount
            ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add} alt='' />
            :<div className='item_counter'>
                <img className='add1' onClick={()=>setItemCount(prev=>prev-1)} src={assets.minus} alt='' />
                <p>{itemCount}</p>
                <img  className='add1' onClick={()=>setItemCount(prev=>prev+1)} src={assets.plus} alt='' />
            </div>
}
  

      </div>
      <div className='iteminfo'>
      
        <p><b>{name}</b></p></div>
        <img src={assets.Review} alt="" className="review" />
      
      <p className='itemdes'>{description}</p>
      <p className='itemprice'>{price}</p>
    </div>
  )
}

export default Item
