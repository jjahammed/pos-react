import React from 'react'
import {Link} from 'react-router-dom'


import Facilities from './Facilities';
import Category from './Category';
import Special from './Special';
import Running from './Running';
import ParallaxContainer from './ParallaxContainer';
import Popular from './Popular';
import Organic from './Organic';
import Faq from './Faq';
import Latest from './Latest';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Header from '../../layout/Header';
import Slider from './Slider';

const Home = () => {
  return (
    <div className='grocino-home'>
    <div className="home-header home-header2">
      <Header />
      <Slider/>
    </div>
        <Facilities/>

{/* Category area start here */}
<div id="grocino-categorys">
  <Category /> 
</div>
{/* Category area end here */}

<div id="grocino-introduction">
<Special />
</div>


{/* Running area start here */}
<div id="grocino-runnings">
  <Running />
</div>
{/* Running area end here */}

{/* paralax countrer */}
<div className="parallax-container">
  <div className="material-parallax">   
    <ParallaxContainer />
  </div>
</div>
{/* paralax counter */}


{/* Popoular product area start */}
<div className="product-areaholder popular-product">
 <Popular />
</div>
{/* Popoular product area end */}
{/* Organic area start */}
<div className="organics">
 <Organic />
</div> 
{/* Organic area end */}
{/* Prepare countrer area start */}
<div className="prepare_main">
  <img src="/resources/fontend/assets/img/home/banner-3.png" alt="Banner" className="w-100" />
</div>
{/* Prepare countrer area end */}
{/* why grocino start */}
<div className="whygrocino">
  <Faq />
</div>


{/* Latest product area start */}
<div className="product-areaholder latest-product">
  <Latest />
</div>
{/* Latest product area start */}


{/* our-speech area start here */}
<div className="our-speech">
  <Testimonial/>
</div>
{/* our-speech area end here */}
<div className="clearfix" />
{/* blog-holder start here */}
<div className="blogs-holder">
  <Blog />
  <div className="clearfix" />
</div>
{/* blog-holder end  */}


    </div>
  )
}

export default Home