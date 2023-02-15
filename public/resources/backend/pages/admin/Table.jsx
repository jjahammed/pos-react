import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'
import axios from 'axios';
import Swal from 'sweetalert2';


const Table = ({product,search,serchHandle}) => {

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

  return (
    <div>
          <div className='row'>
            <div className="col-md-4">
            
            </div>
            <div className="col-md-4">
            
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
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">date</th>
                  <th scope="col">Activities</th>
                  <th scope="col">Detail</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.uid}</td>
                        <td scope="col">{item.user?.name}</td>
                        <td scope="col">{new Date(item.created_at).toLocaleDateString('en-CA')}</td>
                        <td scope="col">{item.message}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/admin-activities/${item.action_id}/${item.model_name}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
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