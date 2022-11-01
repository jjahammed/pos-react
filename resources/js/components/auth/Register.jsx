import React from 'react'
import {Link} from 'react-router-dom'

import '../backend/assets/css/themify.css'
import '../backend/assets/css/bootstrap.css'
import '../backend/assets/css/style.css'
import '../backend/assets/css/responsive.css'


import '../backend/assets/js/jquery-3.2.1.min.js'
import '../backend/assets/js/bootstrap/bootstrap.bundle.min.js'
import '../backend/assets/js/script.js'

const Register = () => {
  return (
    <div className="page-wrapper">
    <div className="container-fluid">
        {/*sign up page start*/}
        <div className="authentication-main">
        <div className="row">
            <div className="col-md-4 p-0">
            <div className="auth-innerleft">
                <div className="text-center">
                    <Link to='/'>
                        <img src="/resources/backend/assets/images/logo-auth.gif" className="logo-login" />
                    </Link>
                <hr />
                <div className="social-media">
                    <ul className="list-inline">
                    <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-google-plus" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-instagram" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-rss" aria-hidden="true" /></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-8 p-0">
            <div className="auth-innerright">
                <div className="authentication-box">
                <h3 className="text-center">NEW USER</h3>
                <h6 className="text-center">Enter your Username and Password For Login or Signup</h6>
                <div className="card mt-4 p-4">
                    <form className="theme-form">
                    <div className="row g-2">
                        <div className="col-md-6">
                        <div className="mb-3">
                            <label className="col-form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="John" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <label className="col-form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Deo" />
                        </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">User Name</label>
                        <input type="text" className="form-control" placeholder="John Deo" />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Password</label>
                        <input type="password" className="form-control" placeholder="**********" />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">BOD</label>
                        <div className="row g-2">
                        <div className="col-sm-4">
                            <select className="form-select mb-1">
                            <option>DD</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <select className="form-select mb-1">
                            <option>MM</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <select className="form-select mb-1">
                            <option>YYYY</option>
                            <option>1990</option>
                            <option>1991</option>
                            <option>1992</option>
                            <option>1993</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-lg-3 col-md-4">
                        <button type="submit" className="btn btn-secondary">Sign Up</button>
                        </div>
                        <div className="col-md-8">
                        <div className="text-start mt-2 m-l-20">
                            Are you already user?&nbsp;&nbsp;<Link to="/login" className="btn-link text-capitalize">Login</Link>
                        </div>
                        </div>
                    </div>
                    <div className="form-divider" />
                    <div className="social mt-3">
                        <div className="row  g-2">
                        <div className="col-sm-4">
                            <button className="btn social-btn btn-fb mb-2">Facebook</button>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn social-btn btn-twitter mb-2">Twitter</button>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn social-btn btn-google mb-2">Google +</button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/*sign up page Ends*/}
    </div>
</div>

  )
}

export default Register