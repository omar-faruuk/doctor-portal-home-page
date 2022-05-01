import React from 'react';

const BlogsCard = ({card}) => {
    return (
        <div className="col-md-4">
            <div className="card p-4 text-left">
                <div className="d-flex align-items-center">
                    <img style={{height:'100px',width:'100px',borderRadius:'50%'}} className='mx-4' src={card.img} alt="" />
                    <div>
                        <h5>{card.name}</h5>
                        <h6 className='text-secondary'>{card.date}</h6>
                    </div>
                </div>
                <div className='card-title mt-3'>
                    <h3 className='fs-4'>{card.title}</h3>
                </div>
                <div className="card-body">
                    <p className="card-text text-secondary">{card.article}</p>
                   </div>
            </div>
        </div>
    );
};

export default BlogsCard;