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

    // const tmpData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * pageSize;
    //   const lastPageIndex = firstPageIndex + pageSize;
    //   return stock.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage,pageSize,search]);

    let qsell = 0
  return (
    <div>
      <div className="mb-3 m-form__group pull-right">
                <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input id='search' type="text" className="form-control" plactholder='search...' value={search} onChange={(e) => { dispSearchPage(); serchHandle(e); }}/>
                </div>
            </div>
            <div className="table-responsive text-center user-status">
              <table className="table ">
                <thead>
                <tr className='text-center'>
                  <th scope="col">#</th>
                  <th scope="col">product Id</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Title  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">image</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>Quantity<span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Add</th>
                  <th scope="col">Return</th>
                  <th scope="col">Sell</th>
                  <th scope="col">Lost</th>
                  <th scope="col">Damage</th>
                  <th scope="col">Others</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { tmpData.map((item,index) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.pid}</td>
                        <td scope="col">{item.product_title}</td>
                        <td className="border-bottom-0" scope="row"><img src={'/' + item?.product?.image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> </td>
                        <td scope="col">{item.quantity}</td>
                        <td scope="col">
                          {item.stocktransection.filter(sell => sell.status == 'Buy').reduce((acc,cv) => {return acc + cv.quantity},0)}
                          </td>
                        <td scope="col">
                          {item.stocktransection.filter(sell => sell.status == 'Return').reduce((acc,cv) => {return acc + cv.quantity},0)}
                          </td>
                        <td scope="col">
                          {item.stocktransection.filter(sell => sell.status == 'Sell').reduce((acc,cv) => {return acc + cv.quantity},0)}
                          </td>
                        <td scope="col">
                          {item.stocktransection.filter(sell => sell.status == 'Lost').reduce((acc,cv) => {return acc + cv.quantity},0)}
                          </td>
                        <td scope="col">
                          {item.stocktransection.filter(sell => sell.status == 'Damage').reduce((acc,cv) => {return acc + cv.quantity},0)}
                          </td>
                        <td scope="col">
                          {item.stocktransection.filter(sell => sell.status == 'Others').reduce((acc,cv) => {return acc + cv.quantity},0)}
                          </td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/stock/${item?.product?.slug}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
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