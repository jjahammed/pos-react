import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Variation from './Variation2';
import Calculation from './Calculation'
import Generalinfo from './Generalinfo'
import Action from './Action';

const New = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [product, setProduct] = useState([])
  const [stock, setStock] = useState([])
  const [supplier, setSupplier] = useState([])
  const [selectedSupplier, setSelectedSupplier] = useState()
  const [selectedProduct, setSelectedProduct] = useState()

  const [inputValue, setInputValue] = useState({
    paymentOption: '',
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

  const [rowsData, setRowsData] = useState(localStorage.getItem('returnData') ? JSON.parse(localStorage.getItem('returnData')) : []);
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
    localStorage.setItem('returnData',JSON.stringify(rowsInput))
    // console.log(rowsInput[index]['product_price']);
  }



  const addTableRows = () => {
    if(rowsInput.product_id == '' || rowsInput.product_qty == ''){
      Swal.fire({icon: 'error',title: 'Oops...',text: 'Product and quantity fields are mandatory'})
    }else{
      
      setRowsData([...rowsData, rowsInput]),
      localStorage.setItem('returnData',JSON.stringify([...rowsData, rowsInput]))

      setRowsInput({
        product_id: '',
        product_pid: '',
        product_title: '',
        product_image: '',
        product_price: '',
        product_qty: '',
        total_price: '',
      })

      setSelectedProduct({
        value : 0,
        label : 'Select  a Product'
      })
      
    }
    console.log(rowsData);
  }

  const userChoice = (choice) => {
    if(localStorage.getItem('returnData')){
      const upData = JSON.parse(localStorage.getItem('returnData')).filter(item => item.product_id === choice.value)
    if(upData.length > 0){
      setSelectedProduct({
        value : 0,
        label : 'Select  a Product'
      })
      Swal.fire('Decline', choice.label + ' already been added.','error')
    }else{
      setSelectedProduct(choice)
      setRowsInput({
        ...rowsInput,
        product_id: choice?.value,
        product_title: choice?.label,
        product_pid: choice?.product_pid,
        product_image: choice?.product_image,
        product_price: choice?.product_price,
      })
    }
    }else{
      setSelectedProduct(choice)
      setRowsInput({
        ...rowsInput,
        product_id: choice?.value,
        product_title: choice?.label,
        product_pid: choice?.product_pid,
        product_image: choice?.product_image,
        product_price: choice?.product_price,
      })
    }
    
  }
  const userSupplierChoice = (choice) => {
    console.log(choice)
    setSelectedSupplier(choice)
      setInputValue({
      ...inputValue,
      supplier: choice?.value,
    })
  }

  const variationHandle = (e) => {
    if(rowsInput.product_price == ''){
      Swal.fire('decline','You should select product first' ,'error')
    }else{
      const stock_quantity = stock.filter(item => 
        item.product_id == rowsInput.product_id ? item : 0)
     if(stock_quantity[0].quantity < e.target.value){
       Swal.fire('decline','You Can Only Return ' + stock_quantity[0].quantity + ' item' ,'error')
       setRowsInput({
         ...rowsInput,
         product_qty : stock_quantity[0].quantity,
         total_price : stock_quantity[0].quantity * rowsInput.product_price
       })
     }else{
       setRowsInput({
         ...rowsInput,
         product_qty : e.target.value,
         total_price : e.target.value * rowsInput.product_price
       })
     }
    }
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
    localStorage.setItem('returnData',JSON.stringify(rows))
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
    document.title = location.pathname == '/admin/purcheased-product/return/new' ? 'Return Product' : 'Add purcheased'
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
          return arr.push({ value: item.id, label: item.title, product_pid: item.pid, product_image : item.image, product_price : item.buyPrice });
        });
        setProduct(arr)
      });
    };
    const getStock = async () => {
      await axios.get('/api/stock').then((res) => {
        setStock(res.data.data)
      });
    };
    getProduct();
    getSupplier();
    getStock();
  }, [])

  useEffect(() => {
    calculation();
  }, [rowsData])
  

  const setDateFunction = (newValue) => {
    setDate(newValue)
  }

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('products',JSON.stringify(rowsData));
    formData.append('invoice',inputValue.invoice);
    formData.append('paymentOption',inputValue.paymentOption);
    formData.append('supplier',inputValue.supplier);
    formData.append('purcheased_date',new Date(date).toLocaleDateString('en-CA'));
    formData.append('note',inputValue.note);
    formData.append('sub_total',inputValue.sub_total);
    formData.append('total',inputValue.total);
    formData.append('discount',inputValue.discount);
    formData.append('paid',inputValue.paid);
    formData.append('due',inputValue.due);

    axios.post('/api/purcheased-product', formData).then(res => {
      if (res.data.status === 200) {
        console.log(res.data.data)
        localStorage.setItem('success', res.data.message)
        localStorage.removeItem('returnData')
        location.pathname == '/admin/purcheased-product/return/new' ? navigate(`/admin/purcheased-product/return`) : navigate(`/admin/purcheased-product`)
      } else if(res.data.status === 403){
        Swal.fire('decline',res.data.message,'error')
      }else {
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
              <h5>{location.pathname == '/admin/purcheased-product/return/new' ? 'Return Product' : 'Add purcheased'}</h5>
              </div>
              <Generalinfo selectedSupplier = {selectedSupplier} inputValue={inputValue} date={date} setDateFunction={setDateFunction} inputHandle={inputHandle} supplier={supplier} userSupplierChoice={userSupplierChoice} userChoice={userChoice} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">

                    <Calculation selectedProduct={selectedProduct} variationHandle={variationHandle} rowsInput={rowsInput} calculation={calculation} addTableRows={addTableRows} product={product} userChoice={userChoice}/>

                  </div>
                  {
                          localStorage.getItem('returnData') ? 
                          <Variation rowsData={JSON.parse(localStorage.getItem('returnData'))} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                          :
                          []
                        }
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
                    <Action inputValue={inputValue} inputHandle={inputHandle}/>
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