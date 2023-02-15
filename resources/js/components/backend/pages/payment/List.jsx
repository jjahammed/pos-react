import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';
import Table from './Table'

const List = () => {
  const {trxId} = useParams();
  const [search, setSearch] = useState('')
  const [payment, setPayment] = useState([])
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      document.title = 'Payment List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get(`/api/payment/${trxId}`).then(res => {
        setList(res.data.data),
        setPayment(res.data.data)
      });
      setLoading(false);
      localStorage.removeItem('success')
      localStorage.removeItem('update')
  }, [trxId])

  const deleteCategory = (e,invoice) => {
    const thisClicked = e.currentTarget;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/payment/${invoice}`).then(res => {
          if(res.data.status === 200){
            swalWithBootstrapButtons.fire(
              'Deleted!',
              res.data.message,
              'success'
            )
            thisClicked.closest('tr').remove();
          }else{
            swalWithBootstrapButtons.fire(
              'Cancelled',
                res.data.message,
              'error'
            )
          }
        }).catch(err => err)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  const serchHandle = (e) => {
      setSearch(e.target.value);
  }

  const keys = ['invoice','uid'];
  const filterData = () => {
    let updatedData = list;
    updatedData = updatedData.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
              ||
              trxId == 'customer-payment' || 'investment-withdraw' ? 
              item.customer.name.toLowerCase().includes(search.toLowerCase()) : trxId == 'supplier-payment' ? item.supplier.name.toLowerCase().includes(search.toLowerCase()) : trxId == 'employee-salary' ? item.employee.name.toLowerCase().includes(search.toLowerCase()) : null
          );
  setPayment(updatedData)
  }

  useEffect(() => {
    filterData();
  }, [search])

  if(loading){
      return <Loading />
  }

  return (
    <div className="container-fluid page-header" >

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>Customer Payment </h5>
            <span className='d-inline badge btn-primary text-light'>{payment.length}</span>
            <Link to={`/admin/payment/${trxId}/new`} className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
          </div>
          <div className="card-body">
            {
            payment.length == 0 || payment.length > 0 ?
            <Table payment={payment}  search={search} serchHandle={serchHandle} deleteCategory={deleteCategory} trxId={trxId}/>:<Loading />
            }
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
</div>

  )
}

export default List