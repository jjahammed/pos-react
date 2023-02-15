import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Input from '../../form/Input'
import Date from '../../form/Date'
import Loading from '../extra/Loading';


const Edit = () => {
    const navigate = useNavigate();
    const {trxId} = useParams();

    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState(new window.Date())
    const [inputValue, setInputValue] = useState({
        amount : '',
        purpose : '',
        error_log : []
      })
      const handleInput = ( e, editor ) => {
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
        console.log(trxId);
        document.title = 'investment update'
          axios.get(`/api/investment/${trxId}/edit`).then((res) => {
            if(res.data.status === 200){
              console.log(res.data.data);
              setInputValue({
                ...inputValue,
                amount : res.data.data.amount,
                purpose : res.data.data.purpose,
              })
              setDate(res.data.data.payment_date)
              setLoading(false)
            }else{
              toast.error(res.data.error, {
                theme: "colored",
                })
            }
          }
          );

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
        formData.append("_method", "put");
        axios.post(`/api/investment/${trxId}`,formData).then(res => {
          if(res.data.status === 200){
            console.log(res.data.data);
            localStorage.setItem('success',res.data.message)
            navigate('/admin/investment');
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
                                        <h5>New Investment</h5>
                                    </div>
                                    <div className="card-body">

                                    <Input type='text' name='amount' lblText='investment amount' value={inputValue.amount} error={inputValue.error_log.amount} onChange={handleInput2} className='form-control' />

                                    <Date lblText='Investment Date' value={date} setDateFunction={setDateFunction} error={inputValue.error_log.payment_date}  className='form-control'/>

                                    <h6 className='mb-3'>Purpose </h6>
                                            <CKEditor  
                                            data={inputValue.purpose}
                                            name = 'one'
                                            editor={ ClassicEditor } onReady={ editor => { editor.name = 'purpose'} }
                                                onChange={ handleInput } />

                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Update</button>
                                        <Link to='/admin/investment' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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