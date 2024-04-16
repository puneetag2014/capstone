import { fireEvent, render,screen} from '@testing-library/react';
import Booking from './Booking.js';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App.js';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage.js';
import userEvent from '@testing-library/user-event';


test('Renders the BookingForm component to check select time options',async () => {
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  )

  expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
 await userEvent.click(screen.getByText(/Reservations/i));
  //  expect(screen.getByText(/Date/i)).toBeInTheDocument();
await   userEvent.click(screen.getByTestId(/select/i));
// await userEvent.click(screen.getByTestId(/optionTimes/i));
let options = screen.getAllByTestId(/optionTimes/i);
(expect(options).toHaveLength)>0;
// expect(options[0]).toHaveValue('17:00');
// expect(options[1]).toHaveValue('18:00');
// expect(options[2]).toHaveValue('19:00');
// expect(options[3]).toHaveValue('20:00');
// expect(options[4]).toHaveValue('21:00');
// expect(options[5]).toHaveValue('22:00');

await  fireEvent.change(screen.getByText(/Date:/i));
(expect(options).toHaveLength)>0;
// expect(options[0]).toHaveValue('17:00');
// expect(options[1]).toHaveValue('18:00');
// expect(options[2]).toHaveValue('19:00');
// expect(options[3]).toHaveValue('20:00');
// expect(options[4]).toHaveValue('21:00');
// expect(options[5]).toHaveValue('22:00');

});
