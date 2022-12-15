import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="page-sidebar custom-scrollbar">
      <ul className="sidebar-menu">
          <div className="sidebar-title">General</div>
        <li>
          <Link to="/admin/dashboard" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/test" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Test</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/product" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Product</span>
          </Link>
        </li>
        <div className="sidebar-title">Purcheased</div>
        <li>
          <Link to="/admin/purcheased-product" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>purcheased List</span>
          </Link>
          <Link to="/admin/purcheased-product/new" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Add purcheased</span>
          </Link>
          <Link to="/admin/purcheased-product/return" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Return Product</span>
          </Link>
        </li>
        <div className="sidebar-title">Sales</div>
        <li>
          <Link to="/admin/sell-product" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Sell list</span>
          </Link>
          <Link to="/admin/sell-product/new" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>New Sell</span>
          </Link>
          <Link to="/admin/sell-product/return" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Return Sell</span>
          </Link>
        </li>
        <div className="sidebar-title">Stock</div>
        <li>
          <Link to="/admin/stock" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Current Stock</span>
          </Link>
          <Link to="/admin/stock/new" className="sidebar-header">
            <i className="fa fa-angle-right" /><span>Lost/Damage</span>
          </Link>
        </li>
        <div className="sidebar-title">General Configuration</div>
            <li>
              <Link to="/admin/system" className="sidebar-header"><i className="fa fa-angle-right" />System</Link>
            </li>
            <li>
              <Link to="/admin/category" className="sidebar-header"><i className="fa fa-angle-right" />Category</Link>
            </li>
            <li>
              <Link to="/admin/sub-category" className="sidebar-header"><i className="fa fa-angle-right" />Sub Category</Link>
            </li>
            <li>
              <Link to="/admin/brand" className="sidebar-header"><i className="fa fa-angle-right" />Brand</Link>
            </li>
            <li>
              <Link to="/admin/unit" className="sidebar-header"><i className="fa fa-angle-right" />Unit</Link>
            </li>
            <li>
              <Link to="/admin/supplier" className="sidebar-header"><i className="fa fa-angle-right" />Supplier</Link>
            </li>
            <li>
              <Link to="/admin/location" className="sidebar-header"><i className="fa fa-angle-right" />Location</Link>
            </li>
        <div className="sidebar-title">Admin Roles</div>
            <li>
              <Link to="/admin/module" className="sidebar-header"><i className="fa fa-angle-right" />module</Link>
            </li>
            <li>
              <Link to="/admin/sub-module" className="sidebar-header"><i className="fa fa-angle-right" />Sub Module</Link>
            </li>
            <li>
              <Link to="/admin/permission" className="sidebar-header"><i className="fa fa-angle-right" />Permission</Link>
            </li>
        <div className="sidebar-title">Reports</div>
            <li>
              <Link to="/admin/permission" className="sidebar-header"><i className="fa fa-angle-right" />Customer List</Link>
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
      {/* <div className="sidebar-widget text-center">
        <div className="sidebar-widget-top">
          <h6 className="mb-2 fs-14">Need Help</h6>
          <i className="fa-sharp fa-solid fa-phone" />
        </div>
        <div className="sidebar-widget-bottom p-20 m-20">
          <p>
            +1 234 567 899 <br />help@pixelstrap.com <br /><Link to="#">Visit FAQ</Link>
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar