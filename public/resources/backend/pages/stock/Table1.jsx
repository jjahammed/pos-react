import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({stock,amountSort,sortData,search,serchHandle}) => {

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

    // const tmpData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * pageSize;
    //   const lastPageIndex = firstPageIndex + pageSize;
    //   return stock.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage,pageSize,search]);


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
                  <th scope="col">product Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">image</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>Quantity<span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">status</th>
                  <th scope="col">date</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.pid}</td>
                        <td scope="col">{item?.product?.title}</td>
                        <td className="border-bottom-0" scope="row"><img src={'/' + item?.product?.image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> </td>
                        <td scope="col">{item.quantity}</td>
                        <td scope="col"><span className='badge bg-primary'>{item.status}</span></td>
                        <td scope="col">{new Date(item.created_at).toISOString()
                    .split("T")[0]}</td>
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