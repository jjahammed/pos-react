import React,{useEffect,useState,useMemo} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import Table from './Table';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [amountSort, setAmountSort] = useState('amountAsc')
  const [titleSort, setTitleSort] = useState('titleAsc')

    
  useEffect(() => {
      document.title = 'Product List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get('/api/product').then(res => {setProduct(res.data.data), setList(res.data.data)});
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
// let jon = location.pathname.replace(/\//g, "-")
// useEffect(() => {
//   axios.get(`/api/category/${jon}`).then(res =>
//       {
//         if(res.data.status === 403){
//           Swal.fire('error',res.data.message,'error')
//           navigate('/admin/sample')
//       }else{
//         console.log(res.data.data)
//       }
//     }
//     );
// }, [])

  

  const deleteProduct = (e,slug) => {
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
        axios.delete(`/api/product/${slug}`).then(res => {
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
  const keys = ['title','pid'];

  const filterData = () => {
    let updatedData = list;

    // updatedData = updatedData.slice(firstPageIndex, lastPageIndex);

    updatedData = updatedData.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) ||
              item.category.name.toLowerCase().includes(search.toLowerCase())
          );

    if(sort == 1){
      // asecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(b.title.toLowerCase() < a.title.toLowerCase()) return 1
        if(b.title.toLowerCase() > a.title.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 2){
      // desecendring 
      updatedData = updatedData.slice(0).sort((a, b) => {
        if(a.title.toLowerCase() < b.title.toLowerCase()) return 1
        if(a.title.toLowerCase() > b.title.toLowerCase()) return -1
        return 0
      });
    }else if(sort == 3){
       // asecendring 
       updatedData = updatedData.slice(0).sort((a, b) => {return a.salePrice - b.salePrice});
    }else if(sort == 4){
       // desecendring 
       updatedData = updatedData.slice(0).sort((a, b) => {return b.salePrice - a.salePrice});
    }else{
     
    }

    setProduct(updatedData);
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
            <h5 className='d-inline'>Product List </h5>
            <span className='d-inline badge btn-primary text-light'>{product.length}</span>
              <Link to='/admin/product/new' className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
          </div>
          <div className="card-body">
            {
            product.length>0 ?
            <Table product={product} deleteProduct={deleteProduct} amountSort={amountSort} titleSort={titleSort} sortData={sortData} search={search} serchHandle={serchHandle} />:<Loading />
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