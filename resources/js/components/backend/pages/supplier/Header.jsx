import React from 'react'

const Header = ({supplier}) => {
  return (
    <div className="row">
              <div className="col-md-6 ">
              <div className="card">
                <div className="ecommerce-widget card-body">
                  <div className="row">
                    <div className="col-8">
                      <span>Purcheased</span>
                      <h3 className="total-num counter">{supplier.reduce((a,b) => {return a+b.total},0)} tk</h3>
                    </div>
                    <div className="col-4">
                      <div className="text-end">
                        <ul>
                          <li>Paid<span className="product-stts txt-success ms-2">{supplier.reduce((a,b) => {return a+b.paid},0)} tk</span></li>
                          <li>Due<span className="product-stts txt-danger ms-2">{supplier.reduce((a,b) => {return a+b.due},0)} tk</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="progress-showcase">
                    <div className="progress lg-progress-bar">
                      <div className="progress-bar bg-success" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-md-6 ">
              <div className="card">
                <div className="ecommerce-widget card-body">
                  <div className="row">
                    <div className="col-6">
                      <span>Total Supplier</span>
                      <h3 className="total-num counter">{supplier.length}</h3>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <ul>
                          <li>Profit<span className="product-stts txt-success ms-2">8989<i className="icon-angle-up f-12 ms-1" /></span></li>
                          <li>Loss<span className="product-stts txt-danger ms-2">2560<i className="icon-angle-down f-12 ms-1" /></span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="progress-showcase">
                    <div className="progress lg-progress-bar">
                      <div className="progress-bar bg-info" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div> 
  )
}

export default Header
