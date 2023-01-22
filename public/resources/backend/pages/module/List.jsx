import React,{useEffect,useState} from 'react'
import {Link,useNavigate,useLocation } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      document.title = 'Module List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get('/api/module').then(res => setProduct(res.data.data));
      setLoading(false);
      localStorage.removeItem('success')
      localStorage.removeItem('update')
  }, [])

  const deleteModule = (e,slug) => {
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
        axios.delete(`/api/module/${slug}`).then(res => {
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
  const keys = ['name'];

  const searchData = () => {
      return product.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
          );
  }
  if(loading){
      return <Loading />
  }

  return (
    <div className="container-fluid page-header">

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>Module </h5>
            <span className='d-inline badge btn-primary text-light'>{searchData().length}</span>
            
            

            <Link to='/admin/module/new' className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
            
          </div>
          <div className="card-body">
          <div className="mb-3 m-form__group pull-right">
                <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control" plactholder='search...' value={search} onChange={serchHandle}/>
                </div>
            </div>
            <div className="table-responsive text-center user-status">
              <table className="table ">
                <thead>
                <tr className='text-center'>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { searchData().map((item,index) => {
                  return (
                    
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.name}</td>
                        <td scope="col">{item.slug}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/module/${item.slug}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <button className='btn btn-outline-danger' onClick={(e) => deleteModule(e,item.slug)}><i className="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                   
                  )
                })}
                  
                </tbody>
              </table>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
</div>

  )
}

export default List