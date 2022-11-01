import React from 'react'
import {Link} from 'react-router-dom'

const Slider = () => {
  return (
    <div id="grocino-homebanner">
      {/* Slider main container */}
      <div className="swiper-container">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide slide-1">
            <div className="container">
              <div className="slider-container">
                <h2 className="slider-sub-title">Fresh Product</h2>
                <div className="animated-area">
                  <h1 className="slider-title">Directly to your door step</h1>
                  <div className="slider-form">
                    <form method="post">
                      <div className="input-group has-search">
                        {/* <span class="fa fa-search form-control-feedback"></span> */}
                        <input type="search" className="form-control" placeholder="Search your product" />
                        <div className="input-group-append">
                          <button className="btn btn-orange" type="submit">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <svg viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,32L80,64C160,96,320,160,480,197.3C640,235,800,245,960,218.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
          </div>
          <div className="swiper-slide slide-2">
            <div className="container">
              <div className="slider-container">
                <h2 className="slider-sub-title">Fresh Product</h2>
                <div className="animated-area">
                  <h1 className="slider-title">Directly to your door step</h1>
                  <div className="slider-form">
                    <form method="post">
                      <div className="input-group has-search">
                        {/* <span class="fa fa-search form-control-feedback"></span> */}
                        <input type="search" className="form-control" placeholder="Search your product" />
                        <div className="input-group-append">
                          <button className="btn btn-orange" type="submit">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <svg viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,32L80,64C160,96,320,160,480,197.3C640,235,800,245,960,218.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
          </div>
          <div className="swiper-slide slide-3">
            <div className="container">
              <div className="slider-container">
                <h2 className="slider-sub-title">Fresh Product</h2>
                <div className="animated-area">
                  <h1 className="slider-title">Directly to your door step</h1>
                  <div className="slider-form">
                    <form method="post">
                      <div className="input-group has-search">
                        {/* <span class="fa fa-search form-control-feedback"></span> */}
                        <input type="search" className="form-control" placeholder="Search your product" />
                        <div className="input-group-append">
                          <button className="btn btn-orange" type="submit">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <svg viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,32L80,64C160,96,320,160,480,197.3C640,235,800,245,960,218.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
          </div>
        </div>
        {/* If we need navigation buttons */}
        <div className="d-none">
          <div className="swiper-button-prev prev-text"> <span className="prev-text"> <u>Prev </u> </span> </div>
          <div className="swiper-button-next"> <u>Next</u> </div>
        </div>
      </div>
    </div>
  )
}

export default Slider