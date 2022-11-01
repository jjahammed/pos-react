import React from 'react'
import {Link} from 'react-router-dom'

const Information = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="information-inner">
        <div className="media">
          <div className="img-left">
            <img src="/resources/fontend/assets/img/home/mail.png" alt="Email" />
          </div>
          <div className="media-body">
            <h4>Email US</h4>
            <p>demo@demo.com</p>
          </div>
        </div>
        <div className="media">
          <div className="img-left">
            <img src="/resources/fontend/assets/img/home/phone.png" alt="Phone" />
          </div>
          <div className="media-body">
            <h4>Contact US</h4>
            <p>+91 385 118 7200</p>
          </div>
        </div>
        <div className="media">
          <div className="img-left">
            <img src="/resources/fontend/assets/img/home/mail.png" alt="Email" />
          </div>
          <div className="media-body">
            <h4>Email US</h4>
            <p>demo@demo.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Information