import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage.js';
import Booking from './Booking.js';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
    </Routes>
    </>

  );
}

export default App;
