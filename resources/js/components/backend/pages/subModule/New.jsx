import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';

import Input from '../../form/Input'
import Classes from '../../form/form.module.css'
import Select from '../../form/Select';


const New = () => {
    const navigate = useNavigate();
    const [module, setModule] = useState([])
    const [inputValue, setInputValue] = useState({
        name : '',
        module_id : '',
        error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }

      useEffect(() => {
        document.title = 'Add Sub module'
        axios.get('/api/module').then(res => 
          setModule(res.data.data));
      }, [])
      
     
      


      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name',inputValue.name);
        formData.append('module',inputValue.module_id);
        axios.post('/api/sub-module',formData).then(res => {
          if(res.data.status === 200){
              // console.log(res.data.data)
            localStorage.setItem('success',res.data.message)
            navigate('/admin/sub-module');
          }else{
            setInputValue( {
              ...inputValue,
              error_log : res.data.error
            })
          }
        }).catch(err => err)
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
                                        <h5>Add New Sub module</h5>
                                    </div>
                                    <div className="card-body">

                                            <Select name='module_id' value={inputValue.module_id} opValue='' opText='Select A module' lblText='Select A module' error={inputValue.error_log.module_id} onChange={handleInput} className='form-control'>
                                              {module.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>
                                            <Input type='text' name='name' lblText='Route Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='Route Name (/admin/product)' className='form-control' />
                                        
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/sub-module' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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