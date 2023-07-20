import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
        <Meta title="Sign Up"/>
        <BreadCrumb title="Sign Up"/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Sign Up</h3>
                        <form action="" className='d-flex flex-column gap-30'>
                            <div>
                                <input type="text" name='name' className="form-control " placeholder='Name' />
                            </div>
                            <div>
                                <input type="email" name='email' className="form-control " placeholder='Email' />
                            </div>
                            <div>
                                <input type="tel" name='phone' className="form-control " placeholder='Phone' />
                            </div>
                            <div className='mt-1'>
                                <input type="password" name='password' className="form-control " placeholder='Password' />
                            </div>
                            <div>
                                <div className="d-flex mt-3 justify-content-center flex-column gap-15 align-items-center">
                                    <button className="button border-0" type="submit">Sign Up</button>
                                    <Link to="/login">Cancel</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;