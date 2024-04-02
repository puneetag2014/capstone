import Nav from "./Nav.js";
import Chicago from "./Chicago.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import Jumbotron from "./Jumbotron.js";
import Footer from "./Footer.js";
import React, { useState } from 'react';

function HomePage() {
  return (
    <>
      <Nav />
      <Chicago />
      <Specials />
      <Testimonials />
      <Jumbotron />
      <Footer />
    </>
  )
};
export default HomePage;