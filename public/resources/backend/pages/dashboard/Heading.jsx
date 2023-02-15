import React from 'react'

const Heading = ({title,amount,icon,background}) => {
  const styleIcon = {
    width: '30px',
    fontSize:'35px',
    color: '#fff',
    marginRight : '2px'
  }
  return (
      <div className="col-xl-3 col-lg-3">
        <div className={`card default-widget-count ${background}`}>
            <div className="card-body">
            <div className="d-flex">
                <div className="me-3">
                <div className="bg bg-primary" />
                {/* <i className="fa-solid fa-sun" style={styleIcon} /> */}
                <i className={icon} style={styleIcon}></i>
                </div>
                <div className="align-self-center">
                <h5 className="mt-0">{parseFloat(amount).toFixed(0) } tk</h5>
                <span className='text-light'>{title} </span>
                </div>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Heading
