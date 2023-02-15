import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'
import axios from 'axios';
import Swal from 'sweetalert2';


const Table = ({product,deleteProduct,amountSort,titleSort,sortData,search,serchHandle,disableProduct,enableProduct,checkBoxDisableHandle,checkBoxAlertHandle}) => {

  const [pageSize, setPageSize] = useState(10)
  
  const serchSelect = (e) => {
    setPageSize(e.target.value);
  }

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPage,
    dispPage,
    dispSearchPage
    ]=usePagination(pageSize,product.length);

   
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const tmpData = product.slice(firstPageIndex, lastPageIndex);

    // const tmpData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * pageSize;
    //   const lastPageIndex = firstPageIndex + pageSize;
    //   return product.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage,pageSize,search]);

      

  return (
    <div>

          <div className='row'>
            <div className="col-md-4">
            <div className="form-check checkbox checkbox-primary mb-0 col-md-12">
              <input className="form-check-input" type="checkbox" title='disable' name="disable" id='disable' value='disable' onChange={checkBoxDisableHandle}/>
              <label className="form-check-label" htmlFor='disable'>Disable Product List</label>
              </div>
            </div>
            <div className="col-md-4">
            <div className="form-check checkbox checkbox-primary mb-0 col-md-12">
              <input className="form-check-input" type="checkbox" title='alert' name="alert" id='alert' value='alert' onChange={checkBoxAlertHandle}/>
              <label className="form-check-label" htmlFor='alert'>Alert Product Stock</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-5">
              <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input id='search' type="text" className="form-control" plactholder='search...' value={search} onChange={(e) => { dispSearchPage(); serchHandle(e); }}/>
                </div>
              </div>
            </div>

          
            <div className="table-responsive text-center user-status">
              <table className="table ">
                <thead>
                <tr className='text-center'>
                  <th scope="col">#</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Title  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Category</th>
                  <th scope="col">Brand</th>
                  <th scope="col">image</th>
                  <th scope="col">Purcheased Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>sell Price <span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id} className={item.status === 0 ? 'text-secondary' : 'text-dark'}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.title}</td>
                        <td scope="col">
                        <Link to={`/admin/product/category/${item.category?.slug}`}>{item.category?.name}</Link>
                        </td>
                        <td scope="col">
                        <Link to={`/admin/product/brand/${item.brand?.slug}`}>{item.brand?.name}</Link>
                        </td>
                        <td className="border-bottom-0" scope="row"><img src={'/' + item.image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> </td>
                        <td scope="col">{item.buyPrice}</td>
                        <td scope="col">{item.discount}%</td>
                        <td scope="col">{item.salePrice}</td>
                        <td scope="col" className='text-center'>
                          
                            {
                              item.status === 1 ?
                              <button className='btn btn-outline-warning' onClick={(e) => disableProduct(e,item.slug)}><i className="fa-solid fa-square-minus"></i></button>
                              :
                              <button className='btn btn-outline-warning' onClick={(e) => enableProduct(e,item.slug)}><i className="fa-solid fa-square-plus"></i></button>
                            }
                            

                            <Link to={`/admin/product/${item.slug}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
                            <Link to={`/admin/product/${item.slug}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <button className='btn btn-outline-danger' onClick={(e) => deleteProduct(e,item.slug)}><i className="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                  )
                })}
                  
                </tbody>
              </table>
            </div>
              <div className="row" style={{marginTop : '50px'}}>
                <div className="col-md-9">
                <Pagination count={totalPages} variant="outlined" shape="rounded"   color="primary" onChange={(event,value)=>dispPage(value)}/>
                </div>
                <div className="col-md-3">
                  <div className="input-group pull-right">
                        <select className='form-control' name='selectPerPage' value={pageSize} onChange={(e) => { serchSelect(e); dispSearchPage();  }}>
                                  <option value='10'>10 Data Per Page</option>
                                  <option value='25'>25 Data Per Page</option>
                                  <option value='50'>50 Data Per Page</option>
                                  <option value='100'>100 Data Per Page</option>
                        </select>
                      </div>
                  </div>
                </div>
    </div>
  )
}

export default Table