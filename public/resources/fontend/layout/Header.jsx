import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Header = ({menuSidebar}) => {

  return (
    <header className="grocino-header clearfix">
      <div className="grocino-top-header d-block d-xl-none d-lg-none">
        <div className="row">
          <div className="col-12 col-md-4 col-sm-12">
            <div className="grocerino-logo text-left"> 
              <Link to="/admin/product"> 
                <img src="/resources/fontend/assets/img/logos/white-logo.png" alt="Grocery Product Image" className="img-fluid" /> 
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-8 col-sm-12">
            <div className="top-right text-right">
              <ul className="list-inline">
                <li className="dropdown-cartview">
                  <Link to="#" className="pull-bs-canvas-right userpanel-link middle-cart" title="Cart">
                    <i className="uil uil-shopping-trolley" /> <span className="amount">$250.00</span> 
                  </Link>
                </li>
                <li className="account-view">
                  <Link to="/admin/sample"><img src="/resources/fontend/assets/img/logos/profile-img.png" alt="Profile" title="Profile" /></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 d-none-col d-none-lg d-none-xl">
            <div className="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none pull-right mt-3">
              {/* mobile menu start here */}
              <nav className="navbar navbar-expand-lg navbar-dark px-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse bg-dark" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <div className="ui icon dropdown icon top left selection">
                        <div className="dropdown-text">Home <i className="fa fa-angle-down" /> </div>
                        <div className="menu">
                          <Link className="nav-link" to="index.html">Home <span className="sr-only">(Home)</span></Link>
                          <Link to="index1.html" className="item" data-value={1}>
                            Home 2
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="about.html">About</Link>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon dropdown icon top left selection">
                        <div className="dropdown-text">Category <i className="fa fa-angle-down" /></div>	
                        <div className="menu">
                          <Link to="category.html" className="item" data-value={1}>
                            Category
                          </Link>
                          <Link to="category-sidebar.html" className="item" data-value={2}>
                            Dairy &amp; Bakery
                          </Link>
                          <Link to="category-sidebar1.html" className="item" data-value={3}>
                            Dry fruits &amp; Snacks
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon dropdown icon top left selection">
                        <div className="dropdown-text">Pages <i className="fa fa-angle-down" /></div>
                        <div className="menu">
                          <Link to="index1.html" className="item" data-value={1}>
                            Home 2
                          </Link>
                          <Link to="blog.html" className="item" data-value={2}>
                            Blog
                          </Link>
                          <Link to="blog-detail.html" className="item" data-value={3}>
                            Blog Detail
                          </Link>
                          <Link to="cart.html" className="item" data-value={4}>
                            Cart
                          </Link>
                          <Link to="coming-soon.html" className="item" data-value={5}>
                            Coming Soon
                          </Link>
                          <Link to="checkout.html" className="item" data-value={6}>
                            Checkout
                          </Link>
                          <Link to="empty-cart.html" className="item" data-value={7}>
                            Empty Cart
                          </Link>
                          <Link to="faq.html" className="item" data-value={8}>
                            Faq
                          </Link>
                          <Link to="login.html" className="item" data-value={9}>
                            Login
                          </Link>
                          <Link to="not-found.html" className="item" data-value={10}>
                            Not Found
                          </Link>
                          <Link to="payment-successfully.html" className="item" data-value={11}>
                            Payment Successfully
                          </Link>
                          <Link to="product-detail.html" className="item" data-value={12}>
                            Product Detail
                          </Link>
                          <Link to="register.html" className="item" data-value={13}>
                            Register
                          </Link>
                          <Link to="reset-password.html" className="item" data-value={14}>
                            Reset Password
                          </Link>
                          <Link to="search.html" className="item" data-value={15}>
                            Search 
                          </Link>
                          <Link to="logout.html" className="item" data-value={16}>
                            Logout 
                          </Link>
                          {/* <Link to="privacy-policy.html" class="item" data-value="12">

                    Privacy Policy

                  </Link>

                  <Link to="return-policy.html" class="item" data-value="16">

                    Return Policy

                  </Link>

                  <Link to="term-condition.html" class="item" data-value="18">

                    Term & Condition

                  </Link> */}
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/"> My Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* mobile menu end here */}
            </div> 
          </div>
        </div>
        {/* link */}	
      </div>
      <div className="clearfix" />	
      <div className="mega-menudesktop">
        <div className="navpart d-none d-lg-block d-xl-block w-100">
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            <div className="container px-0">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              {/* Logo */}
              <div className="col-xl-2 col-lg-3 px-0">
                <div className="grocerino-logo text-left"> 
                  <Link to="/admin/sample">
                    <img src="/resources/fontend/assets/img/logos/white-logo.png" alt="Grocery Product Image" className="img-fluid" /> 
                  </Link>
                </div>
              </div>
              {/* menu links */}
              <div className="col-lg-6 col-xl-7 px-0 mx-xl-auto">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav main-nav align-self-stretch">
                    <li className="nav-item active">
                      <div className="ui icon dropdown icon top left selection">
                        <div className="dropdown-text">Home <i className="fa fa-angle-down" /> </div>
                        <div className="menu">
                          <Link to="/" className="item" data-value={1}>
                            Home 2
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="about.html">About</Link>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon dropdown icon top left selection">
                        <div className="dropdown-text">Category <i className="fa fa-angle-down" /></div>
                        <div className="menu">
                          <Link to="category.html" className="item" data-value={1}>
                            Category
                          </Link>
                          <Link to="category-sidebar.html" className="item" data-value={2}>
                            Dairy &amp; Bakery
                          </Link>
                          <Link to="category-sidebar1.html" className="item" data-value={3}>
                            Dry fruits &amp; Snacks
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon dropdown icon top left selection">
                        <div className="dropdown-text">Pages <i className="fa fa-angle-down" /> </div>
                        <div className="menu">
                          <Link to="index1.html" className="item" data-value={1}>
                            Home 2
                          </Link>
                          <Link to="blog.html" className="item" data-value={2}>
                            Blog
                          </Link>
                          <Link to="blog-detail.html" className="item" data-value={3}>
                            Blog Detail
                          </Link>
                          <Link to="cart.html" className="item" data-value={4}>
                            Cart
                          </Link>
                          <Link to="coming-soon.html" className="item" data-value={5}>
                            Coming Soon
                          </Link>
                          <Link to="checkout.html" className="item" data-value={6}>
                            Checkout
                          </Link>
                          <Link to="empty-cart.html" className="item" data-value={7}>
                            Empty Cart
                          </Link>
                          <Link to="faq.html" className="item" data-value={8}>
                            Faq
                          </Link>
                          <Link to="login.html" className="item" data-value={9}>
                            Login
                          </Link>
                          <Link to="not-found.html" className="item" data-value={10}>
                            Not Found
                          </Link>
                          <Link to="payment-successfully.html" className="item" data-value={11}>
                            Payment Successfully
                          </Link>
                          <Link to="product-detail.html" className="item" data-value={12}>
                            Product Detail
                          </Link>
                          <Link to="register.html" className="item" data-value={13}>
                            Register
                          </Link>
                          <Link to="reset-password.html" className="item" data-value={14}>
                            Reset Password
                          </Link>
                          <Link to="search.html" className="item" data-value={15}>
                            Search 
                          </Link>
                          <Link to="logout.html" className="item" data-value={16}>
                            Logout 
                          </Link>
                          {/* <Link to="privacy-policy.html" class="item" data-value="12">

                    Privacy Policy

                  </Link>

                  <Link to="return-policy.html" class="item" data-value="16">

                    Return Policy

                  </Link>

                  <Link to="term-condition.html" class="item" data-value="18">

                    Term & Condition

                  </Link> */}
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/product"> My Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* top right */}
              <div className="col-xl-2 col-lg-3 px-0">
                <div className="top-right text-right">
                  <ul className="list-inline">
                    <li className="dropdown-cartview">
                      <Link to="#" className="pull-bs-canvas-right userpanel-link middle-cart mx-0" title="Cart">
                        <i className="uil uil-shopping-trolley" /> <span className="amount">$250.00</span> 
                      </Link>
                    </li>
                    <li className="account-view">
                      <Link to="/admin/product"><img src="/resources/fontend/assets/img/logos/profile-img.png" alt="Profile" title="Profile" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header