import React from 'react'
import {Link} from 'react-router-dom'

const Facilities = () => {
  return (
    <div>
        {/* grocino-introduction2 area start here */}
    <div id="grocino-introduction2">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-4"> 
            <div className="mid-boxholder2">
              <div className="mid-boxcenter">
                <div className="service_image">
                  <img src="/resources/fontend/assets/img/home/delivery-van.png" alt="Van" />
                </div>
                <h4> Free Delivery</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4"> 
            <div className="mid-boxholder2">
              <div className="mid-boxcenter">
                <div className="service_image">
                  <img src="/resources/fontend/assets/img/home/delivery-time.png" alt="Delivery" />
                </div> 
                <h4>Fastest Delivery</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4"> 
            <div className="mid-boxholder2">
              <div className="mid-boxcenter">
                <div className="service_image">
                  <img src="/resources/fontend/assets/img/home/user-avatar.png" alt="User" />
                </div> 
                <h4> Customer Satisfaction</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sideImage"><img src="/resources/fontend/assets/img/home/side-left-img.png" alt="Image" /></div>
    </div>
    {/* grocino-introduction2 end here */}
    </div>
  )
}

export default Facilities