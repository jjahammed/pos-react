import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="page-sidebar custom-scrollbar">
      <div className="sidebar-user text-center">
        <div>
          <img className="img-50 rounded-circle" src="/resources/backend/assets/images/user/1.jpg" alt="#" />
        </div>
        <h6 className="mt-3 f-12">Johan Deo</h6>
      </div>
      <ul className="sidebar-menu">
        <li>
          <div className="sidebar-title">General</div>
          <Link to="/" className="sidebar-header">
            <i className="fa-solid fa-house" /><span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/sample" className="sidebar-header">
            <i className="fa-solid fa-gauge" /><span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/test" className="sidebar-header">
            <i className="fa-solid fa-gauge" /><span>Test</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/product" className="sidebar-header">
            <i className="fa-solid fa-gauge" /><span>Product</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="sidebar-header">
            <i className="icon-blackboard" /><span>Configuration</span>
            <i className="fa fa-angle-right pull-right" />
          </Link>
          <ul className="sidebar-submenu">
            <li>
              <Link to="/admin/category"><i className="fa fa-angle-right" />Category</Link>
            </li>
            <li>
              <Link to="/admin/sub-category"><i className="fa fa-angle-right" />Sub Category</Link>
            </li>
            <li>
              <Link to="/admin/brand"><i className="fa fa-angle-right" />Brand</Link>
            </li>
            <li>
              <Link to="/admin/unit"><i className="fa fa-angle-right" />Unit</Link>
            </li>
            <li>
              <Link to="/admin/supplier"><i className="fa fa-angle-right" />Supplier</Link>
            </li>
            <li>
              <Link to="/admin/location"><i className="fa fa-angle-right" />Location</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="http://admin.pixelstrap.com/universal/starter-kit/layout-light.html" className="sidebar-header">
            <i className="icon-anchor" /><span> Starter kit</span>
          </Link>
        </li>
        <li>
          <div className="sidebar-title">Layout</div>
          <Link to="#" className="sidebar-header">
            <i className="icon-palette" /> <span>Color Version</span>
            <i className="fa fa-angle-right pull-right" />
          </Link>
          <ul className="sidebar-submenu">
            <li>
              <Link to="layout-light.html"><i className="fa fa-angle-right" />Layout Light</Link>
            </li>
            <li>
              <Link to="layout-dark.html"><i className="fa fa-angle-right" />Layout Dark</Link>
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
            +1 234 567 899 <br />help@pixelstrap.com <br /><Link to="#">Visit FAQ</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar