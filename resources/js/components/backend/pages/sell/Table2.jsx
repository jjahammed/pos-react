import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Table3 from './Table3'
import Loading from '../extra/Loading'
import Swal from 'sweetalert2'
import { useEffect } from 'react'


const Table = ({product,returns,invoice,sell}) => {

  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [permission, setPermission] = useState([])
  const [rowsData, setRowsData] = useState([])
  const [returnTotal, setReturnTotal] = useState(0)
  const [returnBuyPrice, setReturnBuyPrice] = useState(0)

  useEffect(() => {
    const finalProduct = [...product]
    product.map(item => {
    let qty = item.quantity
    returns.length > 0 ?
    returns.map(item2 => {
      item.invoice == item2.invoice && item.pid == item2.pid ?
      qty =  qty + item2.quantity
      :
      qty = qty + 0
      item.returnQuantity = qty;
      item.maxLimit = qty;
    })
    :
    item.returnQuantity = qty;
    item.maxLimit = qty;
    return qty
  })
  setProducts(finalProduct)
  },[])

 

  const inputHandle = (event,index,item) => {
    // console.log(item)
    let target = event.target;
        if(target.type == 'checkbox'){

            if(target.checked == true){
              console.log('YES');
              setPermission([...permission,Number(target.value) ])

              const rowsInput = [...rowsData]
              rowsInput.push({"product_pid":item.pid,"serial_id":item.id,"sell_id":item.sell_id,"product_id":item.product_id,"buy_price" : item.buy_price , "unit_price":item.unit_price,"quantity":item.quantity,"returnQuantity" : item.returnQuantity,"total_price":item.returnQuantity*item.unit_price,"total_price_after_discount":item.returnQuantity * (item.unit_price - item.unit_price * sell.discount/100), "profit" : (item.unit_price - item.unit_price * sell.discount/100) * item.returnQuantity - item.buy_price * item.returnQuantity})
              setReturnBuyPrice(rowsInput.reduce((a,b) => {return a+b.total_price},0));
              setReturnTotal(rowsInput.reduce((a,b) => {return a+b.total_price_after_discount},0));

              setRowsData(rowsInput)
              console.log(rowsData);

            }else{
              console.log('NO');
              setPermission(permission.filter((item) => item != Number(target.value)))
              const rowIndex = rowsData.findIndex((element) => element.serial_id == item.id)
                const rows = [...rowsData];
                rows.splice(rowIndex, 1);
                setRowsData(rows);
                console.log(rows);
            }
        }else{
          setInputValue({
            ...inputValue,
            [target.name] : target.value
          })
        }
}

const inputTextHandle = (evnt,index,item) => {
  const checkValue = rowsData.filter(res => res.serial_id == item.id)
    if(checkValue.length === 0){
      console.log('if');
      Swal.fire('decline','You Should select item first','error')
    }else{
          if(Number(evnt.target.value) > item.maxLimit){
            Swal.fire('decline','You Cannot return item More than sale','error')
          }else if(Number(evnt.target.value) < 1){
            Swal.fire('decline','You Cannot return zero item','error')
          }
          else{
            products[index][evnt.target.name] = Number(evnt.target.value);
            const rowIndex = rowsData.findIndex((element) => element.serial_id == item.id)
            const rowsInput = [...rowsData];
            rowsInput[rowIndex][evnt.target.name] = Number(evnt.target.value);
            rowsInput[rowIndex]['total_price'] = Number(evnt.target.value) * item.unit_price;
            rowsInput[rowIndex]['total_price_after_discount'] = Number(evnt.target.value) * (item.unit_price - item.unit_price * sell.discount/100);
            rowsInput[rowIndex]['profit'] = (item.unit_price - item.unit_price * sell.discount/100) * Number(evnt.target.value) - item.buy_price * Number(evnt.target.value);

            setReturnBuyPrice(rowsInput.reduce((a,b) => {return a+b.total_price},0));

            setReturnTotal(rowsInput.reduce((a,b) => {return a+b.total_price_after_discount},0));
            setRowsData(rowsInput);
            localStorage.setItem('returnSales',JSON.stringify(rowsData))
            console.log(rowsData);
          }

          

    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    if(permission.length > 0){
      let formData = new FormData();
      formData.append('invoice',invoice);
      formData.append('returnBuyPrice',returnBuyPrice);
      formData.append('returnTotal',returnTotal);
      formData.append('products',JSON.stringify(rowsData));
      axios.post('/api/sell-product-return',formData).then(res=>
        {if(res.data.status === 200){
            console.log(res.data.data)
          localStorage.removeItem('returnSales')
          localStorage.setItem('success',res.data.message)
            navigate('/admin/sell-product');
        }else{
          setInputValue( {
            ...inputValue,
            error_log : res.data.error
          })
        }
      }
        ).catch(err=>console.log(err))
    }else{
      Swal.fire('error','You did not select anything','error');
    }
}


  return (
    <div>
      {
        products.length > 0 ? 
        <Table3 products={products} returns={returns} inputHandle={inputHandle} inputTextHandle={inputTextHandle} rowsData={rowsData} sell={sell} /> 
        
        : <Loading />
      }
       <form className="theme-form" onSubmit={submitForm}>
          <div className="col-sm-12 text-center mt-3 actionButton">
              <button type="submit" className="btn btn btn-primary me-2">Return</button>
              <Link to='/admin/sell-product' className="btn btn-secondary">Cancel</Link>
          </div>
      </form>

    </div>
    // {finalProduct.length > 0 ? <Table3 product={product} returns={returns} rowsData={rowsData} inputHandle={inputHandle} inputTextHandle={inputTextHandle} /> : <Loading />}
  )
}

export default Table