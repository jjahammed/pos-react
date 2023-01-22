import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import Input from '../../form/Input'
import axios from 'axios';


const Edit = () => {
    const navigate = useNavigate();
    const {slug} = useParams();
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

                                            <Input type='text' name='name' lblText='location Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='location Name' className='form-control' />

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