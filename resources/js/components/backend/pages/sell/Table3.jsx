import React, {useState} from 'react'

const Table3 = ({products,returns,inputHandle,inputTextHandle,rowsData,sell}) => {

    const [qty, setQty] = useState('')

    const handleQty = (evnt) => {
        setQty(evnt.target.value)
        console.log(evnt.target.value)
    }

  return (
    <div id="table" className="table-responsive invoice-table my-5">
      <table className="table table-bordered table-striped">
        <tbody>
        <tr className='text-center font-weight-bold'>
          <td className="item"><h6 className="p-2 mb-0">#</h6></td>
          <td className="item"><h6 className="p-2 mb-0">select</h6></td>
          <td className="item"><h6 className="p-2 mb-0">id</h6></td>
          <td className="item"><h6 className="p-2 mb-0">product</h6></td>
          <td className="Hours"><h6 className="p-2 mb-0">unit Price</h6></td>
          <td className="Rate"><h6 className="p-2 mb-0">Quantity</h6></td>
          <td className="Rate"><h6 className="p-2 mb-0">Return Quantity</h6></td>
          <td className="subtotal"><h6 className="p-2 mb-0">total Price(after discount)</h6></td>
        </tr>
          {
            products.map((item,index) => {
              return <tr key={item.id} className='text-center'>
                <td>{index+1}</td>
                <td>
                    <input className="form-check-input" type="checkbox" name="permission" id={item.id} value={item.id} onChange={(event) => inputHandle(event,index,item)} disabled={item.returnQuantity < 1 ? true: false}/>
                </td>
                <td>{item.pid}</td>
                <td>{item?.product?.title}</td>
                <td>{item.unit_price}</td>
                <td>{item.quantity}</td>
                <td className='text-center'>
                  <input type="number" value={item.returnQuantity} onChange={evnt => {inputTextHandle(evnt,index,item)}} name="returnQuantity" className="form-control text-center"/>
                  </td>
                <td>{item.returnQuantity * (item.unit_price - item.unit_price * sell.discount/100)}</td>
              </tr>
            })
            
          }

          <tr className='text-center'>
            <td colSpan={6} className='text-right'><h4>Total Return</h4></td>
            <td><h4>{rowsData.reduce((a,b) => {return a+b.returnQuantity},0)}</h4></td>
            <td><h4>{rowsData.reduce((a,b) => {return a+b.total_price_after_discount},0)}</h4></td>
          </tr>


          {
          returns.length > 0 ? 
                <tr><td colSpan='8' className='text-center text-weight-bold text-danger'> Already Return </td></tr>
            : ''  
        }
          {
            returns.map((item,index) => {
                return <tr key={item.id} className='text-center text-danger'>
                  <td>{index+1}</td>
                  <td></td>
                  <td>{item.pid}</td>
                  <td>{item?.product?.title}</td>
                  <td>{item.unit_price}</td>
                  <td>{item.quantity}</td>
                  <td className='text-center'></td>
                  <td>{item.total_price}</td>
                </tr>
              })
          }

          
          
        </tbody>
      </table>
    </div>
  )
}

export default Table3
