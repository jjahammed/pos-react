import React,{useContext} from 'react'
import { systemContext } from '../App'
import {Link} from 'react-router-dom'

const Footer = () => {
    const mySystem = useContext(systemContext)
    const {system} = mySystem
    const copyright = system.find(item => {
        return item.slug == 'company-copyright'
      })
  return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6 footer-copyright">
                    <p className="mb-0">{copyright.value}</p>
                    </div>
                    <div className="col-sm-12  col-md-6 col-xl-6">
                    <ul className="footer-links">
                        <li><Link to="/admin/information/about">About</Link></li>
                        <li><Link to="/admin/information/contact">Contact</Link></li>
                        <li><Link to="/admin/information/privacy">Privacy</Link></li>
                        <li><Link to="/admin/information/terms-condition">T&amp;C</Link></li>
                    </ul>
                    </div>
                </div>
            </div>

  )
}

export default Footer