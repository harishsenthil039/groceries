import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/Assets'
const Exploremenu = ({category, setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>EXPLORE OUR ITEMS</h1>
        <p>Click the menu to view the items.</p>
      <div className='exploremenulist'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='menulistitem'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
