import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="error-wrapper my-5 py-5">
      <div className="container">
        <img src="/resources/backend/assets/images/sad.png" className="img-100"  />
        <div className="error-heading">
          <img src="/resources/backend/assets/images/cloud-bg-1.png" className="cloud-first"  />
          <h2 className="headline font-info">400</h2>
          <img src="/resources/backend/assets/images/cloud-bg-2.png" className="cloud-second"  />
        </div>
        <div className="col-md-8 offset-md-2">
          <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.
          </p>
        </div>
        <div>
          <Link to="/" className="btn btn-info-gradien btn-lg">BACK TO HOME PAGE</Link>
        </div>
      </div>
    </div>

  )
}

export default Error404