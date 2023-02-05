import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../extra/Loading';
import Swal from 'sweetalert2'
import Table from './Table2'

import '../../assets/css/print.css'

const ReturnProduct = () => {
    
    const {invoice} = useParams();
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const [returns, setReturns] = useState([])
    const [sell, setSell] = useState([])
    

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    useEffect(() => {
        document.title = 'Return Product'
        axios.get(`/api/sell-product-return/${invoice}`).then(res => {
            if(res.data.status == 200){
                setSell(res.data.sell), setProduct(res.data.data.products),setReturns(res.data.data.returns)
            }else{
              Swal.fire('error',res.data.message,'error')
            }
          });
        setLoading(false);
    }, [])



    

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
                                {product.length > 0 ? 
                                
                                  <Table product={product} returns={returns} invoice={invoice} sell={sell}/>
                                 : 
                                <Loading />}
                                </div>
                                {/*End InvoiceBot*/}
                            </div>
                           
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


