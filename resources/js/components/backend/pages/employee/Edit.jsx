import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import Swal from 'sweetalert2'


import Input from '../../form/Input'
import Textarea from '../../form/Textarea';
import Loading from '../extra/Loading';
import Image from '../../form/Image'
import Date from '../../form/Date'


const New = () => {
    const navigate = useNavigate();
    const {empId} = useParams();
    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState([]);
    const [inputValue, setInputValue] = useState({
      uid : '',
      joining_date : new window.Date(),
      name : '',
      phone : '',
      email : '',
      nid : '',
      address : '',
      note : '',
      image : '',
      contact_person : '',
      contact_person_phone : '',
      error_log : []
      })
      const handleInput = (e) => {
        setInputValue( {
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }

      const onChangeImage = (imageList, addUpdateIndex) => {
        setImage(imageList);
      };
      const setDateFunction = (newValue) => {
        setInputValue( {
          ...inputValue,
          joining_date : newValue
        })
      }

      useEffect(() => {
        document.title = 'Update employee'
        console.log(empId);
        axios.get(`/api/employee/${empId}/edit`).then((res) => {
          if(res.data.status === 200){
            console.log(res.data.data);
            setInputValue({
              ...inputValue,
              uid : res.data.data.uid,
              name : res.data.data.name,
              joining_date : res.data.data.joining_date,
              phone : res.data.data.phone,
              email : res.data.data.email,
              nid : res.data.data.nid,
              address : res.data.data.address,
              note : res.data.data.note,
              contact_person : res.data.data.contact_person,
              contact_person_phone : res.data.data.contact_person_phone,
              image : res.data.data.image
            })
          setLoading(false)
          }else{
            Swal.fire('decline','not found','error')
            navigate(`/admin/employee`);
          }
        }
        );
        setLoading(false)
      }, [])
      

      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image',image[0]?.file);
        formData.append('uid',inputValue.uid);
        formData.append('joining_date',new window.Date(inputValue.joining_date).toLocaleDateString('en-CA'));
        formData.append('name',inputValue.name);
        formData.append('phone',inputValue.phone);
        formData.append('email',inputValue.email);
        formData.append('nid',inputValue.nid);
        formData.append('address',inputValue.address);
        formData.append('note',inputValue.note);
        formData.append('contact_person',inputValue.contact_person);
        formData.append('contact_person_phone',inputValue.contact_person_phone);
        formData.append("_method", "put");
        axios.post(`/api/employee/${empId}`,formData).then(res => {
          if(res.data.status === 200){
            localStorage.setItem('success',res.data.message)
            navigate('/admin/employee');
          }else{
             console.log(res.data.error)
            setInputValue( {
              ...inputValue,
              error_log : res.data.error
            })
          }
        }).catch(err => err)
    }

    if(loading){
      <Loading />
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
                                        <h5>Add employee</h5>
                                    </div>
                                    <div className="card-body">

                                            <Input type='text' name='uid' lblText='employee Id' value={inputValue.uid} error={inputValue.error_log.uid} onChange={handleInput} placeholder='employee Id' className='form-control' readOnly/>

                                            <Date lblText='Joining Date' value={inputValue.joining_date} setDateFunction={setDateFunction} error={inputValue.error_log.joining_date}  className='form-control'/>

                                            <Input type='text' name='name' lblText='employee Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='employee Name' className='form-control' />

                                            <Input type='text' name='phone' lblText='employee Phone' value={inputValue.phone} error={inputValue.error_log.phone} onChange={handleInput} placeholder='employee Phone' className='form-control' />

                                            <Input type='email' name='email' lblText='Employee email' value={inputValue.email} error={inputValue.error_log.email} onChange={handleInput} placeholder='Employee email' className='form-control' />

                                            <Input type='nid' name='nid' lblText='Employee nid' value={inputValue.nid} error={inputValue.error_log.nid} onChange={handleInput} placeholder='Employee nid' className='form-control' />

                                            <Textarea name='address' lblText='employee address' value={inputValue.address} error={inputValue.error_log.address} onChange={handleInput} placeholder='employee address' className='form-control' />


                                            <Input type='text' name='contact_person' lblText='contact person' value={inputValue.contact_person} error={inputValue.error_log.contact_person} onChange={handleInput} placeholder='contact person' className='form-control' />

                                            <Input type='text' name='contact_person_phone' lblText='contact person phone' value={inputValue.contact_person_phone} error={inputValue.error_log.contact_person_phone} onChange={handleInput} placeholder='contact person phone' className='form-control' />

                                            <Textarea name='note' lblText='Note (optional)' value={inputValue.note} error={inputValue.error_log.note} onChange={handleInput} placeholder='Note' className='form-control' />

                                            <Input type='hidden' name='image' lblText='image Name' value={inputValue.image} error={inputValue.error_log.image} onChange={handleInput} placeholder='image Name' className='form-control' />
                                            
                                            <Image lblText='Employee Photo' images ={image} image={inputValue.image} onChange={onChangeImage} error={inputValue.error_log.image}/>
                                            
                                        
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/employee' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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