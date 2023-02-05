import React,{useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import {usePagination} from '../../../hooks/usePagination'
import Sell from './Sell';


const Table = ({product,sell}) => {

  return (
    <div id="table" className="table-responsive invoice-table my-5">
      <table className="table table-bordered table-striped">
        <tbody>
        <tr className='text-center font-weight-bold'>
          <td className="item"><h6 className="p-2 mb-0">#</h6></td>
          <td className="item"><h6 className="p-2 mb-0">id</h6></td>
          <td className="item"><h6 className="p-2 mb-0">product</h6></td>
          <td className="Hours"><h6 className="p-2 mb-0">unit Price</h6></td>
          <td className="Rate"><h6 className="p-2 mb-0">Quantity</h6></td>
          <td className="subtotal"><h6 className="p-2 mb-0">total Price</h6></td>
        </tr>
          {
            product.map((item,index) => {
              return <tr key={item.id} className={item.status == 0 ? 'text-center text-danger' : 'text-center'}>
                <td>{index+1}</td>
                <td>{item.pid}</td>
                <td>{item?.product?.title} 
                <small>   {item.modelNumber != '' ? '( ' + item.modelNumber + ' )' : ''}</small>
                </td>
                <td>{item.unit_price}</td>
                <td>{item.quantity}</td>
                <td>{item.total_price}</td>
              </tr>
            })
          }

          <tr className='text-center'>
            <td colSpan={4} className='text-right'><h4>Total</h4></td>
          
            <td><h4>{product.reduce((a,b) => {return a+b.quantity},0)}</h4></td>
            <td><h4>{product.reduce((a,b) => {return a+b.total_price},0)}</h4></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default Table