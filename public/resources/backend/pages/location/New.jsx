import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const New = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        name : '',
        error_log : []
      })
      const handleInput = ( e, editor ) => {
        // const data = editor.getData();
        // console.log(e,editor.name);
        setInputValue( {
              ...inputValue,
              [editor.name] : editor.getData()
            })
    }
      // const handleInput = (e) => {
      //   setInputValue( {
      //     ...inputValue,
      //     [e.target.name] : e.target.value
      //   })
      // }
      useEffect(() => {
        document.title = 'Add location'
      }, [])
      

      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name',inputValue.name);
        axios.post('/api/location',formData).then(res => {
          if(res.data.status === 200){
            localStorage.setItem('success',res.data.message)
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
        <div className="container-fluid" style={{marginTop: '100px'}}>
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

                                            <CKEditor  
                                            name = 'one'
                                            editor={ ClassicEditor } onReady={ editor => { editor.name = 'name'} }
                                                onChange={ handleInput } />
{/* 
                                            <CKEditor  
                                            name='two'
                                            editor={ ClassicEditor } onReady={ editor => { editor.name = 'two' } }
                                                onChange={ handleInput } /> */}
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
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

export default New