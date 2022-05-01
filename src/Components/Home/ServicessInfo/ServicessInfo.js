import React from 'react';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Servicess from './Servicess/Servicess';

const servicesData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity fillign',
        img: cavity
    },
    {
        name: 'Teeth whitening',
        img: whitening
    }
]

const ServicessInfo = () => {
    return (
        <section className='mt-5'>
            <div className='text-center'>
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICESS</h5>
                <h2>Service We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <div className="row w-75">
               {
                   servicesData.map(service => <Servicess service={service}></Servicess>)
               }
            </div>
            </div>
        </section>
    );
};

export default ServicessInfo;