import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Loading from '../extra/Loading';

const List = () => {
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
  const keys = ['title'];

  const filterData = () => {
    let updatedData = list;

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
          <div className="mb-3 m-form__group pull-right">
                <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input id='search' type="text" className="form-control" plactholder='search...' value={search} onChange={serchHandle}/>
                </div>
            </div>
            <div className="table-responsive text-center user-status">
              <table className="table ">
                <thead>
                <tr className='text-center'>
                  <th scope="col">#</th>
                  <th scope="col" id={titleSort} style={{cursor:'pointer'}} onClick={sortData}>Title  <span className='pull-right'><i className= {titleSort == 'titleAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">Category</th>
                  <th scope="col">Brand</th>
                  <th scope="col">image</th>
                  <th scope="col">Purcheased Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col" id={amountSort} style={{cursor:'pointer'}} onClick={sortData}>sell Price <span className='pull-right'><i className= {amountSort == 'amountAsc' ? "fa-solid fa-arrow-down" : "fa-solid fa-arrow-up"  } ></i></span></th>
                  <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>

                { product.map((item) => {
                  return (
                      <tr key={item.id}>
                        <td scope="col">{item.id}</td>
                        <td scope="col">{item.title}</td>
                        <td scope="col">{item.category?.name}</td>
                        <td scope="col">{item.brand?.name}</td>
                        <td className="border-bottom-0" scope="row"><img src={'/' + item.image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/> </td>
                        <td scope="col">{item.buyPrice}</td>
                        <td scope="col">{item.discount}%</td>
                        <td scope="col">{item.salePrice}</td>
                        <td scope="col" className='text-center'>
                            <Link to={`/admin/product/${item.slug}`} className='btn btn-outline-info mr-2'><i className="fa-solid fa-eye"></i></Link>
                            <Link to={`/admin/product/${item.slug}/edit`} className='btn btn-outline-success mr-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                            <button className='btn btn-outline-danger' onClick={(e) => deleteProduct(e,item.slug)}><i className="fa-solid fa-trash"></i></button>
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