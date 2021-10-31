import React from 'react';
import Banner from '../Banner/Banner';
import BookingFlight from '../BookingFlight/BookingFlight';
import Footer from '../Footer/Footer';
import HotelBookings from '../HotelBookings/HotelBookings';
import Plan from '../Plans/Plan';

const Home = () => {
    return (
        <div id='home'>
          <Banner></Banner>
          <Plan></Plan>
          <BookingFlight></BookingFlight>
          <HotelBookings></HotelBookings>
          <Footer></Footer>
        </div>
    );
};

export default Home;