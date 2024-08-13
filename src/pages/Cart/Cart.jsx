import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {

  

  return (
    <div className='Cart'>
      <div className="cartItems">
        <div className="title">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr/><br /><br/>
        <div className='items'>
            <br /><br/>
            <hr/><br/>
            <p>Total          </p><br/><hr /><br/>
            <p>Delivery Fee   </p><br/><hr /><br/>
            <p>Grand Total   </p><br/><hr /><br/>
        </div>
      
        <div className='but'>
          
          <br></br>
         <Link to='/order'> <button>Submit</button></Link>
          
        </div>

      </div>

      
    </div>
  )
}

export default Cart
