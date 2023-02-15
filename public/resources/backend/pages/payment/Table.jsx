import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({payment,search,serchHandle,deleteCategory,trxId}) => {

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
    ]=usePagination(pageSize,payment.length);

   
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const tmpData = payment.slice(firstPageIndex, lastPageIndex);


  return (
    <div>
      <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
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
                  <th scope="col">Invoice</th>
                  <th scope="col">Date</th>
                  <th scope="col">Cid</th>
                  <th scope="col">name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.invoice}</td>
                        <td scope="col">{new Date(item.payment_date).toLocaleDateString('en-CA')}</td>
                        <td scope="col">{item.uid}</td>
                        <td scope="col">
                           {item.type === 2 ? item?.supplier?.name : item.type === 3 ? item?.employee?.name : item?.customer?.name} 
                          </td>
                        <td scope="col">{item.amount}</td>
                        <td scope="col">{item.payment_type == 1 ? 'Cash' : item.payment_type == 2 ? 'Bank/Card' : item.payment_type == 3 ? 'Bkash/Nogod' : 'Cheque'}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/payment/${trxId}/${item.invoice}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
                            <Link to={`/admin/payment/${trxId}/${item.invoice}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <button className='btn btn-outline-danger' onClick={(e) => deleteCategory(e,item.invoice)}><i className="fa-solid fa-trash"></i></button>
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