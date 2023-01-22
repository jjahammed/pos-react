import React from 'react'

const Dashboard2 = () => {
  return (
  <div className="container-fluid page-header">
    <div className="row">
    <div className="col-xl-4 col-lg-4">
      <div className="card default-widget-count">
        <div className="card-body">
          <div className="d-flex">
            <div className="me-3 left b-primary">
              <div className="bg bg-primary" />
              <i className="icon-user" />
            </div>
            <div className="align-self-center">
              <h4 className="mt-0">2560146</h4>
              <span>Happy Clients </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-4">
      <div className="card default-widget-count">
        <div className="card-body">
          <div className="d-flex">
            <div className="me-3 left b-secondary">
              <div className="bg bg-secondary" />
              <i className="icon-package" />
            </div>
            <div className="align-self-center">
              <h4 className="mt-0 counter">95314</h4>
              <span>Order Complate </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-4">
      <div className="card default-widget-count">
        <div className="card-body">
          <div className="d-flex">
            <div className="me-3 left b-success">
              <div className="bg bg-success" />
              <i className="icon-money" />
            </div>
            <div className="align-self-center">
              <h4 className="mt-0 counter">1035976</h4>
              <span>Early income </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="row">
    <div className="col-xl-4 col-lg-4">
      <div className="card">
        <div className="card-header text-center">
          <h5>Purcheased</h5>
        </div>
        <div className="card-body">

          <div className='d-flex justify-content-end'>
            <p className='d-flex justify-content-start'>Today</p>
            <span className='d-flex justify-content-center'>100.00</span>
          </div>
          
          {/* <table className="table table-striped table-bordered">
            <tr className="">
              <td className="">tk. 53692.25</td>
            </tr>
            <tr className="">
              <td className="text-center">Today</td>
              <td className="">tk. 53692.25</td>
            </tr>
          </table> */}
        </div>
      </div>

      </div>
      
    </div>
  </div>

  )
}

export default Dashboard2