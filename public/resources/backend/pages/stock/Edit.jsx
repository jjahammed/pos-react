import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import Variation from './Variation2';
import Calculation from './Calculation'
import Generalinfo from './Generalinfo'
import Action from './Action';
import Loading from '../extra/Loading';

const Edit = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])
  const [supplier, setSupplier] = useState([])
  const [selectedSupplier, setSelectedSupplier] = useState()
  const [selectedProduct, setSelectedProduct] = useState()
  const {invoice} = useParams();

  const [inputValue, setInputValue] = useState({
    invoice: '',
    supplier: '',
    supplier_name: '',
    purcheased_date: '',
    note: '',
    sub_total: 0,
    discount: 0,
    total: 0,
    paid: 0,
    due: 0,
    error_log: []
  })

  const [rowsData, setRowsData] = useState(localStorage.getItem('updateDatas') ? JSON.parse(localStorage.getItem('updateDatas')) : []);
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
    localStorage.setItem('updateDatas',JSON.stringify(rowsInput))
    // console.log(rowsInput[index]['product_price']);
  }



  const addTableRows = () => {
    if(rowsInput.product_id == '' || rowsInput.product_qty == ''){
      Swal.fire({icon: 'error',title: 'Oops...',text: 'Product and quantity fields are mandatory'})
    }else{
      
      setRowsData([...rowsData, rowsInput]),
      localStorage.setItem('updateDatas',JSON.stringify([...rowsData, rowsInput]))

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
    console.log(choice)
    const upData = JSON.parse(localStorage.getItem('updateDatas')).filter(item => item.product_id === choice.value)
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
    localStorage.setItem('updateDatas',JSON.stringify(rows))
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
    document.title = location.pathname == '/admin/stock/new' ? 'Update Stock' : 'Update purcheased'

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

    const getSell = async () => {
      await axios.get(`/api/purcheased-product/${invoice}/edit`).then((res) => {
        if(res.data.status === 200){
          const arr = [];
          let result = res.data.product;
            result.map((item) => {
              return arr.push({
                product_id: item.product_id,
                product_pid: item.product.pid,
                product_title: item.product.title,
                product_image: item.product.image,
                product_price: item.product.buyPrice,
                product_qty: item.quantity,
                total_price: item.product.buyPrice * item.quantity,
              });
            });
            setRowsData(arr)
        localStorage.setItem('updateDatas',JSON.stringify(arr))
        setSelectedSupplier({
          label : res.data.sell?.supplier.name,
          value : res.data.sell.supplier_id
        })
        setInputValue({
          ...inputValue,
          invoice: res.data.sell.invoice,
          note: res.data.sell.note,
          supplier: res.data.sell.supplier_id,
          purcheased_date: res.data.sell.purcheased_date,
          sub_total: res.data.sell.sub_total,
          discount: res.data.sell.discount,
          total: res.data.sell.total,
          paid: res.data.sell.paid,
          due: res.data.sell.due,
          error_log: []
        })
        setDate(res.data.sell.purcheased_date)
        setLoading(false)
        }else{
          Swal.fire('success','not found','error')
        }
        

      });
    };

    getSell()
    getProduct();
    getSupplier();
  }, [])

  useEffect(() => {
    calculation();
  }, [rowsData])
  

  const setDateFunction = (newValue) => {
    console.log(newValue)
    setDate(newValue)
  }

  const submitForm = (e) => {
    e.preventDefault();
 
    let formData = new FormData();
    formData.append('products',JSON.stringify(rowsData));
    formData.append('invoice',inputValue.invoice);
    formData.append('supplier',inputValue.supplier);
    formData.append('purcheased_date',new Date(date).toLocaleDateString('en-CA'));
    formData.append('note',inputValue.note);
    formData.append('sub_total',inputValue.sub_total);
    formData.append('total',inputValue.total);
    formData.append('discount',inputValue.discount);
    formData.append('paid',inputValue.paid);
    formData.append('due',inputValue.due);
    formData.append("_method", "put");

    axios.post(`/api/stock/${invoice}`, formData).then(res => {
      if (res.data.status === 200) {
        console.log(res.data.data)
        localStorage.removeItem('updateDatas')
        localStorage.setItem('success', res.data.message)
        location.pathname == '/admin/stock/new' ? navigate(`/admin/stock`) : navigate(`/admin/purcheased-product`)
      } else if(res.data.status === 403){
        Swal.fire('decline',res.data.message,'error')
      } else {
        setInputValue({
          ...inputValue,
          error_log: res.data.error
        })
      }
    }).catch(err => err)
  }

  if(loading){
    return <Loading />
  }

  return (
    <div className="container-fluid page-header" style={{ marginBottom: '500px' }}>
      <form encType='multipart/form-data' onSubmit={submitForm}>

        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>{location.pathname == '/admin/stock/new' ? 'Update Stock' : 'Update purcheased'}</h5>
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
                          localStorage.getItem('updateDatas') ? 
                          <Variation rowsData={JSON.parse(localStorage.getItem('updateDatas'))} deleteTableRows={deleteTableRows} handleChange={handleChange} />
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

export default Edit