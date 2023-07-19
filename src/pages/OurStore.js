import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStorie = () => {

    const [gird, setGird] = useState(4);

    return (
        <>
            <Meta title="Our store"/>
            <BreadCrumb title="Our store"/>
            <div className="store-wrapper home-wrapper-2 py-5">
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
                            <div className='filter-card mb-2'>
                                <h3 className="filter-title">Filter by</h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" name="" id="" />
                                            <label htmlFor="" className="form-check-label">In stock (1)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" name="" id="" />
                                            <label htmlFor="" className="form-check-label">Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                        <label htmlfor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput2" placeholder="To" />
                                        <label htmlfor="floatingInput2">To</label>
                                    </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                    <div className="form-check">
                                        <input className='form-check-input' type="checkbox" value="" name="" id="" />
                                        <label htmlFor="" className="form-check-label">S (1)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className='form-check-input' type="checkbox" value="" name="" id="color-1" />
                                        <label htmlFor="color-1" className="form-check-label">S (1)</label>
                                    </div>

                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flew flex-wrap align-items-center gap 10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className="random-product mb-5 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone bulk 10 pack multi color for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={"3"}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className="random-product d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone bulk 10 pack multi color for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={"3"}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-gird mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>Sort by:</p>
                                        <select name="" id="" className="form-control form-select">
                                            <option value="">Featured</option>
                                            <option value="">Best Selling</option>
                                            <option value="">Alphabeticaly A-Z</option>
                                            <option value="">Alphabeticaly Z-A</option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproduct mb-0">21 products</p> 
                                        <div className="gird d-flex gap-10 align-items-center">
                                            <img onClick={() => {setGird(3)}} src="images/gr4.svg" alt="" className="img-fluid block" />
                                            <img onClick={() => {setGird(4)}} src="images/gr3.svg" alt="" className="img-fluid block" />
                                            <img onClick={() => {setGird(6)}} src="images/gr2.svg" alt="" className="img-fluid block" />
                                            <img onClick={() => {setGird(12)}} src="images/gr.svg" alt="" className="img-fluid block" />
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={gird} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStorie;