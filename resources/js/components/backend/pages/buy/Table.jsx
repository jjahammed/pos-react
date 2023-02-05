import React,{useState,useMemo} from 'react'
import {Link,useLocation} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'


const Table = ({stock,amountSort,titleSort,sortData,search,serchHandle}) => {

  const location = useLocation()
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
                  <th scope="col">invoice</th>
                  <th scope="col">date</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>supplier  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">sub_total</th>
                  <th scope="col">discount</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>total<span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">paid</th>
                  <th scope="col">due</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.invoice}</td>
                        <td scope="col">{new Date(item.purcheased_date).toLocaleDateString('en-CA')}</td>
                        <td scope="col">{item.supplier?.name}</td>
                        <td scope="col">{item.sub_total.toFixed(2)}</td>
                        <td scope="col">{item.discount}%</td>
                        <td scope="col">{item.total.toFixed(2)}</td>
                        <td scope="col">{item.paid.toFixed(2)}</td>
                        <td scope="col">{item.due.toFixed(2)}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/purcheased-product/${item.invoice}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
                            {location.pathname == '/admin/purcheased-product/return' ? 
                            '' : 
                            <Link to={`/admin/purcheased-product/${item.invoice}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            }
                            

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