import React from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AppointmentCard = ({appointment, date}) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal =()=> {
        setIsOpen(true);
    }
    const closeModal =()=> {
        setIsOpen(false);
    }
    return (
        
            <div className="col-md-4 mb-5">
               <div className="card text-center p-4 border-0 shadow">
                   <div className="text-brand card-title mb-0">
                       <h3>{appointment.subject}</h3>
                   </div>
                   <div className="card-body p-0">
                       <h5>{appointment.time}</h5>
                       <h6 className='text-secondary'>{appointment.space} SPACE AVAILABLE</h6>
                       <div onClick={openModal} className="btn btn-brand mt-4">Book Appointment</div>
                       <AppointmentModal modalIsOpen={modalIsOpen} closeModal={closeModal} date={date} subject={appointment.subject}></AppointmentModal>
                   </div>
               </div>  
            </div>
        
    );
};

export default AppointmentCard;