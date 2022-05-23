import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppintmentHeaderMain from '../AppointmentHeaderMain/AppintmentHeaderMain';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import moment from 'moment'

const Appointment = () => {
    const newDate = new Date()
    const [selectedDate, setSelectedDate] = useState(moment(newDate).format("D/ MM/ YYYY"))
    const handleDateChange = date =>{
         setSelectedDate(moment(date).format("D/ MM/ YYYY"))
    }

    return (
        <div>
            <Navbar></Navbar>
            <AppintmentHeaderMain handleDateChange={handleDateChange}></AppintmentHeaderMain>
            <AvailableAppointment date={selectedDate}></AvailableAppointment>
            <Footer />
        </div>
    );
};

export default Appointment;