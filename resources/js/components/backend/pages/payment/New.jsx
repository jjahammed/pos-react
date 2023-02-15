import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Input from '../../form/Input'
import Date from '../../form/Date'
import Image from '../../form/Image'
import Select from '../../form/Select'
import Radio from '../../form/Radio'
import Select2 from '../../form/Select2';
import axios from 'axios';
import Loading from '../extra/Loading';


const New = () => {
const navigate = useNavigate();
const {trxId} = useParams();
const [image,setImage] = useState([]);
const [user, setUser] = useState([])
const [paymentOption, setPaymentOption] = useState(0)
const [loading, setLoading] = useState(true)
const [selectedCrediential, setSelectedCrediential] = useState()

const [inputValue, setInputValue] = useState({
    uid : '',
    type : '',
    invoice : '',
    payment_date : new window.Date(),
    amount : '',
    payment_type : '',
    month : '',
    year : '',
    bank_name : '',
    acc_name : '',
    acc_number : '',
    cheque_number : '',
    cheque_date : new window.Date(),
    mob_type : '',
    mob_number : '',
    mob_trxId : '',
    image : '',
    note : '',
    error_log : []
  })

  const handleInput = (e) => {
    if(e.target.type == 'radio'){
      setPaymentOption(e.target.value)
      setInputValue( {
        ...inputValue,
        [e.target.name] : e.target.value
      })
    }else{
      setInputValue( {
        ...inputValue,
        [e.target.name] : e.target.value
      })
    }
    
  }
  // const changepaymentOption = (e) => {
  //   setPaymentOption(e.target.value);
  // }
  const onChangeImage = (imageList, addUpdateIndex) => {
    setImage(imageList);
  };
  const setDateFunction = (newValue) => {
    setInputValue( {
      ...inputValue,
      payment_date : newValue
    })
  }
  const setDateChequeFunction = (newValue) => {
    setInputValue( {
      ...inputValue,
      cheque_date : newValue
    })
  }
  const handlEditor = ( e, editor ) => {
    setInputValue( {
          ...inputValue,
          [editor.name] : editor.getData()
        })
  }

  const userChoice = (choice) => {
    setSelectedCrediential(choice)
    setInputValue( {
      ...inputValue,
      uid : choice.value
    })
  }


  useEffect(() => {
    document.title = 'Add Payment'
    const getProduct = async () => {
      const arr = [];
      await axios.get(`/api/user-payment/${trxId}`).then((res) => {
        let result = res.data.data;
        result.map((item) => {
          return arr.push({value: trxId == 'supplier-payment' ? item.sid : item.uid, label: item.name});
        });
        setUser(arr)
      });
    };
    getProduct();
    setLoading(false);
  }, [])


  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('image',image[0]?.file);
    formData.append('type',trxId);
    formData.append('invoice',inputValue.invoice);
    formData.append('uid',inputValue.uid);
    formData.append('payment_date',new window.Date(inputValue.payment_date).toLocaleDateString('en-CA'));
    formData.append('amount',inputValue.amount);
    formData.append('month',inputValue.month);
    formData.append('year',inputValue.year);
    formData.append('payment_type',inputValue.payment_type);
    formData.append('bank_name',inputValue.bank_name);
    formData.append('acc_name',inputValue.acc_name);
    formData.append('acc_number',inputValue.acc_number);
    formData.append('cheque_number',inputValue.cheque_number);
    formData.append('cheque_date',new window.Date(inputValue.cheque_date).toLocaleDateString('en-CA'));
    formData.append('mob_type',inputValue.mob_type);
    formData.append('mob_number',inputValue.mob_number);
    formData.append('mob_trxId',inputValue.mob_trxId);
    formData.append('note',inputValue.note);
    axios.post('/api/payment',formData).then(res => {
      if(res.data.status === 200){
        localStorage.setItem('success',res.data.message)
        trxId == 'customer-payment' ? navigate('/admin/payment/customer-payment') : trxId == 'supplier-payment' ? navigate('/admin/payment/supplier-payment') : trxId == 'employee-salary' ? navigate('/admin/payment/employee-salary') : trxId == 'investment-withdraw' ? navigate('/admin/payment/investment-withdraw') : navigate('/admin/payment/customer-payment')
        // navigate('/admin/category');
        console.log(res.data.data);
      }else{
        setInputValue( {
          ...inputValue,
          error_log : res.data.error
        })
      }
    }).catch(err => err)
}

if(loading){
  return <Loading />
}

