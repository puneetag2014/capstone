import Nav from "./Nav.js";
import Jumbotron from "./Jumbotron.js";
import Testimonials from "./Testimonials.js";
import Specials from "./Specials.js";
import Chicago from "./Chicago.js";
import React, { useState } from 'react';

function HomePage(){
  return(
  <>
 <Nav/>
 <Jumbotron/>
<Specials/>
<Testimonials/>
<Chicago/>
</>
 )
};
export default HomePage;