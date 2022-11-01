import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';

import Input from '../../form/Input'
import Classes from '../../form/form.module.css'
import File from '../../form/File'

const New = () => {

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
      const [images, setImages] = useState([]);
      const maxNumber = 69;

      const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        setImages(imageList);
      };


      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image',images[0]?.file);
        formData.append('name',inputValue.name);
        axios.post('/api/category',formData).then(res => {
            // console.log(res.data);
          if(res.data.status === 200){
            console.log(res.data.data)
          
            // Swal.fire('success',res.data.message,'success')
            // navigate('/admin/product');
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
                                        <h5>Add New2 Category</h5>
                                    </div>
                                    <div className="card-body">

                                            <Input type='text' name='name' lblText='Category Name' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='Category Name' className='form-control' />
                                            
                                            <div className="mb-3 row">
                                                <label className="col-sm-3 col-form-label">Image</label>
                                                <div className="col-sm-9">
                                                <ImageUploading
                                              // multiple
                                              value={images}
                                              onChange={onChange}
                                              maxNumber={maxNumber}
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
                                                  {imageList.length == 1 ? '' : 'Click or Drop image'}

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
                                        <Link to='/admin/dashboard' className="d-inline p-2 btn btn-secondary">Cancel</Link>
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