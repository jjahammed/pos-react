import React,{useEffect,useState} from 'react'
import {Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      document.title = 'System List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get('/api/system').then(res => setProduct(res.data.data));
      setLoading(false);
      localStorage.removeItem('success')
      localStorage.removeItem('update')
  }, [])

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
            <h5 className='d-inline'>System Info </h5>
            {/* <span className='d-inline badge btn-primary text-light'>{searchData().length}</span> */}

            <Link to='/admin/system/new' className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
            
          </div>

          <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="input-group mt-3">
              <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control" plactholder='search...' value={search} onChange={serchHandle}/>
                </div>
              </div>
            </div>
            
          <div className="card-body">
          
            <div className="table-responsive text-center user-status">
              <table className="table ">
                <thead>
                <tr className='text-center'>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">value</th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { searchData().map((item,index) => {
                  console.log(item.product)
                  return (
                      <tr key={item.id}>
                        <td scope="col">{index+1}</td>
                        <td scope="col">{item.name}</td>
                        <td scope="col">{item.slug}</td>
                        <td scope="col">{item.type == 1 ? item.value : <img src={'/' + item.value} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> }</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/system/${item.slug}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
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