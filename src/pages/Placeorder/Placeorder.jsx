import React from 'react'
import './Placeorder.css'
const Placeorder = () => {
  return (
    <form className='order'>
      <div className='left'>
        <p className='title'>Delivery Information</p>
        <div className='multifields'>
          <input type="text" placeholder='First name' required/>
          <input type="text" placeholder='Last name' required/>
        </div>
        <input type="email" placeholder='E-mail' required/>
          <input type="text" placeholder='Street' required/>
          <div className='multifields'>
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='State' required/>
        </div>
        <div className='multifields'>
          <input type="text" placeholder='Pincode' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type='text' placeholder='Phone' required/>
      </div>
      <br />
      <div className='right'>
            <h2>Cost Details</h2><br />
            <p>Price Total    </p><br /><hr /><br />
            <p>Delivery Fee  </p><br /><hr /><br />
            <p>Grand Total   </p><br /><hr />
            <button>PROCEED PAYMENT</button>
      </div>
      
    </form>
  )
}

export default Placeorder