return (
  <div className="container-fluid page-header">
      <div className="row">
      <div className="col-sm-12 col-xl-2"></div>
      <div className="col-sm-12 col-xl-8">
      <div className="row">
        <div className="col-sm-12">
          <form className="theme-form" onSubmit={submitForm}>
              <div className="card">
                  <div className="card-header">
                      <h5>Add New Payment</h5>
                  </div>
                  <div className="card-body">

                          <Input type='text' name='invoice' lblText='Invoice' value={inputValue.invoice} error={inputValue.error_log.invoice} onChange={handleInput} placeholder='Invoice' className='form-control' />


                          <Date lblText='Payment Date' value={inputValue.payment_date} setDateFunction={setDateFunction} error={inputValue.error_log.payment_date}  className='form-control'/>

                          <Select2 name='uid' selectedItem={selectedCrediential} opValue='' placeholder='Select Crediential' lblText='Select Crediential'  userChoice ={userChoice} error={inputValue.error_log.uid} className='form-control basic-single' option={user} />

                          {
                          trxId == 'employee-salary' ? 
                        <div>
                          <Select name='month' value={inputValue.month} opValue='' opText='Select A month' lblText='Select A month' error={inputValue.error_log.month} onChange={handleInput} className='form-control'>
                          <option value='January'>January</option>                
                          <option value='Fabruary'>Fabruary</option>                
                          <option value='March'>March</option>                
                          <option value='April'>April</option>                
                          <option value='May'>May</option>                
                          <option value='June'>June</option>                
                          <option value='July'>July</option>                
                          <option value='August'>August</option>                
                          <option value='September'>September</option>                
                          <option value='Octorber'>Octorber</option>                
                          <option value='November'>November</option>                
                          <option value='December'>December</option>                
                          </Select>

                          <Input type='text' name='year' lblText='year' value={inputValue.year} error={inputValue.error_log.year} onChange={handleInput} placeholder='year' className='form-control' />
                          </div>
                          : ''
                          }


                          <Input type='text' name='amount' lblText='amount' value={inputValue.amount} error={inputValue.error_log.amount} onChange={handleInput} placeholder='amount' className='form-control' />
                          <div className='my-5'>
                          <hr/>
                          <h4 className='text-center'>Select Payment Option</h4>
                          <div className='row my-3'>
                
                          <div className="col-lg-3 col-12 text-center">
                              <Radio name="payment_type" id="radioinline1" lbl="Cash" defaultValue="1" handleInput={handleInput} />
                          </div>
                          <div className="col-lg-3 col-12 text-center">
                              <Radio name="payment_type" id="radioinline2" lbl="Card / Bank" defaultValue="2" handleInput={handleInput}  />
                          </div>
                          <div className="col-lg-3 col-12 text-center">
                              <Radio name="payment_type" id="radioinline3" lbl="Bkash/Nogod" defaultValue="3" handleInput={handleInput}  />
                          </div>
                          <div className="col-lg-3 col-12 text-center">
                              <Radio name="payment_type" id="radioinline4" lbl="Cheque" defaultValue="4" handleInput={handleInput}  />
                          </div>
                      </div>
                      <small className="form-text text-danger text-center">{inputValue.error_log.payment_type}</small>
                      <hr/>
                      </div>
                      {
                      paymentOption == 2 ? 
                        <div>
                          <Input type='text' name='bank_name' lblText='bank name' value={inputValue.bank_name} error={inputValue.error_log.bank_name} onChange={handleInput} placeholder='bank name' className='form-control' />

                          <Input type='text' name='acc_name' lblText='account holder name' value={inputValue.acc_name} error={inputValue.error_log.acc_name} onChange={handleInput} placeholder='account holder name' className='form-control' />

                          <Input type='text' name='acc_number' lblText='account number' value={inputValue.acc_number} error={inputValue.error_log.acc_number} onChange={handleInput} placeholder='account number' className='form-control' />
                        </div>
                        : '' 
                        }
                        {
                         paymentOption == 4 ? 
                        <div>
                          <Input type='text' name='cheque_number' lblText='cheque number' value={inputValue.cheque_number} error={inputValue.error_log.cheque_number} onChange={handleInput} placeholder='cheque number' className='form-control' />

                          <Date lblText='Cheque Date' value={inputValue.cheque_date} setDateFunction={setDateChequeFunction} error={inputValue.error_log.cheque_date}  className='form-control'/>
                        </div>
                        : ''
                        } 
                        {
                          paymentOption == 3 ? 
                          <div>
                            <Select name='mob_type' value={inputValue.mob_type} opValue='' opText='Select A mobile type' lblText='Select A mobile type' error={inputValue.error_log.mob_type} onChange={handleInput} className='form-control'>
                          <option value='Bkash'>Bkash</option>                
                          <option value='Nogod'>Nogod</option>                
                          <option value='Upay'>Upay</option>                
                          <option value='Rocket'>Rocket</option>                
                          </Select>

                          <Input type='text' name='mob_number' lblText='mobile number' value={inputValue.mob_number} error={inputValue.error_log.mob_number} onChange={handleInput} placeholder='mobile number' className='form-control' />

                          <Input type='text' name='mob_trxId' lblText='transection number' value={inputValue.mob_trxId} error={inputValue.error_log.mob_trxId} onChange={handleInput} placeholder='transection number' className='form-control' />
                          </div>
                          : ''
                        }                  

                          

                          <Image lblText='Invoice Copy' images ={image} onChange={onChangeImage} error={inputValue.error_log.image}/>

                          <h6 className='mb-3'>Note (<small className="form-text text-danger text-center">{inputValue.error_log.note}</small>) </h6>
                          <CKEditor name = 'one' editor={ ClassicEditor } onReady={ editor => { editor.name = 'note'} } onChange={ handlEditor } />
                      
                  </div>
                  <div className="card-footer">
                      <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                      <Link to={`/admin/payment/${trxId}`} className="d-inline p-2 btn btn-secondary">Cancel</Link>
                  </div>
              </div>
          </form>
        </div>
      </div>
      </div>
      </div>
  </div>
)
}

export default New