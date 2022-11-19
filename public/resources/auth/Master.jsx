import React from 'react'
import {Link,Outlet} from 'react-router-dom'

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
                <Outlet />
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