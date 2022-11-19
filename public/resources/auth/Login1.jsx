import React from 'react'
import {Link} from 'react-router-dom'

import '../backend/assets/css/themify.css'
import '../backend/assets/css/bootstrap.css'
import '../backend/assets/css/style.css'
import '../backend/assets/css/responsive.css'


import '../backend/assets/js/jquery-3.2.1.min.js'
import '../backend/assets/js/bootstrap/bootstrap.bundle.min.js'
import '../backend/assets/js/script.js'


const Login = () => {
  return (
    <div className="page-wrapper">
    <div className="container-fluid">
        {/*login page start*/}
        <div className="authentication-main">
        <div className="row">
            <div className="col-md-4 p-0">
            <div className="auth-innerleft">
                <div className="text-center">
                    <Link to='/'>
                        <img src="/resources/backend/assets/images/logo-login.png" className="logo-login" />
                    </Link>
                <hr />
                <div className="social-media">
                    <ul className="list-inline">
                    <li className="list-inline-item"><i className="fa fa-facebook txt-fb" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-google-plus txt-google-plus" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-twitter txt-twitter" aria-hidden="true" /></li>
                    <li className="list-inline-item"><i className="fa fa-linkedin txt-linkedin" aria-hidden="true" /></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-8 p-0">
            <div className="auth-innerright">
                <div className="authentication-box">
                <h4>LOGIN</h4>
                <h6>Enter your Username and Password For Login or Signup</h6>
                <div className="card mt-4 p-4 mb-0">
                    <form className="theme-form">
                    <div className="mb-3">
                        <label className="col-form-label pt-0">Your Name</label>
                        <input type="text" className="form-control form-control-lg" required />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Password</label>
                        <input type="password" className="form-control form-control-lg" required />
                    </div>
                    <div className="form-check checkbox">
                        <input className="form-check-input" id="checkbox1" type="checkbox" />
                        <label className="form-check-label" htmlFor="checkbox1">Remember me</label>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                        <button type="submit" className="btn btn-secondary">LOGIN</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <Link className='pull-right text-primary' to='/register'>create new account</Link>
                        </div>
                        <div className="col-md-6">
                            <Link className='text-left text-primary' to='/forget-password'>forget password</Link>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/*login page end*/}
    </div>
</div>

  )
}

export default Login