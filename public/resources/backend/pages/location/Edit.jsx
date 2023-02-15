import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';


const Edit = () => {
    const navigate = useNavigate();
    const {slug} = useParams();
    const [inputValue, setInputValue] = useState({
        name : '',
        error_log : []
      })

    const handleInput = (e,editor) => {
      setInputValue( {
        ...inputValue,
        [editor.name] : editor.getData()
      })
    }

      useEffect(() => {
        document.title = 'location Edit'
          axios.get(`/api/location/${slug}/edit`).then((res) => {
            if(res.data.status === 200){
              setInputValue({
                ...inputValue,
                name : res.data.data.name,
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
        formData.append("_method", "put");
        axios.post(`/api/location/${slug}`,formData).then(res => {
          if(res.data.status === 200){
              localStorage.setItem('update',res.data.message)
              navigate('/admin/location');
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
                                        <h5>Add New location</h5>
                                    </div>
                                    <div className="card-body">

                                            <CKEditor name = 'name' data={inputValue.name} editor={ ClassicEditor } onReady={ editor => { editor.name = 'name'} } onChange={ handleInput } />

                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Update</button>
                                        <Link to='/admin/location' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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