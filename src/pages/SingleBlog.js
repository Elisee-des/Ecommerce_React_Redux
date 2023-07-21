import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";


const SingleBlog = () => {
    return (
        <>
            <Meta title="Dynamique Blog Name"/>
            <BreadCrumb title="Dynamique Blog Name"/> 
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Shop by Categories</h3>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'><HiArrowNarrowLeft />Go back to Blogs</Link>
                                <h3>A beautiful sunday morning renaissance</h3>
                                <img src="images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
                                <p>Tongue short ribs jowl brisket. Tail pork belly
                                    fatback pork loin bacon meatloaf shankle picanha.
                                    Spare ribs meatloaf ham landjaeger turducken filet
                                    mignon boudin alcatra capicola prosciutto kielbasa
                                    short ribs shank beef andouille.ground round andouille
                                    fatback shank kielbasa, ball tip tri-tip salami chuck
                                    hamburger chicken pig.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;