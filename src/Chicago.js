import React, { useState } from 'react';
import restaurant from './images/restaurant.jpg';
function Chicago(){
    return(
        <div className='Chicago'>
         <img src={restaurant} width={400} alt="restaurant image" />
         <div>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
         </div>
        </div>
    )
}
export default Chicago;