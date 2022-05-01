import React from 'react';
import chair from '../../../images/chair.png'
import chairBg from '../../../images/ChairBg.png'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className='row d-flex align-items-center'>
           <div className="col-md-4 offset-md-1">
               <h1>Your new smile <br />Start here.</h1>
               <p className="text-secondary">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, dolore tempore pariatur facilis adipisci veniam!
               </p>
               <button style={{background:'#1CC7C1',border:'none'}} className="btn-primary">Get appointment</button>
           </div>
           <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid" />
           </div>
        </main>
    );
};

export default HeaderMain;