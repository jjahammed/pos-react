import React from 'react'
import Breadcrumb from '../../layout/Breadcrumb'

const List = () => {
  return (
   <div>
  {/* Container-fluid starts */}
  <div className="container-fluid">
    <div className="page-header">
      <Breadcrumb heading='Product Page' subHeading = 'this is a Product page' link = '/product' linkHeading='go to Product page'/>
    </div>
  </div>
  {/* Container-fluid Ends */}
  {/* Container-fluid starts */}
  <div className="container-fluid">

    <div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5>Latest Products</h5>
            <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
            <div className="card-header-right">
              <ul className="list-unstyled card-option">
                <li><i className="icofont icofont-simple-left " /></li>
                <li><i className="view-html fa fa-code" /></li>
                <li><i className="icofont icofont-maximize full-card" /></li>
                <li><i className="icofont icofont-minus minimize-card" /></li>
                <li><i className="icofont icofont-refresh reload-card" /></li>
                <li><i className="icofont icofont-error close-card" /></li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive text-center user-status">
              <table className="table table-bordernone">
                <thead>
                  <tr>
                    <th scope="col">Images</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-bottom-0" scope="row"><img src="/resources/backend/assets/images/product/1.png" alt="product-1" /></th>
                    <td>New USA Home Appliances
                      Whaer
                    </td>
                    <td className="digits">01</td>
                    <td>Mark Jecno</td>
                    <td>Padding</td>
                  </tr>
                  <tr>
                    <th className="border-bottom-0" scope="row"><img src="/resources/backend/assets/images/product/2.png" alt="product-1" /></th>
                    <td>New Smart Samsung Touch
                      Mobile
                    </td>
                    <td className="digits">01</td>
                    <td>Dolbi Volo</td>
                    <td>Return</td>
                  </tr>
                  <tr>
                    <th className="border-bottom-0" scope="row"><img src="/resources/backend/assets/images/product/3.png" alt="product-1" /></th>
                    <td>Men Fashion 30% Fashion
                      Men-TSHIRT
                    </td>
                    <td className="digits">06</td>
                    <td>Donalt Hili</td>
                    <td>Delievered</td>
                  </tr>
                  <tr>
                    <th className="border-bottom-0 pb-0" scope="row"><img src="/resources/backend/assets/images/product/4.png" alt="product-1" /></th>
                    <td>Sport Wear Rebiz Sport
                      Shoes  for men
                    </td>
                    <td className="digits">03</td>
                    <td>Animkl solo</td>
                    <td>cancle</td>
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    {/*Customer Product & Review Table Ends*/}
    <div className="row">
      <div className="col-xl-3 col-sm-6">
        <div className="card">
          <div className="product-box">
            <div className="product-img">
              <img src="/resources/backend/assets/images/ecommerce/product/01.jpg" className="img-fluid" />
              <div className="product-hover">
                <ul>
                  <li><i className="icon-shopping-cart" /></li>
                  <li><i className="icon-eye" /></li>
                  <li><i className="icofont icofont-law-alt-2" /></li>
                </ul>
              </div>
            </div>
            <div className="product-details">
              <h6>Woman</h6>
              <span>Simply dummy text of the printing.</span>
              <div className="product-price">
                <del>$350.00  </del>$26.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card">
          <div className="product-box">
            <div className="product-img">
              <div className="ribbon ribbon-danger">Sale</div>
              <img src="/resources/backend/assets/images/ecommerce/product/02.jpg" className="img-fluid" />
              <div className="product-hover">
                <ul>
                  <li><i className="icon-shopping-cart" /></li>
                  <li><i className="icon-eye" /></li>
                  <li><i className="icofont icofont-law-alt-2" /></li>
                </ul>
              </div>
            </div>
            <div className="product-details">
              <h6>Woman</h6>
              <span>Simply dummy text of the printing.</span>
              <div className="product-price">
                <del>$350.00  </del>$26.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card">
          <div className="product-box">
            <div className="product-img">
              <img src="/resources/backend/assets/images/ecommerce/product/03.jpg" className="img-fluid" />
              <div className="product-hover">
                <ul>
                  <li><i className="icon-shopping-cart" /></li>
                  <li><i className="icon-eye" /></li>
                  <li><i className="icofont icofont-law-alt-2" /></li>
                </ul>
              </div>
            </div>
            <div className="product-details">
              <h6>Woman</h6>
              <span>Simply dummy text of the printing.</span>
              <div className="product-price">
                <del>$350.00  </del>$26.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card">
          <div className="product-box">
            <div className="product-img">
              <div className="ribbon ribbon-success ribbon-right">50%</div>
              <img src="/resources/backend/assets/images/ecommerce/product/04.jpg" className="img-fluid" />
              <div className="product-hover">
                <ul>
                  <li><i className="icon-shopping-cart" /></li>
                  <li><i className="icon-eye" /></li>
                  <li><i className="icofont icofont-law-alt-2" /></li>
                </ul>
              </div>
            </div>
            <div className="product-details">
              <h6>Woman</h6>
              <span>Simply dummy text of the printing.</span>
              <div className="product-price">
                <del>$350.00  </del>$26.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5>User Status</h5>
            <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
            <div className="card-header-right">
              <ul className="list-unstyled card-option">
                <li><i className="icofont icofont-simple-left " /></li>
                <li><i className="view-html fa fa-code" /></li>
                <li><i className="icofont icofont-maximize full-card" /></li>
                <li><i className="icofont icofont-minus minimize-card" /></li>
                <li><i className="icofont icofont-refresh reload-card" /></li>
                <li><i className="icofont icofont-error close-card" /></li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="user-status table-responsive">
              <table className="table table-bordernone">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">Popular</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-bottom-0">
                      <div className="d-inline-block align-middle">
                        <img src="/resources/backend/assets/images/user/4.jpg" alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle" />
                        <div className="d-inline-block">
                          <h6>John Deo <span className="text-muted digits">(14+ Online)</span></h6>
                        </div>
                      </div>
                    </td>
                    <td>USA</td>
                    <td>
                      <div className="progress-showcase">
                        <div className="progress sm-progress-bar">
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '30%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <ul className="list-inline text-muted">
                          <li className="list-inline-item"><i className="icon-close" /></li>
                          <li className="list-inline-item"><i className="icon-na" /></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-bottom-0">
                      <div className="d-inline-block align-middle">
                        <img src="/resources/backend/assets/images/user/1.jpg" alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle" />
                        <div className="d-inline-block">
                          <h6>Holio Mako <span className="text-muted digits">(250+ Online)</span></h6>
                        </div>
                      </div>
                    </td>
                    <td>Angola</td>
                    <td>
                      <div className="progress-showcase">
                        <div className="progress sm-progress-bar">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <ul className="list-inline text-muted">
                          <li className="list-inline-item"><i className="icon-close" /></li>
                          <li className="list-inline-item"><i className="icon-na" /></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-bottom-0">
                      <div className="d-inline-block align-middle">
                        <img src="/resources/backend/assets/images/user/5.jpg" alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle" />
                        <div className="d-inline-block">
                          <h6>Mohsib lara<span className="text-muted digits">(99+ Online)</span></h6>
                        </div>
                      </div>
                    </td>
                    <td>Cuba</td>
                    <td>
                      <div className="progress-showcase">
                        <div className="progress sm-progress-bar">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <ul className="list-inline text-muted">
                          <li className="list-inline-item"><i className="icon-close" /></li>
                          <li className="list-inline-item"><i className="icon-na" /></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-bottom-0">
                      <div className="d-inline-block align-middle">
                        <img src="/resources/backend/assets/images/user/6.jpg" alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle" />
                        <div className="d-inline-block">
                          <h6>Hileri Soli <span className="text-muted digits">(150+ Online)</span></h6>
                        </div>
                      </div>
                    </td>
                    <td>Italy</td>
                    <td>
                      <div className="progress-showcase">
                        <div className="progress sm-progress-bar">
                          <div className="progress-bar bg-secondary" role="progressbar" style={{width: '30%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <ul className="list-inline text-muted">
                          <li className="list-inline-item"><i className="icon-close" /></li>
                          <li className="list-inline-item"><i className="icon-na" /></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-bottom-0">
                      <div className="d-inline-block align-middle">
                        <img src="/resources/backend/assets/images/user/7.jpg" alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle" />
                        <div className="d-inline-block">
                          <h6>Pusiz bianb <span className="text-muted digits">(14+ Online)</span></h6>
                        </div>
                      </div>
                    </td>
                    <td>Kenya</td>
                    <td>
                      <div className="progress-showcase">
                        <div className="progress sm-progress-bar">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <ul className="list-inline text-muted">
                          <li className="list-inline-item"><i className="icon-close" /></li>
                          <li className="list-inline-item"><i className="icon-na" /></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    {/*Blog And User Status Start*/}
    <div className="row">
      <div className="col-xl-6 col-md-12 col-sm-12">
        <div className="card height-equal">
          <div className="card-header">
            <h5>Customer Review</h5>
            <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
            <div className="card-header-right">
              <ul className="list-unstyled card-option">
                <li><i className="icofont icofont-simple-left " /></li>
                <li><i className="view-html fa fa-code" /></li>
                <li><i className="icofont icofont-maximize full-card" /></li>
                <li><i className="icofont icofont-minus minimize-card" /></li>
                <li><i className="icofont icofont-refresh reload-card" /></li>
                <li><i className="icofont icofont-error close-card" /></li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="customer-review">
              <div className="d-flex">
                <img className="align-self-start rounded-circle img-90" alt="Universal-review" src="/resources/backend/assets/images/user/12.png" />
                <div>
                  <label className="cust-name">Mark Jenco</label><label className="cust-des">Designer</label>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin </p>
                </div>
              </div>
              <div className="d-flex mb-0">
                <img className="align-self-start rounded-circle img-90" alt="Universal-review" src="/resources/backend/assets/images/user/13.png" />
                <div>
                  <label className="cust-name">Heloi Jobuc</label><label className="cust-des">Student</label>
                  <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Lorem Ipsum as their default model</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-sm-6">
            <div className="card height-equal equal-height-lg">
              <div className="blog-box blog-grid text-center">
                <img src="/resources/backend/assets/images/blog/blog-5.png" className="img-fluid top-radius-blog" />
                <div className="blog-details-main">
                  <ul className="blog-social">
                    <li className="digits">9 April 2021</li>
                    <li className="digits">by: Admin</li>
                    <li className="digits">0 Hits</li>
                  </ul>
                  <hr />
                  <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card height-equal equal-height-lg">
              <div className="blog-box blog-grid text-center">
                <img src="/resources/backend/assets/images/blog/blog-6.png" className="img-fluid top-radius-blog" />
                <div className="blog-details-main">
                  <ul className="blog-social">
                    <li className="digits">9 April 2021</li>
                    <li className="digits">by: Admin</li>
                    <li className="digits">0 Hits</li>
                  </ul>
                  <hr />
                  <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Blog And User Status Ends*/}
  </div>
  {/* Container-fluid Ends */}
</div>

  )
}

export default List