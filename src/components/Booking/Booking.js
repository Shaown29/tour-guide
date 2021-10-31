import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css'

const Booking = ({plan}) => {
    const {img,name,description,cost,offer,country,_id}=plan;

    return (
        
            <div className='col-lg-6 col-12 size'>
            <img className='image-size' src={img} alt="" />
            <h2>destination:{name}</h2>
            <p>detail:{description}</p>
            <h4>Cost: ${cost}</h4>
            <p>Tour days: {offer}</p>
            <h5>Country:{country}</h5>
           
            <Link to={`/placeOrder/${_id}`}><button className='mx-1'>Booking</button></Link>

            
        </div>
        
    );
};

export default Booking;