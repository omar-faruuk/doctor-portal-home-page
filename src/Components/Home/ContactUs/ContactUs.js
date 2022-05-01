import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className='contact-section mt-5 pt-5'>
            <div className="container  text-center">
                <h4 style={{zIndex: '2'}} className='text-success'>CONTACT US</h4>
                <h2 className='text-white'>Always connect with us</h2>
                <div style={{zIndex: '2'}}  className="row justify-content-center mt-5">
                    <div style={{zIndex: '1'}} className="col-md-8  text-center">
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Subject" />
                    <label for="floatingPassword">Subject</label>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='write message...' rows="5"></textarea>
                </div>
                <div className="btn btn-primary w-50">Submit</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;