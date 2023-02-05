import React,{useContext} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { systemContext } from '../App'

const Sidebar = ({mobileMenuSidebar}) => {

  const location = useLocation()
  const mySystem = useContext(systemContext)
  const {system} = mySystem
  let routeName = location.pathname
  console.log(routeName);

  const phone = system.find(item => {
    return item.slug == 'company-phone-number'
  })
  const email = system.find(item => {
    return item.slug == 'company-email-address'
  })

  return (
    <div className="page-sidebar custom-scrollbar">
      <ul className="sidebar-menu">
          <div className="sidebar-title">General</div>
        <li>
          <Link to="/admin/dashboard" className={routeName == '/admin/dashboard' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
          <i className="fa-solid fa-table-columns"></i><span>Dashboard</span>
          </Link>
        </li>

        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-gear"></i> <span>Configuration</span>
            <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/system" className={routeName == '/admin/system' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />System</Link>
            </li>
            <li>
              <Link to="/admin/category" className={routeName == '/admin/category' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Category</Link>
            </li>
            <li>
              <Link to="/admin/sub-category" className={routeName == '/admin/sub-category' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Sub Category</Link>
            </li>
            <li>
              <Link to="/admin/brand" className={routeName == '/admin/brand' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Brand</Link>
            </li>
            <li>
              <Link to="/admin/unit" className={routeName == '/admin/unit' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Unit</Link>
            </li>
            <li>
              <Link to="/admin/supplier" className={routeName == '/admin/supplier' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Supplier</Link>
            </li>
            <li>
              <Link to="/admin/location" className={routeName == '/admin/location' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Location</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-dollar-sign"></i> <span>Investment</span>
            <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/investment" className={routeName == '/admin/investment' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Investment List</Link>
            </li>
            <li>
              <Link to="/admin/investment/new" className={routeName == '/admin/investment/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />new investment</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-brands fa-product-hunt"></i> <span>Product</span>
            <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/product" className={routeName == '/admin/product' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Product List</Link>
            </li>
            <li>
              <Link to="/admin/product/new" className={routeName == '/admin/product/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Create new product</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-cart-shopping"></i> <span>Purcheased</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
            <Link to="/admin/purcheased-product" className={routeName == '/admin/purcheased-product' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>purcheased List</span>
          </Link>
            </li>
            <li>
            <Link to="/admin/purcheased-product/new" className={routeName == '/admin/purcheased-product/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" />
            Add Purcheased
          </Link>
            </li>
            <li>
          <Link to="/admin/purcheased-product/return" className={routeName == '/admin/purcheased-product/return' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>Return Product</span>
          </Link>
        </li>
        </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-brands fa-sellsy"></i> <span>Sales</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
            <Link to="/admin/sell-product" className={routeName == '/admin/sell-product' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>Sell list</span>
          </Link>
            </li>
            <li>
            <Link to="/admin/sell-product/new" className={routeName == '/admin/sell-product/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>New Sell</span>
          </Link>
            </li>
            <li>
            <Link to="/admin/sell-product/return" className={routeName == '/admin/sell-product/return' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>Return Sell</span>
          </Link>
        </li>
        </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-cubes-stacked"></i> <span>Stock</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
            <Link to="/admin/stock" className={routeName == '/admin/stock' ? 'sidebar-header active' : 'sidebar-header'}  onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>Current Stock</span>
          </Link>
            </li>
            <li>
            <Link to="/admin/stock/new" className={routeName == '/admin/stock/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>Lost/Damage</span>
          </Link>
            </li>
            <li>
            <Link to="/admin/alert-stock" className={routeName == '/admin/alert-stock' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}>
            <i className="fa fa-angle-right" /><span>alert stock</span>
          </Link>
        </li>
           
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-truck-field"></i> <span>Supplier</span>
            <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
          <li>
              <Link to="/admin/supplier" className={routeName == '/admin/supplier' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Supplier</Link>
            </li>
            <li>
              <Link to="/admin/supplier/new" className={routeName == '/admin/supplier/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Add Supplier</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-sharp fa-solid fa-lock"></i> <span>Authorization</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/module" className={routeName == '/admin/module' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />module</Link>
            </li>
            <li>
              <Link to="/admin/sub-module" className={routeName == '/admin/sub-module' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Sub Module</Link>
            </li>
            <li>
              <Link to="/admin/permission" className={routeName == '/admin/permission' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Permission</Link>
            </li>
          </ul>
        </li>
        
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-user"></i> <span>Admin</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/create-admin" className={routeName == '/admin/create-admin' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Create Admin</Link>
            </li>
           
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-child"></i> <span>Employee</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/employee" className={routeName == '/admin/employee' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Employee List</Link>
            </li>
            <li>
              <Link to="/admin/employee/new" className={routeName == '/admin/employee/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />New Employee</Link>
            </li>
           
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-users"></i> <span>Customer</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/customer-list" className={routeName == '/admin/customer-list' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Customer List</Link>
            </li>
            <li>
              <Link to="/admin/due-customer-list" className={routeName == '/admin/due-customer-list' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Due customer List</Link>
            </li>
           
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-dollar-sign"></i> <span>Expences</span>
            <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/expence" className={routeName == '/admin/expence' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Expence List</Link>
            </li>
            <li>
              <Link to="/admin/expence/new" className={routeName == '/admin/expence/new' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />new Expence</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-header">
          <i className="fa-solid fa-filter"></i> <span>Extra</span>
          <i className="fa fa-angle-right pull-right" />
          </a>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/about" className={routeName == '/admin/about' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />About</Link>
            </li>
            <li>
              <Link to="/admin/contact" className={routeName == '/admin/contact' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />Contact</Link>
            </li>
            <li>
              <Link to="/admin/terms-condition" className={routeName == '/admin/terms-condition' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />terms and condition</Link>
            </li>
            <li>
              <Link to="/admin/faq" className={routeName == '/admin/faq' ? 'sidebar-header active' : 'sidebar-header'} onClick={()=>mobileMenuSidebar()}><i className="fa fa-angle-right" />FAQ</Link>
            </li>
          </ul>
        </li>
        
            
            
      </ul>
      <div className="sidebar-widget text-center">
        <div className="sidebar-widget-top">
          <h6 className="mb-2 fs-14">Need Help</h6>
          <i className="fa-sharp fa-solid fa-phone" />
        </div>
        <div className="sidebar-widget-bottom p-20 m-20">
          <p>
            {phone.value}  <br />{email.value} <br /><Link to="#">Visit FAQ</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar