import React, { useState } from 'react';
import { FcRating } from "react-icons/fc";
import mostafa from './images/mostafa.jpeg';
import alvin from './images/alvin.jpg';
import elina from './images/Elina.webp';
import humphrey from './images/humphrey.jpg';

function Testimonials(){
return(
    <div>
    <ul className='Testimonials'> 
     <li>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <img src={alvin} alt="customer 1 pic" />
        <p>  <strong> Alvin Parker </strong> </p>
        <p> Great atmosphere with attentive service and the food was great.  </p>
     </li>

     <li>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <img src={mostafa} alt="customer 2 pic" />
        <p> <strong> Mostafa Shaikh </strong>  </p>
        <p> Great place ! The Lemon dessert was AMAZING! </p>
     </li>
     <li>
     <FcRating/>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <img src={elina} alt="customer 3 pic" />
        <p> <strong> Elina Jones </strong></p>
        <p> The staff is so friendly and work as if they are choreographed. </p>
     </li>
     <li>
     <FcRating/>
        <FcRating/>
        <FcRating/>
        <FcRating/>
        <img src={humphrey} alt="customer 4 pic" />
        <p>  <strong> Humphrey Williams </strong></p>
        <p>  The experience was wonderful,  Service at every turn was spot on.</p>
     </li>
     </ul> 
 </div>
)
}
export default Testimonials;