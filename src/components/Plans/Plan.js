import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const Plan = () => {
    const [plans,setPlans]=useState([]);
    fetch('http://localhost:5000/bookings')
    .then(res=>res.json())
    .then(data=>setPlans(data))
    return (
        <div>
            <h1>Plans</h1>
             <div className='row mt-5'>
            {
               plans.map(plan=><Booking key={plan.country} plan={plan}></Booking>)
            }
    
           </div>
        </div>
    );
};

export default Plan;