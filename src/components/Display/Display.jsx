import React, { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/StoreContext'
import Item from '../item/Item'
const Display = ({category}) => {

    const {veg_list} = useContext(StoreContext)
  return (
    <div className='display' id='display'>
        <h2>Items that you can get near you.</h2>
      <div className='display-list'>
        {veg_list.map((item,index)=>{
            {console.log(category,item.category);}
          if(category==="All"||category===item.category){
                return <Item key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
          }  

        })}
      </div>
    </div>
  )
}

export default Display
