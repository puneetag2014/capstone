import React, { useState } from 'react';
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import { submitAPI } from './Api.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { useNavigate } from 'react-router-dom';

function Booking(props) {
    var availableTimes =props.state_var.availableTimes;
    const [inputs, setInputs] = useState({});
    const [errors,setErrors] =useState();
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    let [timesList, setTimesList] = useState('Select Time');

    const handleDateChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        props.chooseDate(value);
        setInputs(values => ({ ...values, [name]: value }));
         props.dispatch({type: 'update_availableTimes'});
        setTimesList(availableTimes);
    }
    const handleTimeChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        setTimesList(availableTimes);
    }

    const submitForm= (formData)=>{
        let status= submitAPI(formData)
        if (status)
        navigate('/confirmedBooking');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        submitForm(formData);
        }
    let currentDate = new Date();
    return (
        <>
            <Nav />
            <form name="bookingForm" onSubmit={handleSubmit}
                className='bookingForm' >
                <div> <label for="name">Enter your name: </label>
                    <input className='formInput'
                        type="text"
                        id='name'
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input className='formInput' id='date'
                        type="date"
                        name="date"
                        value={inputs.date || ""}
                        onChange={handleDateChange}
                    />
                </div>
                <div>
                    <label for="res-time">Time:</label>
                    <select id="res-time" className='formInput'
                    name="selectTime"
                     data-testid="select"
                        onClick={handleTimeChange}>
                        <option  value="select time">select time</option>
                        {availableTimes.map((timesList) => <option data-testid="optionTimes" key={timesList.label} value={timesList.value}>{timesList.label}</option>)}
                        {/* {availableTimes.map((availableTimes) => <option data-testid="optionTimes" key={availableTimes.label} value={availableTimes.value}>{availableTimes.label}</option>)} */}
                    </select>
                </div>
                <div>
                    <label for="numberGuests">Number of guests:</label>
                    <input className='formInput' id="numberGuests"
                        type="number"
                        name="guestCount"
                        min={1} max={100}
                        placeholder="1"
                        value={inputs.guestCount || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="occassion">Occasion  </label>
                    <select id="occasion" className='formInput'>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>others</option>
                    </select>

                </div>
                <div>
                    <label for="seatingArea">Seating Preference:</label>
                    <select name="seatingArea" value={inputs.seatingArea}
                        onChange={handleChange} id="seatingArea"
                        className='formInput'>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Indoor">Indoor</option>
                        <option value="No preference">No preference</option>
                    </select>
                </div>
                <input aria-label="On Click" 
                type="submit" disabled={(!(inputs.date))||((inputs.username.length)<3)} 
                className='submitButton' />
            </form>
            <Footer />
            {/* (inputs.date<currentDate) */}
        </>
    )
}
export default Booking;