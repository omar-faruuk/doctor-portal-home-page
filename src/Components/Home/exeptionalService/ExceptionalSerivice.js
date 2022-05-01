import React from 'react';
import treatment from '../../../images/treatment.png';

const ExceptionalSerivice = () => {
    return (
        <div  className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-md-4">
                    <img src={treatment} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 mt-md-5">
                    <h2>Exceptional dental cares,<br /> form our tearms</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, saepe nostrum optio cupiditate eligendi suscipit ad neque necessitatibus obcaecati quaerat vitae, aut commodi in quod possimus praesentium. Porro, quo nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident sapiente sunt aliquam blanditiis quisquam non obcaecati alias similique sint.</p>
                    <div className="btn btn-primary">Learn more</div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalSerivice;