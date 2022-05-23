import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
const appointData = [
    {
        id: 1,
        subject: 'Teeth orthodontics',
        space: 10,
        time: '10:AM-12:Am'
    },
    {
        id: 2,
        subject: 'Teeth orthodontics',
        space: 10,
        time: '10:AM-12:Am'
    },
    {
        id: 3,
        subject: 'Teeth orthodontics',
        space: 10,
        time: '10:AM-12:Am'
    },
    {
        id: 4,
        subject: 'Teeth orthodontics',
        space: 10,
        time: '10:AM-12:Am'
    },
    {
        id: 5,
        subject: 'Teeth orthodontics',
        space: 10,
        time: '10:AM-12:Am'
    },
    {
        id: 6,
        subject: 'Teeth orthodontics',
        space: 10,
        time: '10:AM-12:Am'
    },
]

const AvailableAppointment = ({date}) => {
   console.log(date);
    return (
        <div>
            <h2 className='text-brand text-center mb-5'>Available appointment on {date}</h2>
            <div className="container">
            <div className="row">
                {
                    appointData.map(appointment => <AppointmentCard appointment={appointment} date={date}></AppointmentCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;