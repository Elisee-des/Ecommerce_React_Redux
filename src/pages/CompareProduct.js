import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from '../components/Color';


const CompareProduct = () => {
    return (
        <>
            <Meta title="Compare product" />
            <BreadCrumb title="Compare product" />
            <div className="compar-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="" className="position-absolute cross imag-fluid" />
                                <div className="product-product-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 1 1GB ROM 7 inch  With Wifi+3 Tablet
                                    </h5>
                                    <h6 className="price mb-3">$ 100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availabliy:</h5>
                                            <p>In stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="" className="position-absolute cross imag-fluid" />
                                <div className="product-product-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 1 1GB ROM 7 inch  With Wifi+3 Tablet
                                    </h5>
                                    <h6 className="price mb-3">$ 100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availabliy:</h5>
                                            <p>In stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProduct;