import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoCard = ({info}) => {
    return (
        <div className='col-md-4 text-white  mb-3'>
            <div className={`d-flex justify-content-center info-${info.background} p-4`}>
            <div className=''>
               <FontAwesomeIcon className='infoIcon' icon={info.icon} /> 
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;