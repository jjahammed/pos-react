import React,{useContext} from 'react'
import { systemContext } from '../App'

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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">T&amp;C</a></li>
                    </ul>
                    </div>
                </div>
            </div>

  )
}

export default Footer