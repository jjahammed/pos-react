import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumb = ({heading,subHeading,link,linkHeading}) => {
  return (
    <div className="row">
        <div className="col-lg-6">
            <h3>
            {heading}
            <small>{subHeading}</small>
            </h3>
        </div>
        <div className="col-lg-6">
            <ol className="breadcrumb pull-right">
            <li className="breadcrumb-item">
                <Link to={link}><i className="fa-solid fa-angles-right" /></Link>
            </li>
            <li className="mx-2">{linkHeading}</li>
            </ol>
        </div>
    </div>
  )
}

export default Breadcrumb