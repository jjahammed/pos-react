import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({customer,amountSort,titleSort,sortData,search,serchHandle,checkBoxDueHandle, checkBoxTopHandle}) => {

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
    ]=usePagination(pageSize,customer.length);

   
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const tmpData = customer.slice(firstPageIndex, lastPageIndex);

  return (
    <div>

          <div className='row'>
            <div className="col-md-4">
              <div className="form-check checkbox checkbox-primary mb-0 col-md-12">
              <input className="form-check-input" type="checkbox" title='due' name="due" id='due' value='due' onChange={checkBoxDueHandle}/>
              <label className="form-check-label" htmlFor='due'>Due Customer List</label>
              </div>
            </div>
            <div className="col-md-4">
            <div className="form-check checkbox checkbox-primary mb-0 col-md-12">
              <input className="form-check-input" type="checkbox" title='buy' name="buy" id='buy' value='buy' onChange={checkBoxTopHandle}/>
              <label className="form-check-label" htmlFor='buy'>To Buying Customer</label>
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
                  <th scope="col">ID</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Name  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Address</th>
                  <th scope="col">phone</th>
                  <th scope="col">email</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>Total<span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Due</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.uid}</td>
                        <td scope="col">{item.name}</td>
                        <td scope="col">{item.address}</td>
                        <td scope="col">{item.phone}</td>
                        <td scope="col">{item.email}</td>
                        <td scope="col">{item.total}</td>
                        <td scope="col">{item.due}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/customer-order/${item.uid}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
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