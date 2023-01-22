import React,{useEffect,useState} from 'react'
import {useParams,Link, useNavigate} from 'react-router-dom'
import Loading from '../extra/Loading';
import Swal from 'sweetalert2'
import Table from './Table2'

import '../../assets/css/print.css'

const ReturnProduct = () => {
    const navigate = useNavigate()
    const {invoice} = useParams();
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const [sell, setSell] = useState([])
    const [permission, setPermission] = useState([])
    const [rowsData, setRowsData] = useState([])

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    useEffect(() => {
        document.title = 'Return Product'
        axios.get(`/api/sell-product-return/${invoice}`).then(res => {
            if(res.data.status == 200){
                setSell(res.data.sell), setProduct(res.data.product)
            }else{
              Swal.fire('error',res.data.message,'error')
            }
          });
        setLoading(false);
    }, [])

    const inputHandle = (event,index,item) => {
        // console.log(item)
        let target = event.target;
            if(target.type == 'checkbox'){
                if(target.checked == true){
                    setPermission([...permission,target.value ])
                  setRowsData([...rowsData,{"product_pid":item.pid,"serial_id":item.id,"sell_id":item.sell_id,"product_id":item.product_id,"unit_price":item.unit_price,"quantity" : item.quantity,"total_price":item.total_price} ])
                  localStorage.setItem('returnSales',JSON.stringify(rowsData))
                }else{
                    setPermission(permission.filter((item) => item !== target.value))
                    const rows = [...rowsData];
                    rows.splice(index, 1);
                    setRowsData(rows);
                    localStorage.setItem('returnSales',JSON.stringify(rows))
                }
            }else{
              setInputValue({
                ...inputValue,
                [target.name] : target.value
              })
            }
            console.log(rowsData);
    }

    const inputTextHandle = (evnt,index,item) => {
      const checkValue = rowsData.filter(res => res.serial_id == item.id)
        if(checkValue.length === 0){
          console.log('if');
          Swal.fire('decline','You Should select item first','error')
        }else{
            const { name, value } = evnt.target;
                console.log(value)
                product[index][name] = value;
                const rowIndex = rowsData.findIndex((element) => element.serial_id == item.id)
                const rowsInput = [...rowsData];
                rowsInput[rowIndex][name] = +value;
                rowsInput[rowIndex]['total_price'] = +value * item.unit_price;
                setRowsData(rowsInput);
                localStorage.setItem('returnSales',JSON.stringify(rowsData))
                console.log(rowsData);
        }
      }

    const submitForm = (e) => {
        e.preventDefault()
        if(permission.length > 0){
          let formData = new FormData();
          formData.append('invoice',invoice);
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

    if(loading){
        return <Loading />
    }
    
  return (
    <div>
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                        <div className="card-body">
                            <div className="invoice">
                            <div>
                                <div>
                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="media">
                                        <div className="media-left">
                                        <img src="/resources/backend/images/profile/profile.png" className="media-object img-60" />
                                        </div>
                                        <div className="media-body m-l-20">
                                        <h4 className="media-heading">Universal</h4>
                                        <p> hello@universal.in<br />
                                            <span className="digits">289-335-6503</span>
                                        </p>
                                        </div>
                                    </div>
                                    {/*End Info*/}
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="text-md-end">
                                        <h3>Invoice # <span className="digits">{sell.invoice}</span></h3>
                                        <p>Issued: <span className="digits">{new Date(sell.created_at).toLocaleDateString("en-US", options)}</span></p>
                                    </div>{/*End Title*/}
                                    </div>
                                </div>
                                </div>
                                <hr />
                                {/*End InvoiceTop*/}
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="media">
                                    <div className="media-left">
                                        <img src="/resources/backend/assets/images/user/1.jpg" className="media-object rounded-circle img-60" />
                                    </div>
                                    <div className="media-body m-l-20">
                                        <h4 className="media-heading">{sell?.user?.name}</h4>
                                        <p>{sell?.user?.address}<br />
                                        <span className="digits">{sell?.user?.phone}</span>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div id="project" className="text-md-end">
                                    <h3>Total BDT :  <span className="digits">{sell.total}tk</span></h3>
                                        <p>
                                            Sub Total : <span className="digits">{sell.sub_total}tk</span>
                                        <br />
                                            Discount : <span className="digits">{sell.discount}%</span>
                                        <br />
                                            paid : <span className="digits">{sell.paid}tk</span>
                                        <br />
                                        Due : <span className="digits">{sell.due}tk</span>
                                        </p>
                                    </div>
                                </div>
                                </div>
                                {/*End Invoice Mid*/}
                                <div>
                                {product.length > 0 ? <Table product={product} rowsData={rowsData} inputHandle={inputHandle} inputTextHandle={inputTextHandle} /> : <Loading />}
                                </div>
                                {/*End InvoiceBot*/}
                            </div>
                            <form className="theme-form" onSubmit={submitForm}>
                            <div className="col-sm-12 text-center mt-3 actionButton">
                                <button type="submit" className="btn btn btn-primary me-2">Return</button>
                                <Link to='/admin/sell-product' className="btn btn-secondary">Cancel</Link>
                            </div>
                            </form>
                            {/*End Invoice*/}
                            </div>
                            {/* End Invoice Holder*/}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

    </div>
  )
}

export default ReturnProduct


