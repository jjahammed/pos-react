import React,{useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

import '../assets/css/themify.css'
import '../assets/css/bootstrap.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'


import '../assets/js/jquery-3.2.1.min.js'
import '../assets/js/bootstrap/bootstrap.bundle.min.js'
import '../assets/js/sidebar-menu.js'
import '../assets/js/script.js'
import '../assets/js/theme-customizer/customizer.js'

import { systemContext } from '../App'

const Header = ({menuSidebar}) => {

  const navigate = useNavigate();
  const mySystem = useContext(systemContext)
  const {system} = mySystem

  const logout = () => {
    axios.post(`/api/logout`).then(res => {
      if(res.data.status === 200){
         localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        Swal.fire(
          'See u soon!',
          res.data.message,
          'success'
        )
        navigate('/')
      }
    });
  }

  const logoLight = system.find(item => {
    return item.slug == 'company-logo-dark'
  })
  const logoDark = system.find(item => {
    return item.slug == 'company-logo-light'
  })

  const [menuOpen,setMenuOpen] = useState('')
  const menuOpenOption = () => {
    menuOpen == '' ? setMenuOpen('open') : setMenuOpen('')
  }

  return (
    <div className="page-main-header">
        <div className="main-header-left">
      <div className="logo-wrapper">
        <Link to="index.html">
          <img src={'/' + logoDark.value} className="image-dark" />
          <img src={'/' + logoLight.value} className="image-light" />
        </Link>
        
      </div>
    </div>
    <div className="main-header-right row">
      <div className="mobile-sidebar col-1 ps-0">
        <div className="text-start switch-sm">
          <label className="switch">
            <input type="checkbox" id="sidebar-toggle" name="menu-layouts1"  onChange={() =>menuSidebar()} defaultChecked/>
            <span className="switch-state" />
          </label>
        </div>
      </div>
      <div className="nav-right col">
        <ul className={`nav-menus ${menuOpen}`}>
          <li>
            <form className="form-inline search-form">
              <div className="form-group">
                <label className="sr-only">Email</label>
                <input type="search" className="form-control-plaintext" placeholder="Search.." />
                <span className="d-sm-none mobile-search"> </span>
              </div>
            </form>
          </li>
          {/* <li>
            <Link to="#!" onClick="javascript:toggleFullScreen()" className="text-dark">
              <img className="align-self-center pull-right me-2" src="/resources/backend/assets/images/dashboard/browser.png" alt="header-browser" />
            </Link>
          </li> */}
          

          <li>
            <Link to="#" className="main-theme-layout darkLayout" theme-layout="main-theme-layout-4" title="Dark Layout"><i className="fa-solid fa-moon" /></Link>
            <Link to="#" className="main-theme-layout lightLayout" theme-layout="main-theme-layout-5" title="Light Layout"><i className="fa-solid fa-sun" /></Link>
          </li>
          <li className="onhover-dropdown">
            <Link to="#!" className="txt-dark">
              <img className="align-self-center pull-right me-2" src="/resources/backend/assets/images/dashboard/notification.png" alt="header-notification" />
              <span className="badge rounded-pill badge-primary notification">3</span>
            </Link>
            <ul className="notification-dropdown onhover-show-div">
              <li>
                Notification
                <span className="badge rounded-pill badge-secondary text-white text-uppercase pull-right">3
                  New</span>
              </li>
              <li>
                <div className="d-flex">
                  <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-shopping-cart bg-primary" />
                  <div>
                    <h6 className="mt-0">Your order ready for Ship..!</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer elit.
                    </p>
                    <span><i className="icofont icofont-clock-time p-r-5" />Just
                      Now</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-download-alt bg-success" />
                  <div>
                    <h6 className="mt-0 txt-success">Download Complete</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer elit.
                    </p>
                    <span><i className="icofont icofont-clock-time p-r-5" />5
                      minutes ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-recycle bg-danger" />
                  <div>
                    <h6 className="mt-0 txt-danger">250 MB trush files</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer elit.
                    </p>
                    <span><i className="icofont icofont-clock-time p-r-5" />25
                      minutes ago</span>
                  </div>
                </div>
              </li>
              <li className="text-center">
                You have Check <Link to="#">all</Link> notification
              </li>
            </ul>
          </li>
          <li className="onhover-dropdown">
            <div className="d-flex align-items-center">
              <img className="align-self-center pull-right flex-shrink-0 me-2" src={"/"+ JSON.parse(localStorage.getItem('user')).image} alt="header-user" style={{height:'35px',width:'35px',borderRadius:'50%'}} />
              <div>
                <h6 className="m-0 txt-dark f-16">
                  {JSON.parse(localStorage.getItem('user')).name}
                  <i className="fa fa-angle-down pull-right ms-2" />
                </h6>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div p-20">
              <li>
                <Link to="#">
                  <i className="fa-solid fa-user" />
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-solid fa-inbox" />
                  Inbox
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-sharp fa-solid fa-list-check" />
                  Task
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-solid fa-headset" />
                  Chat
                </Link>
              </li>
              <li>
                <Link to="#" onClick={logout}>
                  <i className="fa-solid fa-right-from-bracket" />
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="d-lg-none mobile-toggle">
          <i className="fa-solid fa-sun" onClick={menuOpenOption}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header