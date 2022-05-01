import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import doctor from '../../../images/doctor.png';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const doctors = [
    {
        img: doctor,
        name: 'dr.caudi',
        phone: '+09483823929'
    },
    {
        img: doctor,
        name: 'dr.caudi',
        phone: '+09483823929'
    },
    {
        img: doctor,
        name: 'dr.caudi',
        phone: '+09483823929'
    }
]

const Doctors = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className="container">
                <h4 className='text-primary text-center'>OUR DOCTORS</h4>
                <div className="row d-flex justify-content-center mt-5">
                    {
                        doctors.map(doctor =>
                            <div className="col-md-3 text-center">

                            <div className="img">
                                <img style={{height:'auto',width:'100%'}} className='img-fluid' src={doctor.img} alt={doctor.name} />
                            </div>
                            <div className="text mt-4">
                                <h5>{doctor.name}</h5>
                                <p><FontAwesomeIcon className='text-primary' icon={faPhone} /> {doctor.phone}</p>
                            </div>
    
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;