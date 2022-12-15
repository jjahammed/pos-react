import React from 'react'
import Input from '../../form/Input'
import Select2 from '../../form/Select2'
import Date from '../../form/Date'
import Textarea from '../../form/Textarea';

const Generalinfo = ({inputValue,selectedSupplier,inputHandle,date,setDateFunction,supplier,userSupplierChoice,userChoice}) => {
  return (
            <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-xl-6">

                    <Input type='text' name='invoice' lblText='Invoice No' value={inputValue.invoice} error={inputValue.error_log.invoice} onChange={inputHandle} placeholder='invoice no' className='form-control' />

                 
                    <Date lblText='Date' value={date} setDateFunction={setDateFunction} error={inputValue.error_log.purcheased_date}  placeholder='Purcheased date' className='form-control'/>
                  </div>
                  <div className="col-sm-12 col-xl-6">

                    <Select2  selectedItem={selectedSupplier} name='supplier' lblText='Select suplier' error={inputValue.error_log.supplier} className='form-control basic-single' option={supplier} userChoice ={userSupplierChoice} />

                    <Textarea name='note' lblText='Note (optional)' value={inputValue.note} error={inputValue.error_log.note} onChange={inputHandle} placeholder='Note' className='form-control' />

                  </div>
                </div>
              </div>
  )
}

export default Generalinfo