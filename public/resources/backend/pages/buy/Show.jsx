import React,{useEffect,useState,useContext} from 'react'
import {useParams,Link} from 'react-router-dom'
import Loading from '../extra/Loading';
import Swal from 'sweetalert2'
import Table from './Table1'
import {systemContext} from '../../App'

import '../../assets/css/print.css'

const Show = () => {
    const mySystem = useContext(systemContext)
    const {system} = mySystem

    const logoPrint = system.find(item => {
        return item.slug == 'company-logo-dark'
      })
    const companyName = system.find(item => {
        return item.slug == 'company-full-name'
      })
    const companyPhone = system.find(item => {
        return item.slug == 'company-phone-number'
      })
    const companyEmail = system.find(item => {
        return item.slug == 'company-email-address'
      })

    const {invoice} = useParams();
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const [sell, setSell] = useState([])
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    useEffect(() => {
        document.title = 'Purcheased List'
        axios.get(`/api/purcheased-product/${invoice}`).then(res => {
            if(res.data.status == 200){
                // console.log(res.data.data)
                setSell(res.data.purcheased), setProduct(res.data.products)
            }else{
              Swal.fire('error',res.data.message,'error')
            }
          });
        setLoading(false);
    }, [])

    const print = () => {
        window.print();
    }

    if(loading){
        return <Loading />
    }
    
  return (
    <div>
            <div>
                <div className="container-fluid">
                    <div className="page-header">
                    <div className="row">
                        <div className="col-lg-6">
                        <h3>Invoice
                            <small>{companyName.value}</small>
                        </h3>
                        </div>
                        <div className="col-lg-6">
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /></a></li>
                            <li className="breadcrumb-item active">Invoice</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
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
                                        <img src={"/" + logoPrint.value} className="media-object img-60" />
                                        </div>
                                        <div className="media-body m-l-20">
                                        <h4 className="media-heading">{companyName.value}</h4>
                                        <p> {companyEmail.value}<br />
                                            <span className="digits">{companyPhone.value}</span>
                                        </p>
                                        </div>
                                    </div>
                                    {/*End Info*/}
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="text-md-end">
                                        <h3>Invoice # <span className="digits">{sell.invoice}</span></h3>
                                        <p>Issued: <span className="digits">{new Date(sell.purcheased_date).toLocaleDateString("en-US", options)}</span></p>
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
                                        <img src={"/" + sell?.supplier?.image} className="media-object rounded-circle img-60" />
                                    </div>
                                    <div className="media-body m-l-20">
                                        <h4 className="media-heading">{sell?.supplier?.name}</h4>
                                        <p>{sell?.supplier?.address}<br />
                                        <span className="digits">{sell?.supplier?.phone}</span>
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
                                            paid : BDT : <span className="digits">{sell.paid}tk</span>
                                        <br />
                                        Due : <span className="digits">{sell.due}tk</span>
                                        </p>
                                    </div>
                                </div>
                                </div>
                                {/*End Invoice Mid*/}
                                <div>
                                {product.length > 0 ? <Table product={product} sell={sell} /> : <Loading />}
                                {/* <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <p className="legal"><strong>Thank you for your business!</strong>&nbsp; Payment is expected within 31 days; please process this invoice within</p>
                                    </div>
                                    </div>
                                </div> */}
                                </div>
                                {/*End InvoiceBot*/}
                            </div>
                            <div className="col-sm-12 text-center mt-3 actionButton">
                                <button type="button" onClick={print} className="btn btn btn-primary me-2">Print</button>
                                <Link to='/admin/purcheased-product' className="btn btn-secondary">Cancel</Link>
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

export default Show