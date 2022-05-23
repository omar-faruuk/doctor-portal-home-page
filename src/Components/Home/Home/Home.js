import React from 'react';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServicessInfo from '../ServicessInfo/ServicessInfo';
import Testimonial from '../Testimonial/Testimonial';
import ExceptionalSerivice from './../exeptionalService/ExceptionalSerivice';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicessInfo></ServicessInfo>
            <ExceptionalSerivice></ExceptionalSerivice>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;