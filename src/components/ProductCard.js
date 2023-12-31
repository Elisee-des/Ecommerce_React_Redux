import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import Meta from '../components/Meta';

const ProductCard = (props) => {

  const {grid} = props;
  let location = useLocation();
  return (
    <>
    <div className={`${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wish image" />
          </div>
        <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={"3"}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Accusantium perferendis natus dolore vel fugiat laborum 
             officiis ad, deserunt veniam suscipit at perspiciatis 
             voluptate expedita repudiandae soluta, repellat delectus
             pariatur nesciunt.</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="">
              <img src="images/prodcompare.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/view.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wish image" />
          </div>
        <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={"3"}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Accusantium perferendis natus dolore vel fugiat laborum 
             officiis ad, deserunt veniam suscipit at perspiciatis 
             voluptate expedita repudiandae soluta, repellat delectus
             pariatur nesciunt.</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="">
              <img src="images/prodcompare.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/view.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wish image" />
          </div>
        <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={"3"}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Accusantium perferendis natus dolore vel fugiat laborum 
             officiis ad, deserunt veniam suscipit at perspiciatis 
             voluptate expedita repudiandae soluta, repellat delectus
             pariatur nesciunt.</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="">
              <img src="images/prodcompare.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/view.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wish image" />
          </div>
        <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={"3"}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Accusantium perferendis natus dolore vel fugiat laborum 
             officiis ad, deserunt veniam suscipit at perspiciatis 
             voluptate expedita repudiandae soluta, repellat delectus
             pariatur nesciunt...</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="">
              <img src="images/prodcompare.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/view.svg" alt="addcar" />
            </Link>
            <Link to="">
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>

    </>
  );
};

export default ProductCard;
