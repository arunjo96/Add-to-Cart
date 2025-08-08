import React, { useState, useEffect } from 'react';
import Button from './Button';


export default function CardDesign({ cardDetails, addToCart}) {






  return (


 <div className="main_card">
   <div className='card products_card' >
          <div className="img_div">
      <img src={cardDetails.image} alt={cardDetails.title} />
          </div>
      <h4>{cardDetails.title}</h4>
      <div className="price_div"> 
        <h4>Price: ${cardDetails.price}</h4>
        <Button variant='add_to_cart' onClick={()=>addToCart(cardDetails)}  name={"Add to cart"}></Button>
        
     
      </div>
    </div>
 </div>

  
  )
}
