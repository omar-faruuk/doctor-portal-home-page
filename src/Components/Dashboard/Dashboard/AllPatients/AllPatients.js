import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AllPatients.css';

const AllPatients = () => {
    const [patients, setPatients] = useState([]);
    console.log(patients);
    useEffect(() => {
        axios('http://localhost:5000/allAppointments')
            .then(res => setPatients(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <section className='patients'>
            <div className="row">
                <div style={{margin:"0",padding:"0"}} className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 mt-5 ms-5">
                    <h4 className='mb-4'>patients</h4>
                    <table id='customers'>
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
                            patients.map((patient, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{patient.name}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.age}</td>
                                <td>{patient.weight}</td>
                                <td>{patient.phone}</td>
                                <td>chittagong, patiya</td>
                            </tr>)
                        }

                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllPatients;