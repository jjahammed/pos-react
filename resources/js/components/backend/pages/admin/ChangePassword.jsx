import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
import Input from '../../form/Input'
import Select from '../../form/Select';
import Textarea from '../../form/Textarea';


const New = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        password : '',
        old_password : '',
        password_confirmation : '',
        error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }
      useEffect(() => {
        document.title = 'Change Password'
      }, [])
      
      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('old_password',inputValue.old_password);
        formData.append('password',inputValue.password);
        formData.append('password_confirmation',inputValue.password_confirmation);
        formData.append('_method','put');
        axios.post('/api/change-password',formData).then(res => {
          if(res.data.status === 200){
            console.log(res.data.data);
            localStorage.setItem('success',res.data.message)
            navigate('/admin/admin-list');
          }else if(res.data.status == 403){
            Swal.fire('decline',res.data.message,'error')
          }else{
            setInputValue( {
              ...inputValue,
              error_log : res.data.error
            })
          }
        }).catch(err => err)
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
                                        <h5>Change Password</h5>
                                    </div>
                                    <div className="card-body">
                                            

                                            <Input type='password' name='old_password' lblText='Old password' value={inputValue.old_password} error={inputValue.error_log.old_password} onChange={handleInput} placeholder='old password' className='form-control' />

                                            <Input type='password' name='password' lblText='password' value={inputValue.password} error={inputValue.error_log.password} onChange={handleInput} placeholder='password' className='form-control' />

                                            <Input type='password' name='password_confirmation' lblText='Confirm password' value={inputValue.password_confirmation} error={inputValue.error_log.password} onChange={handleInput} placeholder='Confirm password' className='form-control' />

                                            
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/admin-list' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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