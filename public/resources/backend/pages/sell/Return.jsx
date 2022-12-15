import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
import Input from '../../form/Input'

const Return = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        invoice : '',
        error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }

      const submitForm = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        let formData = new FormData();
        formData.append('invoice',inputValue.invoice);
        formData.append('_method','get');
        axios.post('/api/sell-product/create',formData).then(res => {
          if(res.data.status === 200){
            console.log(res.data.data)
            // localStorage.setItem('success',res.data.message)
            navigate(`/admin/sell-product/return/${res.data.data.invoice}`);
          }else if(res.data.status === 404){
            Swal.fire('decline',res.data.message,'error')
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
                                        <h5>Return Product</h5>
                                    </div>
                                    <div className="card-body">
                                            <Input type='text' name='invoice' lblText='Invoice' value={inputValue.invoice} error={inputValue.error_log.invoice} onChange={handleInput} placeholder='Invoice' className='form-control' />
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/sell-product' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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

export default Return