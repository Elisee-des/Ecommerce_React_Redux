import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineMail, HiOutlineHome, HiPhoneIncoming, HiInformationCircle } from "react-icons/hi";

import Meta from "../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31183.59900966981!2d-1.5618370255336622!3d12.319160678100934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e9661663853d3%3A0x61fafb9165dda43e!2sPharmacie%20Jober!5e0!3m2!1sfr!2sbf!4v1689777452317!5m2!1sfr!2sbf"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="clo-12 mt-5">
                <div className="contact-inner-wrapper d-flex py-5 justify-content-between">
                    <div>
                        <h3 className="contact-title">Contact</h3>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input type="text" className="form-control" name="name" placeholder="Name" />
                            </div>
                            <div>
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="tel" className="form-control" name="phone" placeholder="Mobile Number" />
                            </div>
                            <div>
                                <textarea className="form-control" name="comment" placeholder="Comments" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div>
                                <button className="button border-0">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h3 className="contact-title">Get in touch with us</h3>
                        <div>
                            <ul className="ps-0">
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <HiOutlineHome className="fs-5" />
                                    <address className="mb-0">
                                        Adress: Pissy rue 245
                                    </address>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <HiPhoneIncoming className="fs-5" />
                                    <a href="">+226 054876523</a>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <HiOutlineMail className="fs-5" />
                                    <a href="">esabidani@gmail.com</a>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <HiInformationCircle className="fs-5" />
                                    <p className="mb-0">Lundi - vendredi 8h 17h</p>
                                </li>
                            </ul>
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

export default Contact;
