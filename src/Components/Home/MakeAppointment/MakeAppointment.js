import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor-small.png';
import appointmentBg from '../../../images/appointment-bg.png';


const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={doctor} className='' alt="" />
                </div>
                <div style={{zIndex: '1'}} className="col-md-7 text-white">
                    <h4 className='text-primary mt-4'>APPOINTMENT</h4>
                    <h2 className='text-white mt-4'>Make an appointment today</h2>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laboriosam. adipisicing elit. Atque, ad.</p>
                    <div className="btn btn-primary">Learn more</div>
                </div>
            </div>
            </div>
           
        </section>
    );
};

export default MakeAppointment;