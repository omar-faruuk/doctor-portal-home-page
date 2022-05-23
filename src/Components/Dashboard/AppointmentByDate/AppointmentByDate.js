import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import './AppointmentByDate.css';

const AppointmentByDate = ({ appointments }) => {
    return (
        <div className='tableDiv shadow-sm'>
            <h4 className='text-brand mb-5'>Appointment</h4>
            <table id='customers'>
                <tr>
                    <th>Name</th>
                    <th>Schedule</th>
                    <th>Action</th>
                </tr>
                {
                    appointments.map(app => <tr>
                        <td>{app.name}</td>
                        <td>8:00 AM</td>
                        <td>Not visited</td>
                    </tr>)
                }

            </table>
        </div>
    );
};

export default AppointmentByDate;