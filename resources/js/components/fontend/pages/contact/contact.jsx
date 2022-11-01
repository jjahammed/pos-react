import React from 'react'
import Header2 from '../../layout/Header2'

const contact = () => {
  return (
    <div className='grocino-contact-us'>
      <div className="home-header home-header2">
      <Header2 />
    </div>
        {/* contact-section start here */}
    <div className="contact-section">
        <div className="container">
            <div className="row">
            <div className="grocino-heading">
                <h1 className="heading_text"> Contact Us </h1> 
                <div className="graph graph-sm">
                <img src="/resources/fontend/assets/img/about/graphic.png" alt="Graph" title="Graph" />
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12">
                <div className="contact-left">
                <h2> We are available 24/7 for you </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrics gravida. Risus commondo viverra maecenas
                </p>
                <div className="contact-column">
                    <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                        <a href="#">
                        <i className="uil uil-phone-volume" />
                        <h4>Phone Number</h4>
                        <p>Call Us:- +91 385 118 7200</p>
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                        <a href="#">
                        <i className="uil uil-envelope" />
                        <h4>Support E-mail</h4>
                        <p>demo@demo.com</p>
                        </a>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                        <a href="#">
                        <i className="uil uil-map-marker" />
                        <h4>Location</h4>
                        <p>2972/4, gori Park, Near Loreal Park, New York, USA, 00000</p>
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                        <a href="#">
                        <i className="uil uil-clock" />
                        <h4>Opening Hours</h4>
                        <p>Mon-Fri: 9:00am to 6:30pm<br />
                            Sat: 9:00am to 4:00pm <br />
                            Sun: 9:00am to 2:30pm
                        </p>
                        </a>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                        <h4>We are listening</h4>
                        <p>Our support member will assist thourgh query</p>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                        <a href="#" className="live_chat">
                        <img src="/resources/fontend/assets/img/home/messenger.png" alt="Live Chat" /> Live Chat With Us
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 ml-auto">
                <div className="contact-right">
                <h2> Feel free to contact with us any time</h2>
                <p>Lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet, consectetur.</p>
                <form method="post">
                    <div className="form-group">
                    <label htmlFor="input-name">Name</label>
                    <input type="text" id="input-name" className="form-control" name="name" placeholder="Name" defaultValue required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="input-email">E-mail id</label>
                    <input type="email" id="input-email" className="form-control" name="email" placeholder="Email id" defaultValue required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="input-msg">Message</label>
                    <textarea id="input-msg" rows={5} className="form-control" placeholder="Message" required defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-submit btn-block btn-lg">Submit</button>
                </form>		
                <div className="clearfix" />	 
                </div>
            </div>
            </div>
        </div>
    </div>
{/* contact-section end here */}
      </div>
    

  )
}

export default contact