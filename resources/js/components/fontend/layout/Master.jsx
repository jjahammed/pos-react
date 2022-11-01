import React,{useEffect,useState} from 'react'
import loadjs from 'loadjs';

import Header from './Header'
import Footer from './Footer';
import Cart from './Cart'

import '../assets/assets/css/bootstrap.min.css'
import '../assets/assets/css/owl.carousel.css'
import '../assets/assets/unicons/css/unicons.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/assets/css/semantic.css'
import '../assets/assets/css/animate.min.css'
import '../assets/assets/css/swiper.min.css'
import '../assets/assets/fonts/style.css'
import { Outlet } from 'react-router-dom';
import Slider from '../pages/home/Slider';
import Newsletter from '../pages/home/Newsletter';
import Information from '../pages/home/Information';
import Header2 from './Header2';






// import '../assets/assets/js/dropdown.js'
// import '../assets/assets/js/owl.carousel.js'
// import '../assets/assets/js/swiper.min.js'
// import '../assets/assets/js/vejcustome.js'
// import '../assets/assets/js/counter.js'




const Master = () => {

  const url = window.location.href
  const [path, setPath] = useState('')
 

  useEffect(() => {
    loadjs([ 'resources/fontend/assets/assets/js/dropdown.js','resources/fontend/assets/assets/js/owl.carousel.js','resources/fontend/assets/assets/js/swiper.min.js','resources/fontend/assets/assets/js/vejcustome.js','resources/fontend/assets/assets/js/counter.js'], function() {
      });
}, [])

useEffect(() => {
  if(url == 'http://127.0.0.1:8000/'){
    setPath('grocino-home')
  }else {
      setPath('grocino-contact-us')
  }
}, [])


  return (
    <div>
    {/* <div className=""></div> */}
    
    <Outlet />

    {/* Newsletter area start here */}
    <div className="grocino-newsletter">
      <Newsletter />
    </div>
    {/* Newsletter area end here */}
    {/* grocino-information area start here */}
    <div className="grocino-information">
    <Information/>
    </div>
{/* grocino-information area end here */}
    {/* grocino footer start */}
    <div className="grocino-footer2">
      <div id="grocino-footer" className="footer-container">
        <div className="grocino-footer-row">
          <Footer/>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    {/* grocino footer end  */}
    {/* cart sidebar */}
    <div className="bs-canvas bs-canvas-right  position-fixed grocino-cartbg h-100">
      <Cart/>
    </div>
  </div>

  )
}

export default Master