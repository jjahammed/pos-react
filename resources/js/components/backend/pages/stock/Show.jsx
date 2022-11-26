import React,{useEffect,useState,useMemo} from 'react'
import {useParams,Link,useLocation} from 'react-router-dom'
import Table from './Table1';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
  const {slug} = useParams();
  const location = useLocation();
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [stock, setStock] = useState([])
  const [loading, setLoading] = useState(true)
  const [amountSort, setAmountSort] = useState('amountAsc')
  const [titleSort, setTitleSort] = useState('titleAsc')

   
  useEffect(() => {
      document.title = 'Stock List'
      axios.get(`/api/stock/${slug}`).then(res => {
          if(res.data.status == 200){
              setStock(res.data.data), setList(res.data.data)
          }else{
            Swal.fire('error',res.data.data,'error')
          }
        });
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
  const keys = ['product_title','pid'];

  const filterData = () => {
    let updatedData = list;
    updatedData = updatedData.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
          );

    if(sort == 1){
      // asecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(b.product_title.toLowerCase() < a.product_title.toLowerCase()) return 1
        if(b.product_title.toLowerCase() > a.product_title.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 2){
      // desecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(a.product_title.toLowerCase() < b.product_title.toLowerCase()) return 1
        if(a.product_title.toLowerCase() > b.product_title.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 3){
       // asecendring 
       updatedData = updatedData.slice(0).sort((a, b) => {return a.quantity - b.quantity});
    }else if(sort == 4){
       // desecendring 
       updatedData = updatedData.slice(0).sort((a, b) => {return b.quantity - a.quantity});
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
    <div className="container-fluid" style={{marginTop: '100px'}}>

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>Stock Transection </h5>
            <span className='d-inline badge btn-primary text-light'>{stock.length}</span>
            <Link to='/admin/stock' className='btn btn-primary pull-right'><i className="fa-solid fa-arrow-left-long text-light"></i></Link>
          </div>
          <div className="card-body">
            {
            stock.length>0 ?
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