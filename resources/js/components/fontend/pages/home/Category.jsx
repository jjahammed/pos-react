import React from 'react'
import {Link} from 'react-router-dom'

const Category = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="grocino-heading">
            <h4>New product Arrive</h4>
            <div className="heading-dots">
              <h2 className="heading_text"><span className="heading_circle">Shop By Category</span> </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="grocino-category" className="owl-carousel grocino-owl">
            <div className="item">
              <div className="product-holder">
                <a href="category-sidebar.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/c-1.png" alt="Vegetables" className="img-fluid" /> 
                  </div>
                </a>
                <div className="c-content">
                  <div className="c-title"> <a href="category-sidebar.html"> Vegetables </a></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <a href="category-sidebar.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/c-2.png" alt="Rice, Flour & Gains" className="img-fluid" /> 
                  </div>
                </a>
                <div className="c-content">
                  <div className="c-title"> <a href="category-sidebar.html"> Rice, Flour &amp; Gains </a></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <a href="category-sidebar.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/c-3.png" alt="Friuts & Drinks" className="img-fluid" />  
                  </div>
                </a>
                <div className="c-content">
                  <div className="c-title"> <a href="category-sidebar.html"> Friuts &amp; Drinks </a></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <a href="category-sidebar.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/c-4.png" alt="Masala" className="img-fluid" /> 
                  </div>
                </a>
                <div className="c-content">
                  <div className="c-title"> <a href="category-sidebar.html"> Masala </a></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <a href="category-sidebar.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/c-5.png" alt="Dry Food" className="img-fluid" /> 
                  </div>
                </a>
                <div className="c-content">
                  <div className="c-title"> <a href="category-sidebar.html"> Dry Food </a></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-holder">
                <a href="category-sidebar.html"> 
                  <div className="img-product">
                    <img src="/resources/fontend/assets/img/home/c-6.png" alt="Friuts & Drinks" className="img-fluid" /> 
                  </div>
                </a>
                <div className="c-content">
                  <div className="c-title"> <a href="category-sidebar.html"> Drinks and Beverages </a></div>
                </div>
              </div>
            </div>		
          </div>
        </div>
      </div> 
  )
}

export default Category