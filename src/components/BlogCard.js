import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
            <div className='blog-card'>
                <div className="card-image">
                    <img src="images/blog-1.jpg" alt="image blog" className="img-fluid w-100" />
                </div>
                <div className="blog-content">
                    <p className="date">18 juillet 2023</p>
                    <h5 className="title">A beautiful sunday morning renaissance</h5>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Quo commodi in voluptas eius architecto mollitia.</p>
                    <Link to="/blog/:id" className="button">Read More</Link>
                </div>
            </div>
    );
};

export default BlogCard;