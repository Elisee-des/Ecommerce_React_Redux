import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="image product"
                  />
                </div>
                <div className="w-75">
                  <h5 className="title">title</h5>
                  <p className="color">color</p>
                  <p className="size">size</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 mb-2 d-flex align-items-center gap-15">
                <div className="">
                  <input
                    type="number"
                    min={1}
                    max={10}
                    name=""
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="">
                  <RiDeleteBin6Line className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4"></div>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    src="images/tab1.jpg"
                    className="img-fluid"
                    alt="image product"
                  />
                </div>
                <div className="w-75">
                  <h5 className="title">title</h5>
                  <p className="color">color</p>
                  <p className="size">size</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 200</h5>
              </div>
              <div className="cart-col-3 mb-2 d-flex align-items-center gap-15">
                <div className="">
                  <input
                    type="number"
                    min={1}
                    max={10}
                    name=""
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="">
                  <RiDeleteBin6Line className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4"></div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link className="button" to="/products">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $ 1000</h4>
                  <p>Taxes and Shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
