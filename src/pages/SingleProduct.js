import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import {TbGitCompare} from "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex gap-15 flex-wrap">
                <div><img className="img-fluid" src="https://m.media-amazon.com/images/I/81+d6eSA0eL._AC_UY1000_.jpg" alt="" /></div>
                <div><img className="img-fluid" src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" alt="" /></div>
                <div><img className="img-fluid" src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80" alt="" /></div>
                <div><img className="img-fluid" src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /></div>
              </div>
            </div>
            <div className="col-6">
                <div className="main-product-details">
                    <div className="border-bottom">
                        <h3 className="title">Kids Headphone bulk 10 pack Multi Colored for Students</h3>
                    </div>
                    <div className="border-bottom py-3">
                        <p className="price">$ 100</p>
                        <div className="d-flex align-items-center gap-10">
                        <ReactStars
                        count={5}
                        size={24}
                        value={"3"}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        <p className="mb-0 t-review">(2 reviews)</p>
                        </div>
                        <a href="#review" className="review-btn">Write a review</a>
                    </div>
                    <div className="border-bottom">
                        <div className="d-flex align-items-center gap-10">
                            <h3 className="product-heading my-2">Type :</h3> <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <h3 className="product-heading my-2">Brand :</h3> <p className="product-data">Havels</p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <h3 className="product-heading my-2">Category :</h3> <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <h3 className="product-heading my-2">Tags :</h3> <p className="product-data">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nemo?
                            </p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <h3 className="product-heading my-2">Availablity :</h3> <p className="product-data">In stock</p>
                        </div>
                        <div className="d-flex flex-column gap-10 mt-2 mb-2">
                            <h3 className="product-heading">Size :</h3>
                            <div className="d-flex flex-wrap gap-15">
                                <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-10 mt-2 mb-2">
                            <h3 className="product-heading my-2">Color :</h3>
                            <Color />
                        </div>
                        <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-2">
                            <h3 className="product-heading my-2">Quantity :</h3>
                            <div className="">
                                <input type="number" name="" id="" style={{ width:"70px" }} min={1} max={10} className="form-control" />
                            </div>
                            <div className="d-flex align-items-center ms-5 gap-30">
                                <button className="button border-0" type="submit">Add to cart</button>
                                <button to="/sign-up" className='button signup'>But it now</button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                            <div>
                                <a href=""><TbGitCompare className="fs-5 me-2" /> Add to compare</a>
                            </div>
                            <div>
                                <a href=""><AiOutlineHeart className="fs-5 me-2" /> Add to wishlist</a>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-10 my-3">
                            <h3 className="product-heading my-2">Shipping & Return :</h3>
                             <p className="product-data">Lorem ipsum dolor sit
                              amet consectetur adipisicing elit. <b>Nisi, voluptatem.</b></p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <h3 className="product-heading my-3">Copy Product link :</h3>
                             <a href="javascript:void(0);"
                             onClick={() => {
                              copyToClipboard(
                                "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                              )
                             }}
                             >Copy product link</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 single-description">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  dolore, cupiditate minus, ad tempore similique temporibus at
                  eius deserunt, corrupti incidunt error atque cumque quas
                  labore doloribus iusto a provident!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={"3"}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="mt-4">
                      <a
                        href=""
                        className="text-dark text-decoration-underline"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>

                <div  className="review-form py-5">
                  <h4>Write a reviews</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={"3"}
                        edit={true}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                    <div>
                      <textarea
                        className="form-control"
                        name="comment"
                        placeholder="Comments"
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={"3"}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis dolor non nihil consequatur iusto consequuntur
                    adipisci. Sit alias excepturi illo sed animi harum sapiente
                    placeat laboriosam, odio maiores reprehenderit dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
