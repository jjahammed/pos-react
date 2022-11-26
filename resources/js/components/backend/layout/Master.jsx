import React,{useState,useEffect} from 'react'
import {Outlet,Navigate, useNavigate} from 'react-router-dom'
import loadjs from 'loadjs';
import Swal from 'sweetalert2'

import Header from './Header'


import '../assets/css/themify.css'
import '../assets/css/bootstrap.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/js/sidebar-menu.js'
import '../assets/js/script.js'

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
  console.log(permission);
  useEffect(() => {
    loadjs(['/resources/backend/assets/js/theme-customizer/customizer.js'], function() {
      /* foo.js and bar.js loaded */
    });
  }, [])

    const [sidebarClose, setSidebarClose] = useState('')
    const menuSidebar = (e) => {
        sidebarClose == '' ? setSidebarClose('sidebar-close') : setSidebarClose('')
    }

  return ( auth ?
    <div className="page-wrapper">
      <Header menuSidebar={menuSidebar}/>
        <div className={`page-body-wrapper ${sidebarClose}`}>
            <Sidebar/>
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