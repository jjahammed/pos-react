import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({supplier,amountSort,titleSort,sortData,search,serchHandle,checkBoxDueHandle, checkBoxTopHandle,deleteSubCategory}) => {

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
    ]=usePagination(pageSize,supplier.length);

   
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const tmpData = supplier.slice(firstPageIndex, lastPageIndex);

  return (
    <div>

        <div className='row my-5'>
            <div className="col-md-4">
            <div className="form-check checkbox checkbox-primary mb-0 col-md-12 text-center" style={{ border:'1px solid #dee3e8' }}>
              <input className="form-check-input" type="checkbox" title='due' name="due" id='due' value='due' onChange={checkBoxDueHandle}/>
              <label className="form-check-label" htmlFor='due'>Due Supplier List</label>
              </div>
            </div>
            <div className="col-md-4">
            <div className="form-check checkbox checkbox-primary mb-0 col-md-12 text-center" style={{ border:'1px solid #dee3e8' }}>
              <input className="form-check-input" type="checkbox" title='buy' name="buy" id='buy' value='buy' onChange={checkBoxTopHandle}/>
              <label className="form-check-label" htmlFor='buy'>Top Buying Supplier</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group">
              <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control" plactholder='search...' value={search} onChange={serchHandle}/>
                </div>
              </div>
            </div>

          
            <div className="table-responsive text-center user-status">
              <table className="table ">
                <thead>
                <tr className='text-center'>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Name  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">image</th>
                  <th scope="col">phone</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>Total<span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Paid</th>
                  <th scope="col">Due</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.sid}</td>
                        <td scope="col">{item.name}</td>
                        <td className="border-bottom-0" scope="row"><img src={'/' + item.image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> </td>
                        <td scope="col">{item.phone}</td>
                        <td scope="col">{item.total}</td>
                        <td scope="col">{item.paid}</td>
                        <td scope="col">{item.due}</td>
                        <td scope="col" className='text-center'>
                        <Link to={`/admin/supplier/${item.sid}`} className='btn btn-outline-info mr-2'><i className="fa-regular fa-eye"></i></Link>
                            <Link to={`/admin/supplier/${item.sid}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <button className='btn btn-outline-danger' onClick={(e) => deleteSubCategory(e,item.sid)}><i className="fa-solid fa-trash"></i></button>
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