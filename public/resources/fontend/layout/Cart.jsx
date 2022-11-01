import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div>
        <div className="bs-canvas-header sidecart-header p-3 ">
        <div className="d-inline-block  sidecart-title">My Cart <span>(2 Items)</span></div>
        <button type="button" className="bs-canvas-close close" aria-label="Close"><i className="uil uil-multiply" /></button>
      </div> 
      <div className="bs-canvas-body">
        <div className="side-cart-items">
          <div className="cart-item">
            <div className="cart-product-img">
              <img src="/resources/fontend/assets/img/product-1.png" className="img-fluid" alt="Image" /> 
            </div>
            <div className="cart-text">
              <h4>Duck Egg</h4>
              <div className="cart-prices"><strong>$100.00</strong></div>
              <div className="qty-group">
                <div className="quantity">
                  <div className="def-number-input number-input safari_only">
                    <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus" />
                    <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
                    <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus" />
                  </div>
                </div>
              </div>
              <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
            </div>
          </div>
          {/* cart loop */}
          <div className="cart-item">
            <div className="cart-product-img">
              <img src="/resources/fontend/assets/img/product-2.png" className="img-fluid" alt="Image" /> 
            </div>
            <div className="cart-text">
              <h4>Rice Basmati</h4>
              <div className="cart-prices"><strong>$150.00</strong></div>
              <div className="qty-group">
                <div className="quantity">
                  <div className="def-number-input number-input safari_only">
                    <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus" />
                    <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
                    <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus" />
                  </div>
                </div>
              </div>
              <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
            </div>
          </div>
          {/* cart loop */}
        </div>
        <div className="cart-top-total">
          <div className="main-total-cart">
            <h4>Sub Total</h4>
            <span>$250</span>
          </div>
          <div className="main-total-cart">
            <h4>Gst</h4>
            <span>$10</span>
          </div>
          <div className="main-total-cart">
            <h4>Delivery Charges</h4>
            <span>$5</span>
          </div>
        </div>
      </div>
      <div className="bs-canvas-footer">
        <div className="cart-total-dil saving-total ">
          <h4>Total Saving</h4>
          <span>$10</span>
        </div>
        <div className="main-total-cart">
          <h2>Total</h2>
          <span>$255</span>
        </div>
        <div className="checkout-cart">
          <a href="checkout.html" className="promo-code">Redeem Your Coupon?</a>
          <a href="checkout.html" className="cart-checkout-btn vej-btnhover">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb