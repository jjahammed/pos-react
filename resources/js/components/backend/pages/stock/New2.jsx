import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Select2 from '../../form/Select2'
import Input from '../../form/Input'
import Variation from './Variation2';
import Textarea from '../../form/Textarea';
import Calculation from './Calculation'
import Loading from '../extra/Loading'

const New = () => {

  const navigate = useNavigate();
  const [product, setProduct] = useState([])
  const [supplier, setSupplier] = useState([])

  let myData = []

  const [inputValue, setInputValue] = useState({
    invoice: '',
    supplier: '',
    purcheased_date: '',
    note: '',
    sub_total: 0,
    discount: 0,
    total: 0,
    paid: 0,
    due: 0,
    error_log: []
  })

  const [rowsData, setRowsData] = useState(localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) : []);
  const [rowsInput, setRowsInput] = useState({
    product_id: '',
    product_pid: '',
    product_title: '',
    product_image: '',
    product_price: '',
    product_qty: '',
    total_price: '',
  });

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    rowsInput[index]['total_price'] = rowsInput[index]['product_price'] * value
    setRowsData(rowsInput);
    myData = localStorage.setItem('datas',JSON.stringify(rowsInput))
    // console.log(rowsInput[index]['product_price']);
  }



  const addTableRows = () => {
    if(rowsInput.product_id == '' || rowsInput.product_qty == ''){
      Swal.fire({icon: 'error',title: 'Oops...',text: 'Product and quantity fields are mandatory'})
    }else{
      
      setRowsData([...rowsData, rowsInput]),
      myData = localStorage.setItem('datas',JSON.stringify([...rowsData, rowsInput]))

      setRowsInput({
        product_id: '',
        product_pid: '',
        product_title: '',
        product_image: '',
        product_price: '',
        product_qty: '',
        total_price: '',
      })
      
    }
    console.log(rowsData);
  }

  const userChoice = (choice) => {
    console.log(choice)
    setRowsInput({
      ...rowsInput,
      product_id: choice?.value,
      product_title: choice?.label,
      product_pid: choice?.product_pid,
      product_image: choice?.product_image,
      product_price: choice?.product_price,
    })
  }
  const userSupplierChoice = (choice) => {
    console.log(choice)
      setInputValue({
      ...inputValue,
      supplier: choice?.value,
    })
  }

  const variationHandle = (e) => {
    setRowsInput({
      ...rowsInput,
      product_qty : e.target.value,
      total_price : e.target.value * rowsInput.product_price
    })
    console.log(rowsInput.product_qty);
  }

  const calculation = () => {
    let tmpPrice = rowsData.reduce((accumulator,currentValue) => {return accumulator + currentValue.total_price},0)
    let tmpTotal = tmpPrice - (tmpPrice * inputValue.discount/100)
    let tmpDue = tmpTotal - inputValue.paid
    setInputValue({
      ...inputValue,
      sub_total : tmpPrice,
      total : tmpTotal,
      due : tmpDue
    })
  }


  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    myData = localStorage.setItem('datas',JSON.stringify(rows))
    if(rowsData.length == 1){
      setInputValue({
        ...inputValue,
        sub_total: 0,
        discount: 0,
        total: 0,
        paid: 0,
        due: 0,
      })
    }
  }

  

  const inputHandle = (e) => {
    if(e.target.name == 'discount'){
        let tmpTotal = inputValue.sub_total - (inputValue.sub_total * e.target.value/100)
        let tmpDue = tmpTotal - inputValue.paid
      setInputValue({
        ...inputValue,
        [e.target.name] : e.target.value,
        total : tmpTotal,
        due : tmpDue
      })
    }else if(e.target.name == 'paid'){
        let tmpDue = inputValue.total- e.target.value
      setInputValue({
        ...inputValue,
        [e.target.name] : e.target.value,
        due : tmpDue
      })
    }else{
      setInputValue({
        ...inputValue,
        [e.target.name] : e.target.value
      })
    }
    
    
  }



  useEffect(() => {
    document.title = 'Add Stock'

    const getSupplier = async () => {
      const arr = [];
      await axios.get('/api/supplier').then((res) => {
        let result = res.data.data;
        result.map((item) => {
          return arr.push({ value: item.id, label: item.name});
        });
        setSupplier(arr)
      });
    };
    const getProduct = async () => {
      const arr = [];
      await axios.get('/api/product').then((res) => {
        let result = res.data.data;
        result.map((item) => {
          return arr.push({ value: item.id, label: item.title, product_pid: item.pid, product_image : item.image, product_price : item.salePrice });
        });
        setProduct(arr)
      });
    };
    getProduct();
    getSupplier();
  }, [])

  useEffect(() => {
    calculation();
  }, [rowsData])
  



  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('products',JSON.stringify(rowsData));
    formData.append('invoice',inputValue.invoice);
    formData.append('supplier',inputValue.supplier);
    formData.append('purcheased_date',inputValue.purcheased_date);
    formData.append('note',inputValue.note);
    formData.append('sub_total',inputValue.sub_total);
    formData.append('total',inputValue.total);
    formData.append('discount',inputValue.discount);
    formData.append('paid',inputValue.paid);
    formData.append('due',inputValue.due);

    axios.post('/api/stock', formData).then(res => {
      if (res.data.status === 200) {
        console.log(res.data.data)
        localStorage.setItem('success', res.data.message)
        navigate('/admin/stock');
      } else {
        setInputValue({
          ...inputValue,
          error_log: res.data.error
        })
      }
    }).catch(err => err)
  }

  return (
    <div className="container-fluid" style={{ marginTop: '100px', marginBottom: '500px' }}>
      <form encType='multipart/form-data' onSubmit={submitForm}>

        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Add Stock</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-xl-6">

                    <Input type='text' name='invoice' lblText='Invoice No' value={inputValue.invoice} error={inputValue.error_log.invoice} onChange={inputHandle} placeholder='invoice no' className='form-control' />

                    <Select2 name='supplier' value={inputValue.supplier} opValue='' opText='Select suplier' lblText='Select suplier' error={inputValue.error_log.supplier} onChange={userChoice} className='form-control basic-single' option={supplier} userChoice ={userSupplierChoice} />
                  </div>
                  <div className="col-sm-12 col-xl-6">

                    <Input type='date' name='purcheased_date' lblText='Purcheased date' value={inputValue.purcheased_date} error={inputValue.error_log.purcheased_date} onChange={inputHandle} placeholder='Purcheased date' className='form-control' />

                    <Textarea name='note' lblText='Note (optional)' value={inputValue.note} error={inputValue.error_log.note} onChange={inputHandle} placeholder='Note' className='form-control' />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">

                    <Calculation variationHandle={variationHandle} rowsInput={rowsInput} calculation={calculation} addTableRows={addTableRows} product={product} userChoice={userChoice}/>

                  </div>
                  <div className="card-body">
                    <div className="table-responsive text-center user-status">
                      <table className="table ">
                        <thead>
                          <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">Image</th>
                            <th scope="col">price</th>
                            <th scope="col">quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {localStorage.getItem('datas') ? 
                          <Variation rowsData={JSON.parse(localStorage.getItem('datas'))} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                          :
                          []
                        }
                        {/* <Variation rowsData={JSON.parse(localStorage.getItem('datas'))} deleteTableRows={deleteTableRows} handleChange={handleChange} /> */}
                          </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Action</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      
                      <div className="col-xl-6 col-12">
                      <Input type='text' name='sub_total' lblText='Sub Total' value={inputValue.sub_total} error={inputValue.error_log.sub_total} onChange={inputHandle} placeholder='sub Total' className='form-control' />
                      <Input type='text' name='discount' lblText='Discount(%)' value={inputValue.discount} error={inputValue.error_log.discount} onChange={inputHandle} placeholder='Discount(%)' className='form-control' />
                      <Input type='text' name='total' lblText='Total' value={inputValue.total} error={inputValue.error_log.total} onChange={inputHandle} placeholder='Total' className='form-control' />
                      <Input type='text' name='paid' lblText='Paid Amount' value={inputValue.paid} error={inputValue.error_log.paid} onChange={inputHandle} placeholder='Paid Amount' className='form-control' />
                      <Input type='text' name='due' lblText='Due Amount' value={inputValue.due} error={inputValue.error_log.due} onChange={inputHandle} placeholder='Due Amount' className='form-control' />
                        
                      </div>
                      <div className="col-xl-6 col-12 mt-3">
                          <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                          <Link to='/admin/stock' className="d-inline p-2 btn btn-secondary">Cancel</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default New