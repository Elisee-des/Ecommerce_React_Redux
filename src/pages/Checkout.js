import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7 checkout-wrapper-1 p-3 bg-white">
              <div className="checkout-left-data">
                <h3 className="website-name">Dev Corner</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp;
                    <li class="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp;
                    <li class="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp;
                    <li class="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total-price">Contact Information</h4>
                <p className="total-title user-detail">
                  Sabidani ELisee (esabidani@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 mb-3 justify-content-between"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Fist Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Appartement, Suit, etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex mb-2 gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative ">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="images/watch.jpg"
                        alt="product image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="">
                      <h5 className="total-title">Lenovo</h5>
                      <p className="total-title">s / Leon</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex mb-2 gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative ">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="images/watch.jpg"
                        alt="product image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="">
                      <h5 className="total-title">Lenovo</h5>
                      <p className="total-title">s / Leon</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <p className="total-title mb-0">SubTotal</p>
                  <p className="total-price mb-0">$ 1000</p>
                </div>
                <div className="d-flex justify-content-between  align-items-center">
                  <p className="total-title">Shipping</p>
                  <p className="total-price">$ 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom">
                <h4 className="total-title">Total</h4>
                <p className="total-price">$ 1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
