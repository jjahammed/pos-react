import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({stock,amountSort,titleSort,sortData,search,serchHandle}) => {

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
    ]=usePagination(pageSize,stock.length);

   
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const tmpData = stock.slice(firstPageIndex, lastPageIndex);


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
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Customer Name  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Sub Total</th>
                  <th scope="col">Discount</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>Total <span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
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
                        <td scope="col">{item.invoice}</td>
                        <td scope="col">{new Date(item.created_at).toLocaleDateString('en-CA')}</td>
                        <td scope="col">{item?.user?.uid}</td>
                        <td scope="col">{item?.user?.name}</td>
                        <td scope="col">{item.sub_total}</td>
                        <td scope="col">{item.discount}%</td>
                        <td scope="col">{item.total}</td>
                        <td scope="col">{item.paid}</td>
                        <td scope="col">{item.due}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/sell-product/${item.invoice}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
                            <Link to={`/admin/sell-product/${item.invoice}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <Link to={`/admin/sell-product/return/${item.invoice}`} className='btn btn-outline-primary mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
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