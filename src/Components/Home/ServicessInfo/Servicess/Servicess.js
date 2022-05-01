import React from 'react';

const Servicess = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <div>
                <img className='mb-3' style={{height: '50px'}} src={service.img} alt="icon" />
                <h6>{service.name}</h6>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, officia.</p>
            </div>
        </div>
    );
};

export default Servicess;