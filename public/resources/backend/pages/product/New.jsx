import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import parse from 'html-react-parser';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Select from '../../form/Select'
import Input from '../../form/Input'

import Classes from '../../form/form.module.css'


const New = () => {

    const navigate = useNavigate();
    const [brand, setBrand] = useState([])
    const [unit, setUnit] = useState([])
    const [location, setLocation] = useState([])
    const [category, setCategory] = useState([])
    const [subcategory, setSubCategory] = useState([])

    const [inputValue, setInputValue] = useState({
        pid : '',
        title : '',
        category_id : '',
        subcategory_id : '',
        brand_id : '',
        unit_id : '',
        location_id : '',
        summery : '',
        description : '',
        note : '',
        buyPrice : '',
        salePrice : '',
        discount : '',
        tax : '',
        alertQty : '',
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
        document.title = 'Add Sub Category'

        axios.get('/api/category').then(res => 
          setCategory(res.data.data));

        axios.get('/api/brand').then(res => 
          setBrand(res.data.data));

        axios.get('/api/location').then(res => 
          setLocation(res.data.data));

        axios.get('/api/unit').then(res => 
          setUnit(res.data.data));
       
      }, [])

     

      const handleCategoryInput = (e) => {
        const cid = e.target.value;
        axios.get(`/api/subCategory/${cid}`).then(res => 
          setSubCategory(res.data.data));
          setInputValue( {
            ...inputValue,
            [e.target.name] : e.target.value
          })
      }
      
     
      


      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image',images[0]?.file);
        formData.append('name',inputValue.name);
        formData.append('category_id',inputValue.category_id);
        axios.post('/api/sub-category',formData).then(res => {
            // console.log(res.data);
          if(res.data.status === 200){
            // console.log(res.data.data)
            localStorage.setItem('success',res.data.message)
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
    <div className="container-fluid" style={{marginTop: '100px',marginBottom: '500px'}}>
            <div className="row">
                <div className="col-sm-12 col-xl-6">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Basic Info</h5>
                                    </div>
                                    <div className="card-body">

                                            <Input type='text' name='pid' lblText='Product Id' value={inputValue.pid} error={inputValue.error_log.pid} onChange={handleInput} placeholder='Product Id' className='form-control' />


                                            <Select name='category_id' value={inputValue.category_id} opValue='' opText='Select Category' lblText='Select A Category' error={inputValue.error_log.category_id} onChange={handleCategoryInput} className='form-control'>
                                              {category.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>
                                            <Select name='subcategory_id' value={inputValue.subcategory_id} opValue='' opText='Select A Subcategory' lblText='Select Subcategory' error={inputValue.error_log.subcategory_id} onChange={handleInput} className='form-control'>
                                              {subcategory.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>
                                            <Input type='text' name='title' lblText='Product title' value={inputValue.title} error={inputValue.error_log.title} onChange={handleInput} placeholder='Product title' className='form-control' />

                                            <Select name='brand_id' value={inputValue.brand_id} opValue='' opText='Select A Brand' lblText='Select A Brand' error={inputValue.error_log.brand_id} onChange={handleInput} className='form-control'>
                                              {brand.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>

                                            <Select name='unit_id' value={inputValue.unit_id} opValue='' opText='Select A Unit' lblText='Select A Unit' error={inputValue.error_log.unit_id} onChange={handleInput} className='form-control'>
                                              {unit.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>

                                    </div>
                                   
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-6">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Pricing Info</h5>
                                    </div>
                                    <div className="card-body">
                                            
                                            <Input type='text' name='buyPrice' lblText='Purcheased Price' value={inputValue.buyPrice} error={inputValue.error_log.buyPrice} onChange={handleInput} placeholder='Purcheased Price' className='form-control' />

                                            <Input type='text' name='salePrice' lblText='Selling Price' value={inputValue.salePrice} error={inputValue.error_log.salePrice} onChange={handleInput} placeholder='Selling Price' className='form-control' />

                                            <Input type='text' name='discount' lblText='discount' value={inputValue.discount} error={inputValue.error_log.discount} onChange={handleInput} placeholder='discount' className='form-control' />

                                            <Input type='text' name='tax' lblText='tax' value={inputValue.tax} error={inputValue.error_log.tax} onChange={handleInput} placeholder='tax' className='form-control' />

                                            <Select name='location_id' value={inputValue.location_id} opValue='' opText='Select A Location' lblText='Select A Location' error={inputValue.error_log.location_id} onChange={handleInput} className='form-control'>
                                              {location.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>

                                            <Input type='text' name='alertQty' lblText='Alert Quantity' value={inputValue.alertQty} error={inputValue.error_log.alertQty} onChange={handleInput} placeholder='Alert Quantity' className='form-control' />
                                            
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
               
                <div className="col-sm-12 col-xl-8">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Description</h5>
                                    </div>
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-sm-12">
                                        <label className="col-sm-4 col-form-label">Summery</label>
                                          <CKEditor editor={ ClassicEditor } onReady={ editor => { editor.name = 'summery'} } onChange={ handleInput } />
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-sm-12">
                                        <label className="col-sm-4 col-form-label">Description</label>

                                          <CKEditor editor={ ClassicEditor } onReady={ editor => { editor.name = 'description'} } onChange={ handleInput } />
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-sm-12">
                                        <label className="col-sm-4 col-form-label">Note</label>

                                          <CKEditor editor={ ClassicEditor } onReady={ editor => { editor.name = 'note'} } onChange={ handleInput } />
                                        </div>
                                      </div>
                                            
                                            
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-4">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Image</h5>
                                    </div>
                                    <div className="card-body">
                                            <div className="mb-3 row">
                                                <div className="col-sm-12">
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
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-xl-12">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Product Variation</h5>
                                    </div>
                                    <div className="card-body">
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-xl-12">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Action</h5>
                                    </div>
                                    <div className="card-body">
                                        <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                        <Link to='/admin/location' className="d-inline p-2 btn btn-secondary">Cancel</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default New