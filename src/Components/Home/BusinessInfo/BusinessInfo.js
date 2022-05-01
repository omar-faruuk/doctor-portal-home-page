import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Broklyn, NY, 1293, united state',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact US Now',
        description: '+3839203834',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='row w-75'>
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;