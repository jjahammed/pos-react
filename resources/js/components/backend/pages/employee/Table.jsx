import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({employee,titleSort,sortData,search,serchHandle,checkBoxActiveHandle,deleteSubCategory}) => {

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
    ]=usePagination(pageSize,employee.length);

   
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const tmpData = employee.slice(firstPageIndex, lastPageIndex);

  return (
    <div>

        <div className='row my-5'>
            <div className="col-md-4">
            <div className="form-check checkbox checkbox-primary mb-0 col-md-12 text-center">
              <input className="form-check-input" type="checkbox" title='active' name="active" id='active' value='active' onChange={checkBoxActiveHandle}/>
              <label className="form-check-label" htmlFor='active'>Active employee</label>
              </div>
            </div>
            <div className="col-md-4">
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
                  <th scope="col">Joining Date</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Name  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">image</th>
                  <th scope="col">phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Status</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.uid}</td>
                        <td scope="col">{new Date(item.joining_date).toLocaleDateString('en-CA')}</td>
                        <td scope="col">{item.name}</td>
                        <td className="border-bottom-0" scope="row"><img src={'/' + item.image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> </td>
                        <td scope="col">{item.phone}</td>
                        <td scope="col">{item.address}</td>
                        <td scope="col">{item.status == 1 ? <span className='badge bg-success'>Active</span> : <span className='badge bg-danger'>InActive</span> }</td>
                        <td scope="col" className='text-center'>
                        <Link to={`/admin/employee/${item.uid}`} className='btn btn-outline-info mr-2'><i className="fa-regular fa-eye"></i></Link>
                            <Link to={`/admin/employee/${item.uid}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <button className='btn btn-outline-danger' onClick={(e) => deleteSubCategory(e,item.uid)}><i className="fa-solid fa-trash"></i></button>
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