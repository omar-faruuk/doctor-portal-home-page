import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import axios from 'axios';
import moment from 'moment'
import './Dashboard.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
    position: "fixed",
    paddingLeft: "0"
}
const Dashboard = () => {
    const newDate = new Date()
    const [selectedDate, setSelectedDate] = useState(moment(newDate).format("D/ MM/ YYYY"));
    const [appointments, setAppointments] = useState([])
    console.log(appointments);
    const onChange = date => {
        setSelectedDate(moment(date).format("D/ MM/ YYYY"))
       console.log(moment(date).format("D/ MM/ YYYY"));
    }
    useEffect(()=>{
        axios.post('http://localhost:5000/appointmentsByDate', {selectedDate})
        .then(result => setAppointments(result.data))
        .catch(err => console.log(err))
    },[selectedDate])
    return (
       <section>
           <div style={containerStyle} className="container-fluid row">
               <div style={{margin:"0",padding:"0"}} className="col-md-2">
                   <Sidebar></Sidebar>
               </div>
               <div className="col-md-4 mt-5 mx-5">
                   <h4 className='mb-4'>Appointment</h4>
                <div className="">
                <Calendar onChange={onChange} value={new Date()} />
                </div>
               </div>
               <div className="col-md-5 mt-5">
                   <AppointmentByDate appointments={appointments}></AppointmentByDate>
               </div>
           </div>
       </section>
    );
};

export default Dashboard;