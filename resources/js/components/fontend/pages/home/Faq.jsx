import React from 'react'
import {Link} from 'react-router-dom'

const Faq = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="why-slider">
          <div className="why-sliderinner">
            <div id="grocino-whyslider" className="owl-carousel grocino-owl">
              <div className="item">
                <div className="img-product">
                  <a href="#">
                    <img src="/resources/fontend/img/assets/whygr1.png" width={470} height={324} alt="Image" />
                  </a>
                </div>
                <h2 className="product-creative-title">
                  <a href="product-detail.html"> Bottle Milk</a> 
                </h2>
                <div className="product-creative-price-wrap">
                  <div className="product-creative-price product-creative-price-old">$20.00</div>
                  <div className="product-creative-price">$15.00</div>
                </div>
              </div>
              <div className="item">
                <div className="img-product">
                  <a href="#">
                    <img src="/resources/fontend/assets/img/whygr2.png" width={470} height={324} alt="Image" />
                  </a>
                </div>
                <h2 className="product-creative-title">
                  <a href="product-detail.html">  Bottle Milk</a> 
                </h2>
                <div className="product-creative-price-wrap">
                  <div className="product-creative-price product-creative-price-old">$20.00</div>
                  <div className="product-creative-price">$15.00</div>
                </div> 
              </div>
              <div className="item">
                <div className="img-product">
                  <a href="#">
                    <img src="/resources/fontend/assets/img/whygr3.png" width={470} height={324} alt="Image" />
                  </a>
                </div>
                <h2 className="product-creative-title">
                  <a href="product-detail.html">  Bottle Milk </a> 
                </h2>
                <div className="product-creative-price-wrap">
                  <div className="product-creative-price product-creative-price-old">$20.00</div>
                  <div className="product-creative-price">$15.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="why-sliderright home-pages">
          <h2 className="faq-title"> Why Grocino product? </h2>
          <div className="faq-container">
            <div className="accordion" id="faqExample">
              <div className="card mb-3">
                <div className="card-header p-1" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <i className="uil uil-toggle-off" /> What is online marketing?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#faqExample">
                  <div className="card-body">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has of Lorem Ipsum
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header p-1" id="headingseven">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="headingseven">
                      <i className="uil uil-toggle-off" /> What is delivery method?
                    </button>
                  </h5>
                </div>
                <div id="collapsefour" className="collapse" aria-labelledby="headingseven" data-parent="#faqExample">
                  <div className="card-body">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header p-1" id="headingsix">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="headingsix">
                      <i className="uil uil-toggle-off" /> How to online pay?
                    </button>
                  </h5>
                </div>
                <div id="collapsefive" className="collapse" aria-labelledby="headingsix" data-parent="#faqExample">
                  <div className="card-body">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header p-1" id="headingeight">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="headingeight">
                      <i className="uil uil-toggle-off" /> what is payment method?
                    </button>
                  </h5>
                </div>
                <div id="collapsesix" className="collapse" aria-labelledby="headingeight" data-parent="#faqExample">
                  <div className="card-body">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header p-1" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <i className="uil uil-toggle-off" />
                      How does this work?
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#faqExample">
                  <div className="card-body">
                    <b>Answer:</b> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

export default Faq