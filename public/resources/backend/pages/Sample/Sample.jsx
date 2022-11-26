import React,{useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import loadjs from 'loadjs';
import Breadcrumb from '../../layout/Breadcrumb'


const Sample = () => {
  
  const outlet = useLocation();
  console.log(outlet);
  
  return (

    <div>
        <div className="container-fluid">
        <div className="page-header">
          <Breadcrumb heading='Sample Page' subHeading = 'this is a sample page' link = '/sample' linkHeading='go to sample page'/>
        </div>
      </div>
      {/* Container-fluid Ends */}
      {/* Container-fluid starts */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Sample Card</h5>
                <span>lorem ipsum dolor sit amet, consectetur adipisicing
                  elit</span>
              </div>
              <div className="card-body">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sample