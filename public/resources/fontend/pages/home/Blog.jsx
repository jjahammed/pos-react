import React from 'react'
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="grocino-heading">
            <h4>Latest Topic</h4>
            <h2 className="heading_text">Food, Vegetables, Blogs</h2> 
          </div>
        </div>
        <div className="row">
          <div className="review-holder">
            <div id="grocino-blogs2" className="owl-carousel grocino-owl row">
              <div className="item">
                <div className="blog-inner">
                  <a href="blog-detail.html">
                    <div className="blog-imgholder">
                      <img src="/resources/fontend/assets/img/home/blog-1.png" className="img-fluid" alt="Blog image" />
                    </div>
                  </a>
                  <div className="blog-content">
                    <div className="blog-time"> 
                      <i className="uil uil-user" />Admin
                      <span className="badge badge-success">Fruits</span>
                      <span className="pull-right"> 27/8/201 </span>
                    </div> 
                    <h4 className="blog-title"> New Fruit Arrive for Special Protien and Iron </h4>
                    <p className="blog-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <a href="blog-detail.html" className="btn read-moreblog"> Read More <i className="fa fa-long-arrow-right" /> </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog-inner">
                  <a href="blog-detail.html">
                    <div className="blog-imgholder">
                      <img src="/resources/fontend/assets/img/home/blog-2.png" className="img-fluid" alt="Blog image" />
                    </div>
                  </a>
                  <div className="blog-content">
                    <div className="blog-time"> 
                      <i className="uil uil-user" />Admin
                      <span className="badge badge-success">Fruits</span>
                      <span className="pull-right"> 27/8/201 </span>
                    </div> 
                    <h4 className="blog-title"> New Fruit Arrive for Special Protien and Iron </h4>
                    <p className="blog-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <a href="blog-detail.html" className="btn read-moreblog"> Read More <i className="fa fa-long-arrow-right" /> </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog-inner">
                  <a href="blog-detail.html">
                    <div className="blog-imgholder">
                      <img src="/resources/fontend/assets/img/home/blog-3.png" className="img-fluid" alt="Blog image" />
                    </div>
                  </a>
                  <div className="blog-content">
                    <div className="blog-time"> 
                      <i className="uil uil-user" />Admin
                      <span className="badge badge-success">Fruits</span>
                      <span className="pull-right"> 27/8/201 </span>
                    </div> 
                    <h4 className="blog-title"> New Fruit Arrive for Special Protien and Iron </h4>
                    <p className="blog-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <a href="blog-detail.html" className="btn read-moreblog"> Read More <i className="fa fa-long-arrow-right" /> </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog-inner">
                  <a href="blog-detail.html">
                    <div className="blog-imgholder">
                      <img src="/resources/fontend/assets/img/home/blog-2.png" className="img-fluid" alt="Blog image" />
                    </div>
                  </a>
                  <div className="blog-content">
                    <div className="blog-time"> 
                      <i className="uil uil-user" />Admin
                      <span className="badge badge-success">Fruits</span>
                      <span className="pull-right"> 27/8/201 </span>
                    </div> 
                    <h4 className="blog-title"> New Fruit Arrive for Special Protien and Iron </h4>
                    <p className="blog-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <a href="blog-detail.html" className="btn read-moreblog"> Read More <i className="fa fa-long-arrow-right" /> </a>
                  </div>
                </div>
              </div>
            </div>	 
          </div>     	
        </div>
      </div>
  )
}

export default Blog