import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Input from '../../form/Input'
import Date from '../../form/Date'


const New = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(new window.Date())
    // const [date, setDate] = useState('2023-02-02 00:00:00')
    const [inputValue, setInputValue] = useState({
        amount : '',
        purpose : '',
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
      const handleInput2 = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }
      useEffect(() => {
        document.title = 'New expence'
      }, [])

      const setDateFunction = (newValue) => {
        setDate(newValue)
      }
      

      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('date',new window.Date(date).toLocaleDateString('en-CA'));
        formData.append('amount',inputValue.amount);
        formData.append('purpose',inputValue.purpose);
        axios.post('/api/expence',formData).then(res => {
          if(res.data.status === 200){
            console.log(res.data.data);
            localStorage.setItem('success',res.data.message)
            navigate('/admin/expence');
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
                                        <h5>New expence</h5>
                                    </div>
                                    <div className="card-body">

                                    <Input type='text' name='amount' lblText='expence amount' value={inputValue.amount} error={inputValue.error_log.amount} onChange={handleInput2} placeholder='expence amount' className='form-control' />

                                    <Date lblText='expence Date' value={date} setDateFunction={setDateFunction} error={inputValue.error_log.purcheased_date}  className='form-control'/>

                                    <h6 className='mb-3'>Purpose </h6>
                                            <CKEditor  
                                            name = 'one'
                                            editor={ ClassicEditor } onReady={ editor => { editor.name = 'purpose'} }
                                                onChange={ handleInput } />

                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/expence' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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