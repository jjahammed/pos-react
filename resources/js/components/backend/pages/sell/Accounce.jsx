import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../../form/Input'


const Accounce = ({inputHandle,inputValue}) => {
  return (
      <div className="row">

          <div className="col-xl-12 col-12">
              <Input type='text' name='sub_total' lblText='Sub Total' value={inputValue.sub_total} error={inputValue.error_log.sub_total} onChange={inputHandle} placeholder='sub Total' className='form-control' />
              <Input type='text' name='discount' lblText='Discount(%)' value={inputValue.discount} error={inputValue.error_log.discount} onChange={inputHandle} placeholder='Discount(%)' className='form-control' />
              <Input type='text' name='total' lblText='Total' value={inputValue.total} error={inputValue.error_log.total} onChange={inputHandle} placeholder='Total' className='form-control' />
              <Input type='text' name='paid' lblText='Paid Amount' value={inputValue.paid} error={inputValue.error_log.paid} onChange={inputHandle} placeholder='Paid Amount' className='form-control' />
              <Input type='text' name='due' lblText='Due Amount' value={inputValue.due} error={inputValue.error_log.due} onChange={inputHandle} placeholder='Due Amount' className='form-control' />

          </div>
          <div className="col-xl-12 col-12 mt-3">
              <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
              <Link to='/admin/sell-product' className="d-inline p-2 btn btn-secondary">Cancel</Link>
          </div>
      </div>
  )
}

export default Accounce