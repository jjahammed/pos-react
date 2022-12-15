import React,{useState} from 'react'
import Select2 from '../../form/Select2';
import Input from '../../form/Input';

const Calculation = ({selectedProduct,addTableRows,calculation,rowsInput,variationHandle,product,userChoice}) => {

  return (
    <div className="row">
    <div className="col-sm-12 col-xl-6">
      <Select2 name='product_id' selectedItem={selectedProduct} opValue='' placeholder='Select A Product' lblText='Select A Product'  userChoice ={userChoice} className='form-control basic-single' option={product} />
    </div>
    <div className="col-sm-12 col-xl-4">
      <Input type='text' name='product_qty' lblText='Quantity' value={rowsInput.product_qty}  onChange={variationHandle} placeholder='Quantity' className='form-control' />
    </div>
    <div className="col-sm-12 col-xl-2">
      <button type='button' className='btn btn-primary d-inline btn-block' onClick={() => { addTableRows(); calculation(); }}>add</button>
    </div>
  </div>
  );
}

export default Calculation