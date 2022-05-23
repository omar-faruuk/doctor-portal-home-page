import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import moment from 'moment'



const DashboardMain = () => {
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/allAppointments')
            .then(res => setAppointment(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <section style={{backgroundColor: "#F4FDFB"}} className='dashboard'>
            <div className="row">
                <div style={{margin:"0",padding:"0"}} className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-3 ms-5">
                    <h4 className='mb-3'>Dashboard</h4>
                    <div className="row d-flex justify-content-between mb-4 mx-0">
                        <div className="col-md-2 bg-danger d-flex text-white rounded p-3">
                            <div className='fw-bold mx-1'>
                                <h3>{appointment.length - 10}</h3>
                            </div>
                            <p>pending appointments</p>
                        </div>
                        <div className="col-md-2 bg-success d-flex text-white rounded p-3">
                            <div className='fw-bold mx-1'>
                                <h3>{appointment.length - 15}</h3>
                            </div>
                            <p>Today's Appointments</p>
                        </div>
                        <div className="col-md-2 bg-info d-flex text-white rounded p-3">
                            <div className='fw-bold mx-1'>
                                <h3>{appointment.length}</h3>
                            </div>
                            <p>Total appointments</p>
                        </div>
                        <div className="col-md-2 bg-warning d-flex text-white rounded p-3">
                            <div className='fw-bold mx-1'>
                                <h3>{appointment.length + 10}</h3>
                            </div>
                            <p>Total patients</p>
                        </div>
                        
                    </div>
                    <table id='customers' className='bg-white'>
                        <tr>
                            <th>Sr. no</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                        {
                            appointment.map((appointment, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.age}</td>
                                <td>{appointment.weight}</td>
                                <td>{appointment.phone}</td>
                                <td>chittagong, patiya</td>
                            </tr>)
                        }

                    </table>
                </div>
            </div>
        </section>
    );
};

export default DashboardMain;