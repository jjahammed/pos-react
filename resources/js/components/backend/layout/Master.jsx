import React,{useState,useEffect} from 'react'
import {Outlet,Navigate, useNavigate, useLocation} from 'react-router-dom'
import loadjs from 'loadjs';
import Swal from 'sweetalert2'

import Header from './Header'


import '../assets/css/themify.css'
import '../assets/css/bootstrap.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
// import '../assets/js/sidebar-menu.js'
// import '../assets/js/script.js'

import Sidebar from './Sidebar'
import Sample from '../pages/Sample/Sample'
import Footer from './Footer'
import useAuth from '../../hooks/useAuth'
import usePermission from '../../hooks/usePermission'

const Master = () => {
  const auth = useAuth();
  // const permission = usePermission()
  const permission = 'true'
  const navigate = useNavigate()
  const location = useLocation()
  // console.log();
  useEffect(() => {
    loadjs(['/resources/backend/assets/js/sidebar-menu.js','/resources/backend/assets/js/script.js','/resources/backend/assets/js/theme-customizer/customizer.js'], function() {
      /* foo.js and bar.js loaded */
    });
  }, [])

    const [sidebarClose, setSidebarClose] = useState('page-sidebar-open')
    const menuSidebar = (e) => {
      sidebarClose == 'page-sidebar-open' ? setSidebarClose('sidebar-close') : setSidebarClose('page-sidebar-open')
      console.log(sidebarClose);
    }
    const mobileMenuSidebar = (e) => {
      if(window.screen.width < 991){
        sidebarClose == 'page-sidebar-open' ? setSidebarClose('sidebar-close') : setSidebarClose('page-sidebar-open')
        console.log(sidebarClose);
      }
    }

    // page-sidebar-open

  return ( auth ?
    <div className="page-wrapper">
      <Header menuSidebar={menuSidebar}/>
        <div className={`page-body-wrapper ${sidebarClose}`}>
        {/* <div className='page-body-wrapper sidebar-close'> */}
            <Sidebar mobileMenuSidebar={mobileMenuSidebar}/>
            <div className="page-body">
           { permission 
            ? 
              <Outlet />
            : 
              navigate('/admin/stock')
            }
              <footer className="footer-fix">
                <Footer/>
              </footer>
            </div>
        </div>
    </div>
    :
    <Navigate to='/login' />
  )
}

export default Master