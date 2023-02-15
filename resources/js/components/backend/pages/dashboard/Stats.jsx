import React from 'react'

const Stats = ({title,today,yesterday,thisMonth,lastMonth,thisYear,lastYear}) => {
  return (
    <div className="col-xl-4 col-lg-12">
        <div className="card custom-card">
    
    
    <div className="text-center card-header ">
      <h4 className="m-b-15 m-t-5 my-4">{title}</h4>
    </div>
    <div className="card-footer row">
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card text-dark">Today</h6>
        <span className="text-primary">{parseFloat(today).toFixed(0)} tk</span>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card text-dark">Yesterday</h6>
        <span className="text-primary">{parseFloat(yesterday).toFixed(0)} tk</span>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card text-dark">this Month</h6>
        <span className="text-primary">{parseFloat(thisMonth).toFixed(0)} tk</span>
      </div>
    </div>
    <div className="card-footer row">
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card text-dark">this year</h6>
        <span className="text-primary">{parseFloat(thisYear).toFixed(0)} tk</span>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card text-dark">Last year</h6>
        <span className="text-primary">{parseFloat(lastYear).toFixed(0)} tk</span>
      </div>
      <div className="col-4 col-sm-4">
        <h6 className="dashboard-card text-dark">last Month</h6>
        <span className="text-primary">{parseFloat(lastMonth).toFixed(0)} tk</span>
      </div>
    </div>
  </div>
</div>


  )
}

export default Stats
