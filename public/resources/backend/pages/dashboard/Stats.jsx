import React from 'react'

const Stats = ({title,today,yesterday,thisMonth,lastMonth,thisYear,lastYear}) => {
  return (
    <div className="col-xl-4 col-lg-12">
        <div className="card custom-card">
    
    
    <div className="text-center card-header">
      <h4 className="m-b-15 m-t-5 my-4">{title}</h4>
    </div>
    <div className="card-footer row">
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card">Today</h6>
        <h4><span className="">{today}</span> tk</h4>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card">Yesterday</h6>
        <h4><span className="">{yesterday}</span> tk</h4>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card">this Month</h6>
        <h4><span className="">{thisMonth}</span> tk</h4>
      </div>
    </div>
    <div className="card-footer row">
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card">this year</h6>
        <h4><span className="">{thisYear}</span> tk</h4>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card">Last year</h6>
        <h4><span className="">{lastYear}</span> tk</h4>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card">last Month</h6>
        <h4><span className="">{lastMonth}</span> tk</h4>
      </div>
    </div>
  </div>
</div>


  )
}

export default Stats
