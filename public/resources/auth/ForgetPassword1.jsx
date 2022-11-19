import React from 'react'
import {Link} from 'react-router-dom'

import '../backend/assets/css/themify.css'
import '../backend/assets/css/bootstrap.css'
import '../backend/assets/css/style.css'
import '../backend/assets/css/responsive.css'


import '../backend/assets/js/jquery-3.2.1.min.js'
import '../backend/assets/js/bootstrap/bootstrap.bundle.min.js'
import '../backend/assets/js/script.js'

const ForgetPassword = () => {
  return (
    <div className="page-wrapper">
  <div className="container-fluid">
    <div className="authentication-main">
      <div className="row">
        <div className="col-md-4 p-0">
          <div className="auth-innerleft">
            <div className="text-center">
              <Link to='/'>
              <img src="/resources/backend/assets/images/key.png" className="img-fluid security-icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-8 p-0">
          <div className="auth-innerright">
            <div className="reset-password-box">
              <h3>RESET YOUR PASSWORD</h3>
              <div className="card mt-4  mb-0">
                <form className="theme-form">
                  <div className="mb-3">
                    <label className="col-form-label">Enter Your Mobile Number</label>
                    <div className="row g-2">
                      <div className="col-md-2">
                        <input type="text" className="form-control digits mb-1" defaultValue="+ 91" />
                      </div>
                      <div className="col-md-7 col-xl-8">
                        <input type="tel" className="form-control digits mb-1" defaultValue="000-000-0000" />
                      </div>
                      <div className="col-md-2">
                        <button type="submit" className="btn btn-primary m-0">Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 mb-4"><span className="reset-password-link">If don't receive OTP?&nbsp;&nbsp;<Link href="#" className="btn-link text-danger">Resend</Link></span></div>
                  <div className="row mt-3">
                        <div className="col-md-6">
                            <Link className='pull-right text-primary' to='/login'>already a member</Link>
                        </div>
                        <div className="col-md-6">
                            <Link className='text-primary' to='/register'>create new account</Link>
                        </div>
                    </div>
                  {/* <div className="mb-3 rounded p-4 opt-box">
                    <label className="col-form-label pt-0">Enter OTP</label>
                    <div className="row g-2">
                      <div className="col">
                        <input type="text" className="form-control digits text-center opt-text" defaultValue='00' maxLength='2' />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control digits text-center opt-text" defaultValue='00' maxLength='2' />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control digits text-center opt-text" defaultValue='00' maxLength='2' />
                      </div>
                    </div>
                  </div> */}
                  {/* <h6 className="f-14 mt-4 mb-3">CREATE YOUR PASSWORD</h6>
                  <div className="mb-3">
                    <label className="col-form-label">New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Retype Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="row g-2 mb-2">
                    <div className="col-md-2">
                      <button type="submit" className="btn btn-primary">Done</button>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Reset Password page end*/}
  </div>
</div>

  )
}

export default ForgetPassword