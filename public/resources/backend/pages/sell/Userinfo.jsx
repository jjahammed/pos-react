import React from 'react'
import Input from '../../form/Input'
import Date from '../../form/Date'
import Textarea from '../../form/Textarea'

const Userinfo = ({inputValue,inputHandle,generateUniqueNumber,date,setDateFunction}) => {
  return (
    <div className="row" style={{ border:'1px' }}>
    <div className="col-xl-12 col-12">
        <Input type='hidden' name='user_id' lblText='user_id No' value={inputValue.user_id} error={inputValue.error_log.user_id} onChange={inputHandle} placeholder='user_id' className='form-control' />
        <Input type='text' name='invoice' lblText='Invoice No' value={inputValue.invoice} error={inputValue.error_log.invoice} onChange={inputHandle} placeholder='invoice no' className='form-control' onClick={generateUniqueNumber} />
        <Date name='purcheased_date' lblText='purcheased date' value={date} error={inputValue.error_log.purcheased_date} setDateFunction={setDateFunction} placeholder='purcheased date' className='form-control'/>
        {/* <Input type='date' name='purcheased_date' lblText='purcheased date' value={inputValue.purcheased_date} error={inputValue.error_log.purcheased_date} inputHandle={inputHandle} placeholder='purcheased date' className='form-control' /> */}
        <Input type='text' name='uid' lblText='Customer Id' value={inputValue.uid} error={inputValue.error_log.uid}  onChange={inputHandle} placeholder='Customer Id' className='form-control' />
        <Input type='text' name='name' lblText='Customer Name' value={inputValue.name} error={inputValue.error_log.name} onChange={inputHandle}  placeholder='Customer Name' className='form-control' />
        <Textarea name='address' lblText='address' value={inputValue.address} error={inputValue.error_log.address} onChange={inputHandle} placeholder='address' className='form-control' />
        <Input type='text' name='phone' lblText='phone' value={inputValue.phone} error={inputValue.error_log.phone} onChange={inputHandle} placeholder='phone' className='form-control' />
        <Input type='email' name='email' lblText='email (optional)' value={inputValue.email} error={inputValue.error_log.email} onChange={inputHandle} placeholder='email' className='form-control' />
        <Textarea name='note' lblText='Note (optional)' value={inputValue.note} error={inputValue.error_log.note} onChange={inputHandle} placeholder='Note' className='form-control' />
        {/* <Input type='text' name='paid' lblText='Paid Amount' value={inputValue.paid} error={inputValue.error_log.paid} inputHandle={inputHandle} placeholder='Paid Amount' className='form-control' />
        <Input type='text' name='due' lblText='Due Amount' value={inputValue.due} error={inputValue.error_log.due} inputHandle={inputHandle} placeholder='Due Amount' className='form-control' /> */}
    </div>
</div>
  )
}

export default Userinfo