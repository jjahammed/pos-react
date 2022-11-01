import React from 'react'
import {Link} from 'react-router-dom'

const Organic = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-12">
        <div className="banner21">
          <img src="/resources/fontend/assets/img/home/banner-left.png" alt="Image" />
        </div>
        <div className="product-creative-title">
          <h3>FRESH FOOD</h3>
          <h2>100% ORGANIC</h2>
          <a href="product-detail.html" className="btn btn-success btn-shopnow"> 
            Shop Now <img src="/resources/fontend/assets/img/home/right-arrow.png" className="right-arrow" alt="Arrow Right" />
          </a> 
        </div>
      </div>
      <div className="col-xl-6 col-lg-12">
        <div className="product-areaholder popular-product p-0">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="product-holder">
                <a href="product-detail.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/flavourd-milk.png" className="img-fluid" alt="Product image" /> 
                  </div>
                </a>
                <div className="p-content">
                  <div className="p-cate"> Breakfast Meal Snacks</div>
                  <div className="p-title"> <a href="product-detail.html"> Milk </a></div>
                  <div className="p-price"> 
                    $10.00 <span className="pull-right"> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star-o"> </i> <i className="fa fa-star-o"> </i> <i className="fa fa-star-o"> </i></span>
                  </div>
                  <div className="p-buttonarea">
                    <a href="cart.html" className="btn btn-pcart"> 
                      <img src="/resources/fontend/assets/img/home/right-arrow.png" className="arrow-left" alt="Arrow Left" /> Add To Cart 
                    </a>
                    <span className="pull-right">  
                      <a href="#" className="btn-wish"><i className="uil uil-heart"> </i></a>
                      <a href="#" className="btn-wish"> <i className="uil uil-eye"> </i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="product-holder">
                <a href="product-detail.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/cold-drinks.png" className="img-fluid" alt="Product image" /> 
                  </div>
                </a>
                <div className="p-content">
                  <div className="p-cate">  Breakfast Meal Snacks</div>
                  <div className="p-title"> <a href="product-detail.html"> Drinks </a></div>
                  <div className="p-price"> 
                    $10.00 <span className="pull-right"> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star-o"> </i> <i className="fa fa-star-o"> </i> <i className="fa fa-star-o"> </i></span>
                  </div>
                  <div className="p-buttonarea">
                    <a href="cart.html" className="btn btn-pcart"> 
                      <img src="/resources/fontend/assets/img/home/right-arrow.png" className="arrow-left" alt="Arrow Left" /> Add To Cart 
                    </a>
                    <span className="pull-right">  
                      <a href="#" className="btn-wish"><i className="uil uil-heart"> </i></a>
                      <a href="#" className="btn-wish"> <i className="uil uil-eye"> </i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>	   
  </div>
  )
}

export default Organic