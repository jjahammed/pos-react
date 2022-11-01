import React from 'react'
import {Link} from 'react-router-dom'

const Special = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-5 col-lg-4 col-sm-12 col-12 my-auto"> 
        <div className="row">
          <div className="mid-boxholderright">
            <div className="mid-boxleft">
              <h2> Fast Shipping</h2>
              <p> We are available for fast shipping in every season 24X7 deliver in the world.</p>
            </div>
            <div className="mid-right">
              <div className="service_image">
                <i className="uil  image-icon uil-truck"> </i>
              </div> 
            </div>
          </div>
          <div className="clearfix" />
          <div className="holder-divider"><hr /> </div>
          <div className="mid-boxholderright">
            <div className="mid-boxleft">
              <h2>Trust Gurantee</h2>
              <p> We are available for fast shipping in every season 24X7 deliver in the world.</p>
            </div>
            <div className="mid-right">
              <div className="service_image">
                <i className="uil image-icon uil-moneybag"> </i>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-lg-4 col-sm-12 col-12"> 
        <div className="mid-imgholder">
          <div className="img-product">
            <img src="/resources/fontend/assets/img/midd-img.png" className="img-fluid" alt="Image" />
          </div>
        </div>
      </div>
      <div className="col-md-5 col-lg-4 col-sm-12 col-12 my-auto"> 
        <div className="row">
          <div className="mid-boxholderright">
            <div className="mid-right">
              <div className="service_image">
                <i className="uil image-icon uil-phone"> </i>
              </div> 
            </div>
            <div className="mid-boxleft">
              <h2> 24x7 Free Support</h2>
              <p> We are available for fast shipping in every season 24X7 deliver in the world.</p>
            </div>
          </div>
          <div className="clearfix" />
          <div className="holder-divider"><hr /></div>
          <div className="mid-boxholderright">
            <div className="mid-right">
              <div className="service_image">
                <i className="uil image-icon uil-shopping-cart-alt"> </i>
              </div> 
            </div>
            <div className="mid-boxleft">
              <h2> Daily Discounts</h2>
              <p> We are available for fast shipping in every season 24X7 deliver in the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Special