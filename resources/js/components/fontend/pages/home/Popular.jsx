import React from 'react'
import {Link} from 'react-router-dom'

const Popular = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="grocino-heading">
        <h4>For Your daily Routine</h4>				
        <div className="heading-dots">
          <h2 className="heading_text"><span className="heading_circle">Popular Search Product </span> </h2>
        </div>
      </div>
    </div>	  
    <div className="row">
      <div id="grocino-carousel" className="owl-carousel grocino-owl">
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html">  
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/apple.png" className="img-fluid" alt="Product image" /> 
              </div> 
            </a> 
            <div className="p-content">
              <div className="p-cate"> Breakfast Meal Snacks</div> 
              <div className="p-title"> <a href="product-detail.html"> Apple </a></div>
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html">    
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/milk.png" className="img-fluid" alt="Product image" /> 
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html">    
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/tomato.png" className="img-fluid" alt="Product image" /> 
              </div> 
            </a>
            <div className="p-content">
              <div className="p-cate"> Breakfast Meal Snacks</div>
              <div className="p-title"> <a href="product-detail.html"> Tomato </a></div>
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html"> 
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/curd.png" className="img-fluid" alt="Product image" /> 
              </div>
            </a>
            <div className="p-content">
              <div className="p-cate"> Breakfast Meal Snacks</div>
              <div className="p-title"> <a href="product-detail.html"> Cheese </a></div>
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html">  
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/apple.png" className="img-fluid" alt="Product image" /> 
              </div> 
            </a> 
            <div className="p-content">
              <div className="p-cate"> Breakfast Meal Snacks</div> 
              <div className="p-title"> <a href="product-detail.html"> Apple </a></div>
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html">    
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/milk.png" className="img-fluid" alt="Product image" /> 
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html">    
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/tomato.png" className="img-fluid" alt="Product image" /> 
              </div> 
            </a>
            <div className="p-content">
              <div className="p-cate"> Breakfast Meal Snacks</div>
              <div className="p-title"> <a href="product-detail.html"> Tomato </a></div>
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
        <div className="item">
          <div className="product-holder">
            <a href="product-detail.html"> 
              <div className="img-product">
                <img src="/resources/fontend/assets/img/home/curd.png" className="img-fluid" alt="Product image" /> 
              </div>
            </a>
            <div className="p-content">
              <div className="p-cate"> Breakfast Meal Snacks</div>
              <div className="p-title"> <a href="product-detail.html"> Cheese </a></div>
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
  )
}

export default Popular