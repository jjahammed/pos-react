import React,{useEffect,useState} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import Table from './Table';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../../../backend/pages/extra/Loading'

const List = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [customer, setCustomer] = useState([])
  const [loading, setLoading] = useState(true)
  const [amountSort, setAmountSort] = useState('amountAsc')
  const [titleSort, setTitleSort] = useState('titleAsc')

    
  useEffect(() => {
      document.title = 'Due Customer List'
      axios.get('/api/due-customer-list').then(res => {setCustomer(res.data.data), setList(res.data.data)});
      setLoading(false);
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
  const keys = ['uid','name','phone'];

  const filterData = () => {
    let updatedData = list;

    updatedData = updatedData.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
          );

    if(sort == 1){
      // asecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(b.name.toLowerCase() < a.name.toLowerCase()) return 1
        if(b.name.toLowerCase() > a.name.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 2){
      // desecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
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

    setCustomer(updatedData);
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
            <h5 className='d-inline'>Due Customer List </h5>
            <span className='d-inline badge btn-primary text-light'>{customer.length}</span>
              
          </div>
          <div className="card-body">
            {
            customer.length == 0 || customer.length > 0 ?
            <Table customer={customer} amountSort={amountSort} titleSort={titleSort} sortData={sortData} search={search} serchHandle={serchHandle} />:<Loading />
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