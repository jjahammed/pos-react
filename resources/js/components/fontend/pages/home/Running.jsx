import React from 'react'
import {Link} from 'react-router-dom'

const Running = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="grocino-heading">
            <h4>New Offers Running</h4>
            <div className="heading-dots">
              <h2 className="heading_text"><span className="heading_circle">Offer Running Product</span> </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="grocino-running" className="owl-carousel grocino-owl">
            <div className="item">
              <div className="product-holder">
                <div className="running-body">
                  <h4>Organic Product</h4>
                  <h2>Cow Milk</h2>
                  <a href="product-detail.html" className="btn btn-success btn-shopnow">
                    Shop Now <img src="/resources/fontend/assets/img/home/right-arrow.png" className="right-arrow" alt="Arrow Right" />
                  </a>
                </div>
                <a href="product-detail.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/milk.png" alt="Cow Milk" /> 
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <div className="running-body">
                  <h4>Organic Product</h4>
                  <h2>Fresh Curd</h2>
                  <a href="product-detail.html" className="btn btn-success btn-shopnow">
                    Shop Now <img src="/resources/fontend/assets/img/home/right-arrow.png" className="right-arrow" alt="Arrow Right" />
                  </a>
                </div>
                <a href="product-detail.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/curd.png" alt="Fresh curd" /> 
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <div className="running-body">
                  <h4>Organic Product</h4>
                  <h2>Healthy Meal</h2>
                  <a href="product-detail.html" className="btn btn-success btn-shopnow">
                    Shop Now <img src="/resources/fontend/assets/img/home/right-arrow.png" className="right-arrow" alt="Arrow Right" />
                  </a>
                </div>
                <a href="product-detail.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/p-4.png" alt="Healthy Meal" />  
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <div className="running-body">
                  <h4>Organic Product</h4>
                  <h2>Fresh Curd</h2>
                  <a href="product-detail.html" className="btn btn-success btn-shopnow">
                    Shop Now <img src="/resources/fontend/assets/img/home/right-arrow.png" className="right-arrow" alt="Arrow Right" />
                  </a>
                </div>
                <a href="product-detail.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/curd.png" alt="Fresh curd" /> 
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
  )
}

export default Running