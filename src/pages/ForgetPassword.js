import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';


const ForgetPassword = () => {
    return (
        <>
            <Meta title="Compare product" />
            <BreadCrumb title="Compare product" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset your password</h3>
                            <p className="text-center mt-2 mb-4">We will send you an email to reset your password</p>
                            <form action="" className='d-flex flex-column gap-30'>
                                <div>
                                    <input type="email" name='email' className="form-control " placeholder='Email' />
                                </div>
                               
                                    <div className="d-flex mt-2 justify-content-center flex-column gap-15 align-items-center">
                                        <button className="button border-0" type="submit">Submit</button>
                                        <Link to="/login">Cancel</Link>
                                    </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;