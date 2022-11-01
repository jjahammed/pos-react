import React from 'react'
import {Link} from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-8 col-md-10 col-sm-12 mx-auto">
            <div className="newsletter-inner">
              <div className="grocino-heading">
                <h2 className="heading_text">Subscribe Our <span>Newsletter</span></h2> 
              </div>
              <form method="post">
                <div className="position-relative">
                  <input type="email" name="email" id="e_mail" className="form-control" placeholder="Enter Your email address" required />
                  <input type="submit" className="btn btn-subscriber" defaultValue="Subscriber" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Newsletter