import React, { useState } from 'react';
import brucheeta from './images/bruchetta.svg'; 
import greekSalad from './images/greek-salad.jpg';
import lemonDessert from './images/lemon-dessert.jpg';

function Specials(){
return(
    <div>
       <ul className='Specials'> 
        <li>
           <img src={brucheeta} alt="bruchetta dish image" />
           <p>Bruchetta 9.89 $</p>
           <p>bruschetta is a tasty tomato topping for toasted slices of crusty Italian bread. Made with red ripe tomatoes, chopped herbs and extra virgin olive oil.</p>
           <button className='submitButton'>Order Now</button>
        </li>
        <li>
           <img src={greekSalad} alt="greek salad image" />
           <p>Greek salad 11.89 $</p>
           <p>refreshing & delicious! Made with cucumber, tomatoes, olives, peppers, & feta, Greek salad is the best summer side dish</p>
           <button className='submitButton'>Order Now</button>
        </li>
        <li>
           <img src={lemonDessert} alt="lemon dessert image" />
           <p>Lemon Dessert 7.89 $</p>
           <p> Spoon into these lovely lemon pudding cakes and discover a layer of luscious lemon pudding beneath the cake!</p>
           <button className='submitButton'>Order Now</button>
        </li>
        </ul> 
    </div>
)
}
export default Specials;