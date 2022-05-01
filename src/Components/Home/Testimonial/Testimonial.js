import React from 'react';
import TestimonialCard from './TestimonialCard/TestimonialCard';


const cardData = [
    {
       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, earum! Iure, quas tempore sit explicabo repellendus dolor asperiores consequatur soluta nostrum quos beatae minima corrupti molestiae nesciunt, velit praesentium nemo id quidem? Illum, commodi quam inventore nostrum veritatis, praesentium a deserunt repellendus, architecto vel doloribus deleniti. Necessitatibus aliquam molestiae eum.',
       img: 'https://randomuser.me/api/portraits/men/15.jpg',
       name: 'winson herry',
       location: 'california' 
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, earum! Iure, quas tempore sit explicabo repellendus dolor asperiores consequatur soluta nostrum quos beatae minima corrupti molestiae nesciunt, velit praesentium nemo id quidem? Illum, commodi quam inventore nostrum veritatis, praesentium a deserunt repellendus, architecto vel doloribus deleniti. Necessitatibus aliquam molestiae eum.',
        img: 'https://randomuser.me/api/portraits/men/16.jpg',
        name: 'winson herry',
        location: 'california' 
     },
     {
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, earum! Iure, quas tempore sit explicabo repellendus dolor asperiores consequatur soluta nostrum quos beatae minima corrupti molestiae nesciunt, velit praesentium nemo id quidem? Illum, commodi quam inventore nostrum veritatis, praesentium a deserunt repellendus, architecto vel doloribus deleniti. Necessitatibus aliquam molestiae eum.',
        img: 'https://randomuser.me/api/portraits/men/18.jpg',
        name: 'winson herry',
        location: 'california' 
     }
]

const Testimonial = () => {
    return (
        <section className='mt-5'>
            <div className="container">
                <div className='text-center mb-5'>
                <h4 className='text-primary fw-bold'>TESTIMONIAL</h4>
                <h2>What's Our patients says</h2>
                </div>
                <div className="row mt-5">
                    {
                        cardData.map(card => <TestimonialCard card={card}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;