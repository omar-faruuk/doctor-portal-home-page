import React from 'react';
import BlogsCard from './BlogsCard/BlogsCard';

const blogsData = [
    {
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        name: 'Dr.Rashed kabir',
        date: '24 march 2022',
        title: 'Check at least a doctor in a year for your teeth',
        article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, fuga amet culpa libero suscipit facilis.fuga amet culpa libero suscipit facilis'
    },
    {
        img: 'https://randomuser.me/api/portraits/men/13.jpg',
        name: 'Dr.caudi',
        date: '24 march 2022',
        title: '2 times of brush in a day can keep your teeth healthy',
        article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, fuga amet culpa libero suscipit facilis.fuga amet culpa libero suscipit facilis'
    },
    {
        img: 'https://randomuser.me/api/portraits/men/10.jpg',
        name: 'Dr.Jhon mitchel',
        date: '24 march 2022',
        title: 'Check at least a doctor in a year for your teeth',
        article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, fuga amet culpa libero suscipit facilis.fuga amet culpa libero suscipit facilis'
    }
]

const Blogs = () => {
    return (
        <section className='mt-5 pt-3'>
            <div className="container">
                <div className='text-center mb-5'>
                <h4 className='text-primary mb-3'>OUR BLOGS</h4>
                <h2>FROM OUR BLOGS NEWS</h2>
                </div>
                <div className="row mt-5">
                    {
                        blogsData.map(card => <BlogsCard card={card}></BlogsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;