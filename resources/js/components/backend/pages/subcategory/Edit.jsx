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
    const [category, setCategory] = useState([])
    const [inputValue, setInputValue] = useState({
        name : '',
        category_id : '',
        category_text : '',
        image : '',
        error_log : []
      })
    const [images, setImages] = useState([]);
    const onChange = (imageList) => {
      setImages(imageList);
    };


    const handleInput = (e) => {
      setInputValue( {
        ...inputValue,
        [e.target.name] : e.target.value
      })
    }
      useEffect(() => {
        document.title = 'Sub Category Edit'

        axios.get('/api/category').then(res => 
          setCategory(res.data.data));

          axios.get(`/api/sub-category/${slug}/edit`).then((res) => {
            if(res.data.status === 200){
              setInputValue({
                ...inputValue,
                name : res.data.data.name,
                category_id : res.data.data.category_id,
                category_text : res.data.data.category.name,
                image : res.data.data.image
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
        formData.append('images',images[0]?.file);
        formData.append('name',inputValue.name);
        formData.append('category_id',inputValue.category_id);
        formData.append('image',inputValue.image);
        formData.append("_method", "put");
        axios.post(`/api/sub-category/${slug}`,formData).then(res => {
          if(res.data.status === 200){
            // console.log(res.data.data)
            // Swal.fire('success',res.data.message,'success')
              localStorage.setItem('update',res.data.message)
              navigate('/admin/sub-category');
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
                                        <h5>Update Sub Category</h5>
                                    </div>
                                    <div className="card-body">
                                          <Select name='category_id' value={inputValue.category_id} opValue={inputValue.category_id} opText={inputValue.category_text} lblText='Select A Category' error={inputValue.error_log.category_id} onChange={handleInput} className='form-control'>
                                              {category.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>

                                            <Input type='text' name='name' lblText='Category Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='Category Name' className='form-control' />

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
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Update</button>
                                        <Link to='/admin/sub-category' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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