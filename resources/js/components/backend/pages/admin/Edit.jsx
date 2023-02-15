import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import Swal from 'sweetalert2';
import Input from '../../form/Input'
import Select from '../../form/Select';
import Textarea from '../../form/Textarea';
import Loading from '../extra/Loading';


const Edit = () => {
    const {adminId} = useParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
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
        document.title = 'Update Admin'
          axios.get(`/api/admin/${adminId}/edit`).then((res) => {
            if(res.data.status == 200){
            setInputValue({
              ...inputValue,
              role : res.data.data.role_digit,
              uid : res.data.data.uid,
              name : res.data.data.name,
              phone : res.data.data.phone,
              email : res.data.data.email,
              address : res.data.data.address,
            })
            setLoading(false)
          }else{
            Swal.fire('decline',res.data.message,'error')
          }
          }
          );
      }, [])

      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('role',inputValue.role);
        formData.append('uid',inputValue.uid);
        formData.append('name',inputValue.name);
        formData.append('phone',inputValue.phone);
        formData.append('email',inputValue.email);
        formData.append('address',inputValue.address);
        formData.append("_method", "put");
        axios.post(`/api/admin/${adminId}`,formData).then(res => {
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
                                        <h5>Add New Admin</h5>
                                    </div>
                                    <div className="card-body">

                                            <Select name='role' value={inputValue.role} opValue='' opText='Select A Role' lblText='Select A Role' error={inputValue.error_log.role} onChange={handleInput} className='form-control'>
                                              <option value='1219'>Super Admin</option>
                                              <option value='1000'>Sub Admin</option>
                                            </Select>

                                            <Input type='text' name='uid' lblText='admin id' value={inputValue.uid} error={inputValue.error_log.uid} onChange={handleInput} 
                                            placeholder='admin id' className='form-control' readOnly/>

                                            <Input type='text' name='name' lblText='Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='Name' className='form-control' />

                                            

                                            {/* <Input type='password' name='password' lblText='password' value={inputValue.password} error={inputValue.error_log.password} onChange={handleInput} placeholder='password' className='form-control' />

                                            <Input type='password' name='password_confirmation' lblText='Confirm password' value={inputValue.password_confirmation} error={inputValue.error_log.password} onChange={handleInput} placeholder='Confirm password' className='form-control' /> */}

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

export default Edit