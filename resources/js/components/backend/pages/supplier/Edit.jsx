import React,{useState,useEffect} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';


import Input from '../../form/Input'
import Classes from '../../form/form.module.css'
import Select from '../../form/Select';
import Textarea from '../../form/Textarea';
import Loading from '../extra/Loading';


const New = () => {
    const navigate = useNavigate();
    const {sid} = useParams();
    const [loading, setLoading] = useState(true)
    const [inputValue, setInputValue] = useState({
        sid : '',
        name : '',
        phone : '',
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
      const [images, setImages] = useState([]);
      const maxNumber = 69;

      const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList);
        setImages(imageList);
      };

      useEffect(() => {
        document.title = 'Update Supplier'

        axios.get(`/api/supplier/${sid}/edit`).then((res) => {
          if(res.data.status === 200){
            setInputValue({
              ...inputValue,
              sid : res.data.data.name,
              name : res.data.data.name,
              phone : res.data.data.phone,
              address : res.data.data.address,
              note : res.data.data.note,
              contact_person : res.data.data.contact_person,
              contact_person_phone : res.data.data.contact_person_phone,
              image : res.data.data.image
            })
          }else{
            toast.error(res.data.error, {
              theme: "colored",
              })
          }
        }
        );
        setLoading(false)
      }, [])
      

      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('images',images[0]?.file);
        formData.append('sid',inputValue.sid);
        formData.append('name',inputValue.name);
        formData.append('phone',inputValue.phone);
        formData.append('address',inputValue.address);
        formData.append('note',inputValue.note);
        formData.append('contact_person',inputValue.contact_person);
        formData.append('contact_person_phone',inputValue.contact_person_phone);
        formData.append("_method", "put");
        axios.post(`/api/supplier/${sid}`,formData).then(res => {
            // console.log(res.data);
          if(res.data.status === 200){
            // console.log(res.data.data)
            localStorage.setItem('success',res.data.message)
            navigate('/admin/supplier');
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
        <div className="container-fluid" style={{marginTop: '100px'}}>
            <div className="row">
                <div className="col-sm-12 col-xl-2"></div>
                <div className="col-sm-12 col-xl-8">
                    <div className="row">
                        <div className="col-sm-12">
                            <form className="theme-form" onSubmit={submitForm}>
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Add Supplier</h5>
                                    </div>
                                    <div className="card-body">

                                            <Input type='text' name='sid' lblText='Supplier Id' value={inputValue.sid} error={inputValue.error_log.sid} onChange={handleInput} placeholder='Supplier Id' className='form-control' />

                                            <Input type='text' name='name' lblText='Supplier Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='Supplier Name' className='form-control' />

                                            <Input type='text' name='phone' lblText='Supplier Phone' value={inputValue.phone} error={inputValue.error_log.phone} onChange={handleInput} placeholder='Supplier Phone' className='form-control' />

                                            <Textarea name='address' lblText='Supplier address' value={inputValue.address} error={inputValue.error_log.address} onChange={handleInput} placeholder='Supplier address' className='form-control' />


                                            <Input type='text' name='contact_person' lblText='contact person' value={inputValue.contact_person} error={inputValue.error_log.contact_person} onChange={handleInput} placeholder='contact person' className='form-control' />

                                            <Input type='text' name='contact_person_phone' lblText='contact person phone' value={inputValue.contact_person_phone} error={inputValue.error_log.contact_person_phone} onChange={handleInput} placeholder='contact person phone' className='form-control' />

                                            <Textarea name='note' lblText='Note (optional)' value={inputValue.note} error={inputValue.error_log.note} onChange={handleInput} placeholder='Note' className='form-control' />

                                            <Input type='hidden' name='image' lblText='image Name' value={inputValue.image} error={inputValue.error_log.image} onChange={handleInput} placeholder='image Name' className='form-control' />
                                            
                                            <div className="mb-3 row">
                                                <label className="col-sm-3 col-form-label">Image</label>
                                                <div className="col-sm-9">
                                                <ImageUploading
                                              // multiple
                                              value={images}
                                              onChange={onChange}
                                              dataURLKey="data_url"
                                            >
                                              {({
                                                imageList,
                                                onImageUpload,
                                                onImageRemoveAll,
                                                onImageUpdate,
                                                onImageRemove,
                                                isDragging,
                                                dragProps,
                                              }) => (
                                                // write your building UI
                                                <div className="upload__image-wrapper">
                                                  <button className={Classes.imageStyle} type='button'
                                                    style={isDragging ? { color: 'red' } : undefined}
                                                    onClick={onImageUpload}
                                                    {...dragProps}
                                                  > 
                                                  {imageList.length == 1 ? '' : <img className={Classes.imgUpload} src={'/'+ inputValue.image} alt="" />}

                                                  {imageList.map((image, index) => (
                                                    <div key={index} className="image-item">
                                                      <img className={Classes.imgUpload} src={image['data_url']} alt="" />
                                                      <div className="image-item__btn-wrapper">
                                                      </div>
                                                    </div>
                                                  ))} 
                                                    
                                                  </button>
                                                  &nbsp;
                                                </div>
                                              )}
                                            </ImageUploading>
                                                    <small className="form-text text-danger">{inputValue.error_log.image}</small>
                                                </div>
                                            </div>
                                            
                                        
                                    </div>
                                    <div className="card-footer">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/supplier' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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