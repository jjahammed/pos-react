import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams,useLocation} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../../form/Input'
import Select from '../../form/Select';
import Classes from '../../form/form.module.css'
import axios from 'axios';


const Edit = () => {
    const navigate = useNavigate();
    const {slug} = useParams();
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
        document.title = 'Sub module Edit'

        axios.get('/api/module').then(res => 
          setModule(res.data.data));

          axios.get(`/api/sub-module/${slug}/edit`).then((res) => {
            if(res.data.status === 200){
              console.log(res.data.data)
              setInputValue({
                ...inputValue,
                name : res.data.data.name,
                module_id : res.data.data.module_id,
              })
            }else{
              toast.error(res.data.error, {
                theme: "colored",
                })
            }
          }
          );

      }, [])



      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name',inputValue.name);
        formData.append('module',inputValue.module_id);
        formData.append("_method", "put");
        axios.post(`/api/sub-module/${slug}`,formData).then(res => {
          if(res.data.status === 200){
              localStorage.setItem('update',res.data.message)
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
                                        <h5>Update Sub module</h5>
                                    </div>
                                    <div className="card-body">
                                          <Select name='module_id' value={inputValue.module_id} lblText='Select A module' error={inputValue.error_log.module_id} onChange={handleInput} className='form-control'>
                                              {module.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>

                                            <Input type='text' name='name' lblText='module Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='module Name' className='form-control' />

                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Update</button>
                                        <Link to='/admin/sub-module' className="d-inline p-2 btn btn-secondary">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit