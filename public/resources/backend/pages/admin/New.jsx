import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Input from '../../form/Input'
import Select from '../../form/Select';
import Textarea from '../../form/Textarea';


const New = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        role : '',
        uid : '',
        name : '',
        password : '',
        password_confirmation : '',
        phone : '',
        email : '',
        address : '',
        error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }
      useEffect(() => {
        document.title = 'Add New Admin'
      }, [])
      
      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('role',inputValue.role);
        formData.append('uid',inputValue.uid);
        formData.append('name',inputValue.name);
        formData.append('password',inputValue.password);
        formData.append('password_confirmation',inputValue.password_confirmation);
        formData.append('phone',inputValue.phone);
        formData.append('email',inputValue.email);
        formData.append('address',inputValue.address);
        axios.post('/api/admin',formData).then(res => {
          if(res.data.status === 200){
            localStorage.setItem('success',res.data.message)
            navigate('/admin/admin-list');
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
                                        <h5>Add New Admin</h5>
                                    </div>
                                    <div className="card-body">

                                            <Select name='role' value={inputValue.role} opValue='' opText='Select A Role' lblText='Select A Role' error={inputValue.error_log.role} onChange={handleInput} className='form-control'>
                                              <option value='1219'>Super Admin</option>
                                              <option value='1000'>Sub Admin</option>
                                            </Select>

                                            <Input type='text' name='uid' lblText='admin id' value={inputValue.uid} error={inputValue.error_log.uid} onChange={handleInput} 
                                            placeholder='admin id' className='form-control' />

                                            <Input type='text' name='name' lblText='Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='Name' className='form-control' />

                                            

                                            <Input type='password' name='password' lblText='password' value={inputValue.password} error={inputValue.error_log.password} onChange={handleInput} placeholder='password' className='form-control' />

                                            <Input type='password' name='password_confirmation' lblText='Confirm password' value={inputValue.password_confirmation} error={inputValue.error_log.password} onChange={handleInput} placeholder='Confirm password' className='form-control' />

                                            <Input type='text' name='email' lblText='email' value={inputValue.email} error={inputValue.error_log.email} onChange={handleInput} placeholder='email' className='form-control' />

                                            <Input type='text' name='phone' lblText='phone' value={inputValue.phone} error={inputValue.error_log.phone} onChange={handleInput} placeholder='phone' className='form-control' />

                                            <Textarea name='address' lblText='address' value={inputValue.address} error={inputValue.error_log.address} onChange={handleInput} placeholder='address' className='form-control' />
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