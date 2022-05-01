import React from 'react';

const TestimonialCard = ({card}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-text text-secondary">{card.review}</p>
                    <div className="card-footer text-secondary d-flex align-items-center">
                        <div className="img mx-3">
                        <img style={{height:'100px',width:'100px',borderRadius:'50%'}}  src={card.img} alt="" />
                        </div>
                        <div className="address">
                            <h5 className='text-primary'>{card.name}</h5>
                            <h6>{card.location}</h6>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;