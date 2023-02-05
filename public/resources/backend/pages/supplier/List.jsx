import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';
import Table from './Table';

const List = () => {
  const [search, setSearch] = useState('')
  const [supplier, setSupplier] = useState([])
  const [list, setList] = useState([])
  const [due, setDue] = useState('')
  const [top, setTop] = useState('')
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('')
  const [amountSort, setAmountSort] = useState('amountAsc')
  const [titleSort, setTitleSort] = useState('titleAsc')

  useEffect(() => {
      document.title = 'Supplier List'
      localStorage.getItem('success') ? toast.success(localStorage.getItem('success'), {theme: "colored"}) : ''
      localStorage.getItem('update') ? Swal.fire('success',localStorage.getItem('update'),'success') : ''
      axios.get('/api/supplier').then(res => {setSupplier(res.data.data), setList(res.data.data)});
      setLoading(false);
      localStorage.removeItem('success')
      localStorage.removeItem('update')
  }, [])


  const deleteSubCategory = (e,slug) => {
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
        axios.delete(`/api/supplier/${slug}`).then(res => {
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
  const keys = ['name','phone','sid'];

  // const searchData = () => {
  //     return product.filter( (item) => 
  //             keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) 
  //         );
  // }

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

const checkBoxDueHandle = (e) => {
  if(e.target.type == 'checkbox'){
    if(e.target.checked == true){
      setDue(e.target.value);
    }else{
      setDue('')
    }
}else{
  setDue('')
}
}

const checkBoxTopHandle = (e) => {
  if(e.target.type == 'checkbox'){
    if(e.target.checked == true){
      setTop(e.target.value);
    }else{
      setTop('')
    }
}else{
  setTop('')
}
}

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
    }else {}

    if(due == 'due'){
      updatedData = updatedData.filter( (item) => 
      item.due > 0 
    )
    }
    if(top == 'buy'){
      updatedData = updatedData.slice(0).sort((a, b) => {return b.total - a.total});
    }
    setSupplier(updatedData);
  }

  useEffect(() => {
    filterData();
  }, [search,sort,due,top])

  if(loading){
      return <Loading />
  }

  return (
    <div className="container-fluid page-header" >

<div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5 className='d-inline'>Supplier List </h5>
            <span className='d-inline badge btn-primary text-light'>{supplier.length}</span>
            <Link to='/admin/supplier/new' className='btn btn-primary pull-right'><i className="fa-regular fa-plus text-bold text-light"></i></Link>
          </div>

          
          <div className="card-body">

          {
            supplier.length == 0 || supplier.length > 0 ?
            <Table supplier={supplier} amountSort={amountSort} titleSort={titleSort} sortData={sortData} search={search} serchHandle={serchHandle} checkBoxDueHandle={checkBoxDueHandle} checkBoxTopHandle={checkBoxTopHandle} deleteSubCategory={deleteSubCategory} />:<Loading />
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