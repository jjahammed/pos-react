import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'


import Input from '../../form/Input'
import Classes from '../../form/form.module.css'
import Select2 from '../../form/Select2'
import Textarea from '../../form/Textarea'


const New = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([])
    const [inputValue, setInputValue] = useState({
        reason : '',
        product_id : '',
        product_title : '',
        pid : '',
        qty : '',
        note : '',
        error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }

      const userChoice = (choice) => {
        console.log(choice);
        setInputValue( {
          ...inputValue,
          product_id : choice?.value,
          product_title : choice?.label,
          pid : choice?.pid
        })
      }

      const userChoice2 = (choice) => {
        console.log(choice);
        setInputValue( {
          ...inputValue,
          reason : choice?.value,
        })
      }


      useEffect(() => {
        document.title = 'Add Stock'

        const getData = async () => {
          const arr = [];
          await axios.get('/api/product').then((res) => {
            let result = res.data.data;
            result.map((item) => {
              return arr.push({value: item.id, label: item.title, pid : item.pid});
            });
            setProduct(arr)
          });
        };
        getData();

      }, [])
      
     
      const stOption = [
        {value: 'Damage', label: 'Damage Product'},
        {value: 'Lost', label: 'Lost Product'},
        {value: 'Others', label: 'Other Reason'},
      ]


      const submitForm = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        let formData = new FormData();
        formData.append('product_title',inputValue.product_title);
        formData.append('product_id',inputValue.product_id);
        formData.append('reason',inputValue.reason);
        formData.append('pid',inputValue.pid);
        formData.append('qty',inputValue.qty);
        formData.append('note',inputValue.note);
        formData.append("_method", "get");
        axios.post('/api/stock/create',formData).then(res => {
            // console.log(res.data.data);
          if(res.data.status === 200){
            console.log(res.data.data)
            localStorage.setItem('success',res.data.message)
            navigate('/admin/stock');
          }else{
            setInputValue( {
              ...inputValue,
              error_log : res.data.error
            })
            
          }
        }).catch(err => err)

        // console.log(inputValue.error_log);
    }
    return (
        <div className="container-fluid" style={{marginTop: '100px'}}>
            <div className="row">
                <div className="col-sm-12 col-xl-2"></div>
                <div className="col-sm-12 col-xl-8">
                    <div className="row">
                        <div className="col-sm-12">
                            <form className="theme-form" onSubmit={submitForm}>
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Add Stock</h5>
                                    </div>
                                    <div className="card-body">

                                            
                                            <Select2 name='product_id' value={inputValue.product_id} opValue='' opText='Select A Product' lblText='Select A Product' error={inputValue.error_log.product_id} onChange={handleInput} className='form-control basic-single' option={product} userChoice={userChoice} />

                                            <Select2 name='reason' value={inputValue.reason} opValue='' opText='Select A Reason' lblText='Select A Reason' error={inputValue.error_log.reason} onChange={handleInput} className='form-control basic-single' option={stOption} userChoice={userChoice2} />
                                              

                                            <Input type='number' name='qty' lblText='Quantity' value={inputValue.qty} error={inputValue.error_log.qty} onChange={handleInput} placeholder='Quantity' className='form-control' />
                                            
                                           <Textarea name='note' lblText='Note (optional)' value={inputValue.note} error={inputValue.error_log.note} onChange={handleInput} placeholder='Note' className='form-control' />
                                        
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/stock' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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