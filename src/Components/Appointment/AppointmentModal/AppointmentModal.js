import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentModal.css';
import axios from 'axios';
import moment from 'moment'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


const AppointmentModal = ({ modalIsOpen, afterOpenModal, closeModal, subject, date }) => {
    console.log(date);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.date = date;
        data.service = subject;
        data.created = new Date()
        console.log(data)
        axios.post('http://localhost:5000/addAppointment', data)
        .then(sucess => {
           if(sucess){
            reset()
            closeModal();
            alert('appointment created sucessfully')
           }  
        })
       
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-brand text-center'>{subject}</h2>
                <p className="text-secondary text-center"><small>On {date}</small></p>
                <form className='p-md-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input type="text" className='p-2  form-control' placeholder='Name' {...register("name", { required: true })} />
                    </div>
                    <div className="mb-3">
                        <input type='email' className='p-2 form-control' placeholder='Email' {...register("email", { required: true })} />
                    </div>
                    <div className="mb-3">
                        <input type="number" className='p-2 form-control' placeholder='Phone' {...register("phone", { required: true })} />
                    </div>
                    <div className="input-group mb-3">
                        <select className='ml-3 form-select p-2 ' {...register("gender")}>
                            <option selected>Gender...</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                        <input  className='form-control p-2 ' type="number" placeholder='age' {...register("age", {required: true})} />
                        <input className='ml-3 form-control p-2 ' type="number" placeholder='weight' {...register("weight", {required: true})} />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='d-flex justify-content-end'>
                        <button className="btn-brand text-lowercase" type='submit'>Send</button>
                    </div>
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentModal;