import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';

import Input from '../../form/Input'
import Classes from '../../form/form.module.css'


const New = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        name : '',
        error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }

      useEffect(() => {
        document.title = 'Add Module'
      }, [])

      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name',inputValue.name);
        axios.post('/api/module',formData).then(res => {
          if(res.data.status === 200){
            localStorage.setItem('success',res.data.message)
            navigate('/admin/module');
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
                                        <h5>Add New module</h5>
                                    </div>
                                    <div className="card-body">

                                            <Input type='text' name='name' lblText='module Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='module Name' className='form-control' />
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/module' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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