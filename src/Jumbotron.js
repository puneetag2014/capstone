import React, { useState } from 'react';
import restaurantChef from './images/restaurant-chef.jpg';
function Jumbotron(){
return(
    <div className='Jumbotron'>
    <div>
    We are storytellers, always seeking to share cultures with truth, compassion, and enthusiasm.
     Also, Creativity is at our core, as we push ourselves every day to explore new ways to cook, serve, and share.
    </div>
    <img src={restaurantChef} width={400} alt="restaurant chef picture" />
   </div>
)
}
export default Jumbotron;