import React,{useEffect,useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
import Table from './Table';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [stock, setStock] = useState([])
  const [loading, setLoading] = useState(true)
  const [amountSort, setAmountSort] = useState('amountAsc')
  const [titleSort, setTitleSort] = useState('titleAsc')

    
  useEffect(() => {
      document.title = 'Purcheased List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get('/api/purcheased-product').then(res => {setStock(res.data.data), setList(res.data.data)});
      setLoading(false);
      localStorage.removeItem('success')
      localStorage.removeItem('update')
  }, [])

  const sortData = (e) => {
    if(e.target.id == 'amountAsc'){
      setSort(3);
      setAmountSort('amountDesc')
    }else if(e.target.id == 'amountDesc'){
      setSort(4);
      setAmountSort('amountAsc')
    }else if(e.target.id == 'titleAsc'){
      setSort(1);
      setTitleSort('titleDesc')
      console.log('titleAsc')
    }else if(e.target.id == 'titleDesc'){
      setSort(2);
      setTitleSort('titleAsc')
      console.log('titleDesc')
    }
}


  const serchHandle = (e) => {
      setSearch(e.target.value);
  }
  const keys = ['purcheased_date','invoice'];

  const filterData = () => {
    let updatedData = list;
    updatedData = updatedData.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
              ||
              item.supplier?.name.toLowerCase().includes(search.toLowerCase())
          );

    if(sort == 1){
      // asecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(b.supplier?.name.toLowerCase() < a.supplier?.name.toLowerCase()) return 1
        if(b.supplier?.name.toLowerCase() > a.supplier?.name.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 2){
      // desecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(a.supplier?.name.toLowerCase() < b.supplier?.name.toLowerCase()) return 1
        if(a.supplier?.name.toLowerCase() > b.supplier?.name.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 3){
       // asecendring 
       updatedData = updatedData.slice(0).sort((a, b) => {return a.total - b.total});
    }else if(sort == 4){
       // desecendring 
       updatedData = updatedData.slice(0).sort((a, b) => {return b.total - a.total});
    }else{
     
    }

    setStock(updatedData);
  }

  useEffect(() => {
    filterData();
  }, [search,sort])
 

  if(loading){
      return <Loading />
  }

  return (
    <div className="container-fluid page-header">

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>Purcheased List </h5>
            <span className='d-inline badge btn-primary text-light'>{stock.length}</span>
              <Link to='/admin/purcheased-product/new' className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
          </div>
          <div className="card-body">
            {
            stock.length == 0 || stock.length > 0 ?
            <Table stock={stock} amountSort={amountSort} titleSort={titleSort} sortData={sortData} search={search} serchHandle={serchHandle} />:<Loading />
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