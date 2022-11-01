import React from 'react'
import {Link} from 'react-router-dom'

const ParallaxContainer = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12 col-md-3 col-sm-6">
          <div className="counter">
            <h2 className="timer count-title count-number" data-to={1000} data-speed={1500} />
            <div className="counter-modern-decor" />
            <p className="count-text ">Pickup Center</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6">
          <div className="counter">
            <h2 className="timer count-title count-number" data-to={170} data-speed={1500} />
            <div className="counter-modern-decor" />
            <p className="count-text ">Happy Frenchies Holders</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6">
          <div className="counter">
            <h2 className="timer count-title count-number" data-to={550} data-speed={1500} />
            <div className="counter-modern-decor" />
            <p className="count-text ">Store In Country</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6">
          <div className="counter">
            <h2 className="timer count-title count-number" data-to={1000} data-speed={1500} />
            <div className="counter-modern-decor" />
            <p className="count-text ">Farmers Connected</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParallaxContainer