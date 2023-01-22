import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../../form/Input'
import Radio from '../../form/Radio'


const Accounce = ({inputHandle,inputValue}) => {
  return (
      <div className="row">

          <div className="col-xl-12 col-12">
              <Input type='text' name='sub_total' lblText='Sub Total' value={inputValue.sub_total} error={inputValue.error_log.sub_total} handleInput={inputHandle} placeholder='sub Total' className='form-control' />
              <Input type='text' name='discount' lblText='Discount(%)' value={inputValue.discount} error={inputValue.error_log.discount} handleInput={inputHandle} placeholder='Discount(%)' className='form-control' />
              <Input type='text' name='total' lblText='Total' value={inputValue.total} error={inputValue.error_log.total} handleInput={inputHandle} placeholder='Total' className='form-control' />
              <Input type='text' name='paid' lblText='Paid Amount' value={inputValue.paid} error={inputValue.error_log.paid} handleInput={inputHandle} placeholder='Paid Amount' className='form-control' />
              <Input type='text' name='due' lblText='Due Amount' value={inputValue.due} error={inputValue.error_log.due} handleInput={inputHandle} placeholder='Due Amount' className='form-control' />

          </div>
          <div>
            <hr/>
            <h4 className='text-center'>Select Payment Option</h4>
            <hr/>
        </div>
            <div className='row my-3'>
                
                <div className="col-lg-4 col-12 text-center">
                    <Radio name="paymentOption" id="radioinline1" lbl="Cash" defaultValue="1" handleInput={inputHandle}   />
                </div>
                <div className="col-lg-4 col-12 text-center">
                    <Radio name="paymentOption" id="radioinline2" lbl="Card / Bank" defaultValue="2" handleInput={inputHandle}  />
                </div>
                <div className="col-lg-4 col-12 text-center">
                    <Radio name="paymentOption" id="radioinline3" lbl="Cheque" defaultValue="3" handleInput={inputHandle}  />
                </div>
                
            </div>
            <small className="form-text text-danger text-center">{inputValue.error_log.paymentOption}</small>

          <div className="col-xl-12 col-12 mt-3">
              <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
              <Link to='/admin/sell-product' className="d-inline p-2 btn btn-secondary">Cancel</Link>
          </div>
      </div>
  )
}

export default Accounce