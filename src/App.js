import './App.css';
import React, { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage.js';
import Booking from './Booking.js';
import { useEffect,useState } from 'react';
// import { fetchAPI } from 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';
import { fetchAPI } from './Api.js';

function App() {

  useEffect(() => {
  //   // fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`) 
    //   .then((response) => response.json());
      // console.log();
  //     .then((jsonData) => setDateData(jsonData.bpi.USD)) 
  //     .catch((error) => console.log(error));
  }, []);
  const initialState = { availableTimes: 0 };
  let currentDate = new Date();
// console.log(currentDate.toDateString());
  const [date, setDate] = React.useState(currentDate);
  const chooseDate = (date) => {
    setDate(date);
    // console.log(date);
  };

  function initializeTimes(date){
   const times_avail=fetchAPI(date);
    return {availableTimes:times_avail};
  };
function updateTimes(state,action) {
  if (action.type === 'update_availableTimes') {
    // action.payload= fetchAPI(date);
    // console.log(availableTimes);
    return {
      availableTimes:fetchAPI(date)
      // availableTimes:action.payload
    };
}
};
const [state,dispatch] =useReducer(updateTimes,0,initializeTimes);
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<Booking 
      // availableTimes={state.availableTimes}
      state_var={state}
      dispatch={dispatch}
      chooseDate={chooseDate}
      // initializeTimes={initializeTimes}
      // updateTimes={updateTimes}
      />}></Route>
    </Routes>
    </>

  );
}

export default App;
