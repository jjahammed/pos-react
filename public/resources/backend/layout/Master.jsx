import React,{useState,useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import loadjs from 'loadjs';

import Header from './Header'


import '../assets/css/themify.css'
import '../assets/css/bootstrap.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'


// import '../assets/js/jquery-3.2.1.min.js'
// import '../assets/js/bootstrap/bootstrap.bundle.min.js'
import '../assets/js/sidebar-menu.js'
import '../assets/js/script.js'
// import '../assets/js/theme-customizer/customizer.js'
import Sidebar from './Sidebar'
import Sample from '../pages/Sample/Sample'
import Footer from './Footer'



const Master = () => {

  useEffect(() => {
    loadjs(['/resources/backend/assets/js/theme-customizer/customizer.js'], function() {
      /* foo.js and bar.js loaded */
    });
  }, [])

    const [sidebarClose, setSidebarClose] = useState('')
    const menuSidebar = (e) => {
        sidebarClose == '' ? setSidebarClose('sidebar-close') : setSidebarClose('')
    }

  return (
    <div className="page-wrapper">
      <Header menuSidebar={menuSidebar}/>
        <div className={`page-body-wrapper ${sidebarClose}`}>
            <Sidebar/>
            <div className="page-body">
              <Outlet />
              <footer className="footer-fix">
                <Footer/>
              </footer>
            </div>
        </div>
    </div>
  )
}

export default Master