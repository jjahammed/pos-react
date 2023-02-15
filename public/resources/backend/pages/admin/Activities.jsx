import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import bcrypt from 'bcryptjs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../extra/Loading';
import Table from './Table'

const List = () => {
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      document.title = 'Admin Activities'
      axios.get('/api/admin/create').then(res => {
        setProduct(res.data.data)
        setList(res.data.data)
        })
      setLoading(false);
  }, [])

  const serchHandle = (e) => {
      setSearch(e.target.value);
  }
  const keys = ['name','uid'];

  const filterData = () => {
      return product.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
          );
  }

  useEffect(() => {
    filterData()
}, [search])

  if(loading){
      return <Loading />
  }

  return (
    <div className="container-fluid page-header">

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>Admin Activities </h5>
            <span className='d-inline badge btn-primary text-light'>{product.length}</span>
            
          </div>
          {
            product.length == 0 || product.length > 0 ?
            <Table product={product} search={search} serchHandle={serchHandle}/>
            :
            <Loading />
          }
          
         
        </div>
      </div>
    </div>
</div>

  )
}

export default List