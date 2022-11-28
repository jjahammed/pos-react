import React,{useEffect,useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Table from './Table';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
  const [permission, setPermission] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      document.title = 'permission List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get('/api/permission').then(res => {setPermission(res.data.data)});
      setLoading(false);
      localStorage.removeItem('success')
      localStorage.removeItem('update')
  }, [])

  if(loading){
      return <Loading />
  }

  return (
    <div className="container-fluid" style={{marginTop: '100px'}}>

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>permission List </h5>
            <span className='d-inline badge btn-primary text-light'>{permission.length}</span>
              <Link to='/admin/permission/new' className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
          </div>
          <div className="card-body">
            {
            permission.length > 0 ?
            <Table permission={permission} />:<Loading />
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