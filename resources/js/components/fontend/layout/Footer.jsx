import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 mr-auto">
        <div className="grocino-second-row-item">
          <a href="index.html">
            <img src="/resources/fontend/assets/img/logos/white-logo.png" alt="Grocery Product Image" title="Grocery Product Image" className="img-fluid logo" />
          </a>
          <p> We are a team of designers and developers that create high quality eCommerce Templates and themes .</p>
        </div>
        <ul className="list-inline social-icon">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/">
              <img src="/resources/fontend/assets/img/logos/facebook.png" alt="Facebook" title="Facebook" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/">
              <img src="/resources/fontend/assets/img/logos/twitter.png" alt="Twitter" title="Twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/">
              <img src="/resources/fontend/assets/img/logos/instagram.png" alt="Instagram" title="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 mx-auto">
        <div className="grocino-second-row-item">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="category.html">Category</a></li>
            <li><a href="blog.html"> Blogs</a></li>
            <li><a href="register.html">Register</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="grocino-second-row-item">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="contact-us.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="grocino-second-row-item">
          <h4>My Account</h4>
          <ul>
            <li><Link href="/admin/product">My Profile</Link></li>
            <li><Link href="/admin/product">Setting</Link></li>
            <li><a href="logout.html">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Footer