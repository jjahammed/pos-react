import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import parse from 'html-react-parser';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Select from '../../form/Select'
import Input from '../../form/Input'
import Variation from './Variation';

import Classes from '../../form/form.module.css'


const New = () => {

    const navigate = useNavigate();
    const [brand, setBrand] = useState([])
    const [unit, setUnit] = useState([])
    const [location, setLocation] = useState([])
    const [category, setCategory] = useState([])
    const [subcategory, setSubCategory] = useState([])
    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{
      const rowsInput={
          color:'',
          size:'',
          img:'',  
          pprice:'',  
          sprice:'', 
          dis:''  
      } 
      setRowsData([...rowsData, rowsInput])
    }
      const deleteTableRows = (index)=>{
            const rows = [...rowsData];
            rows.splice(index, 1);
            setRowsData(rows);
      }

      const handleChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
      }

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
        buyPrice : 0,
        setPrice : 0,
        discount : 0,
        salePrice : 0,
        alertQty : '',
        color : '#df0707',
        size : '',
        error_log : []
      })
      const handleInput = (e) => {
        if(e.target.name == 'discount'){
          let dis = inputValue.setPrice * e.target.value / 100;
          let sprice = parseFloat(inputValue.setPrice) - parseFloat(dis);
          setInputValue( {
            ...inputValue,
            [e.target.name] : e.target.value,
            salePrice : sprice
          })
        }else if(e.target.name == 'setPrice'){
          let dis = e.target.value * inputValue.discount / 100;
          let sprice = parseFloat(e.target.value) - parseFloat(dis);
          setInputValue( {
            ...inputValue,
            [e.target.name] : e.target.value,
            salePrice : sprice
          })
        }else{
          setInputValue( {
            ...inputValue,
            [e.target.name] : e.target.value
          })
        }
        
      }
      const handleEditorInput = ( e, editor ) => {
        setInputValue( {
              ...inputValue,
              [editor.name] : editor.getData()
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
        document.title = 'Add Product'

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
          if(cid){
            axios.get(`/api/subCategory/${cid}`).then(res => 
              setSubCategory(res.data.data));
              setInputValue( {
                ...inputValue,
                [e.target.name] : e.target.value
              })
          }else{
            setInputValue( {
              ...inputValue,
              [e.target.name] : e.target.value
            })
          }
      }

      const generateUniqueNumber = () => {
        let uniqueNumber = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        setInputValue( {
          ...inputValue,
          pid : uniqueNumber
        })
      }
      
      


      const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image',images[0]?.file);
        formData.append('pid',inputValue.pid);
        formData.append('title',inputValue.title);
        formData.append('category_id',inputValue.category_id);
        formData.append('subcategory_id',inputValue.subcategory_id);
        formData.append('brand_id',inputValue.brand_id);
        formData.append('unit_id',inputValue.unit_id);
        formData.append('location_id',inputValue.location_id);
        formData.append('summery',inputValue.summery);
        formData.append('description',inputValue.description);
        formData.append('note',inputValue.note);
        formData.append('buyPrice',inputValue.buyPrice);
        formData.append('setPrice',inputValue.setPrice);
        formData.append('salePrice',inputValue.salePrice);
        formData.append('discount',inputValue.discount);
        formData.append('alertQty',inputValue.alertQty);
        formData.append('color',inputValue.color);
        formData.append('size',inputValue.size);

        axios.post('/api/product',formData).then(res => {
            // console.log(res.data);
          if(res.data.status === 200){
            // console.log(res.data.data)
            localStorage.setItem('success',res.data.message)
            navigate('/admin/product');
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
        <form encType='multipart/form-data' onSubmit={submitForm}>
        <div className="row">
        <div className="col-sm-12 col-xl-12">
          <div className="card">
            <div className="card-header btn-primary text-center">
                <h5>Product Info</h5>
            </div>
          </div>
        </div>
        </div>
            <div className="row">
                <div className="col-sm-12 col-xl-6">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Basic Info</h5>
                                    </div>
                                    <div className="card-body">

                                            <Input type='text' name='pid' lblText='Product Id' value={inputValue.pid} error={inputValue.error_log.pid} onChange={handleInput} placeholder='Product Id' className='form-control' onClick={generateUniqueNumber}/>


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

                                            <Input type='color' name='color' lblText='Product color' value={inputValue.color} error={inputValue.error_log.color} onChange={handleInput} placeholder='Product color' className='form-control' />

                                            <Input type='text' name='size' lblText='Product size' value={inputValue.size} error={inputValue.error_log.size} onChange={handleInput} placeholder='Product size' className='form-control' />

                                            

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
                                              
                                          <Select name='unit_id' value={inputValue.unit_id} opValue='' opText='Select A Unit' lblText='Select A Unit' error={inputValue.error_log.unit_id} onChange={handleInput} className='form-control'>
                                              {unit.map( (item) => {
                                                return <option value={item.id} key={item.id}> {item.name} </option>
                                              })}
                                            </Select>
                                            
                                            <Input type='text' name='buyPrice' lblText='Purcheased Price' value={inputValue.buyPrice} error={inputValue.error_log.buyPrice} onChange={handleInput} placeholder='Purcheased Price' className='form-control' />

                                            <Input type='text' name='setPrice' lblText='Setting Price' value={inputValue.setPrice} error={inputValue.error_log.setPrice} onChange={handleInput} placeholder='Setting Price' className='form-control' />

                                            
                                            <Input type='text' name='discount' lblText='discount(%)' value={inputValue.discount} error={inputValue.error_log.discount} onChange={handleInput} placeholder='discount' className='form-control' />

                                            <Input type='text' name='salePrice' lblText='Selling Price' value={inputValue.salePrice} error={inputValue.error_log.salePrice} onChange={handleInput} placeholder='Selling Price' className='form-control' readOnly/>


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
                                          <CKEditor editor={ ClassicEditor } onReady={ editor => { editor.name = 'summery'} } onChange={ handleEditorInput } />
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-sm-12">
                                        <label className="col-sm-4 col-form-label">Description</label>

                                          <CKEditor editor={ ClassicEditor } onReady={ editor => { editor.name = 'description'} } onChange={ handleEditorInput } />
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-sm-12">
                                        <label className="col-sm-4 col-form-label">Note</label>

                                          <CKEditor editor={ ClassicEditor } onReady={ editor => { editor.name = 'note'} } onChange={ handleEditorInput } />
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
                                                <div style={{ marginLeft:'-65px' }}className="upload__image-wrapper">
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
            {/* <div className="row">
                <div className="col-sm-12 col-xl-12">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className='d-inline'>Product Variation</h5>
                                      <button type='button' className='btn btn-primary pull-right d-inline' onClick={addTableRows}><i className="fa-regular fa-plus text-bold text-light"></i></button>
                                    </div>
                                    <div className="card-body">
                                      <div className="table-responsive text-center user-status">
                                        <table className="table ">
                                          <thead>
                                            <tr className='text-center'>
                                              <th scope="col">Color</th>
                                              <th scope="col">Size</th>
                                              <th scope="col">Purcheased Price</th>
                                              <th scope="col">Selling Price</th>
                                              <th scope="col">Discount</th>
                                              <th scope="col">Image</th>
                                              <th scope="col">Action</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <Variation rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div> */}
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
                                        <Link to='/admin/product' className="d-inline px-4 py-2 btn btn-secondary">Cancel</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default New