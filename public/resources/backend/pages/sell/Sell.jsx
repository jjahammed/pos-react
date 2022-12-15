import React,{useEffect,useState} from 'react'
import Variation from './Variation2';
import {useNavigate} from 'react-router-dom'
import Products from './Products';
import Swal from 'sweetalert2'
import Userinfo from './Userinfo';
import Accounce from './Accounce';

const Sell = () => {

    const [user, setUser] = useState([])
    const [category, setCategory] = useState([])
    const [list, setList] = useState([])
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState('')
    const [cat, setCat] = useState('')
    const [date,setDate] = useState('2022-08-18T21:11:54')
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
      invoice: '',
      note: '',
      uid: '',
      user_id: '',
      name: '',
      phone: '',
      email: '',
      purcheased_date: '',
      address: '',
      sub_total: 0,
      discount: 0,
      total: 0,
      paid: 0,
      due: 0,
      error_log: []
    })
  
    const [rowsData, setRowsData] = useState(localStorage.getItem('sales') ? JSON.parse(localStorage.getItem('sales')) : []);
    // const [rowsData, setRowsData] = useState([]);
    const [rowsInput, setRowsInput] = useState({
      product_id: '',
      product_pid: '',
      product_title: '',
      product_image: '',
      product_price: '',
      product_qty: '',
      total_price: '',
    });

    const handleChange = (index, evnt) => {
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData];
      rowsInput[index][name] = value;
      rowsInput[index]['total_price'] = rowsInput[index]['product_price'] * value
      setRowsData(rowsInput);
      localStorage.setItem('sales',JSON.stringify(rowsInput))
      // console.log(rowsInput[index]['product_price']);
    }

    const addTableRows = async (item) => {

      const duplicate = rowsData.filter( prd => prd.product_id == item.id);
      if(duplicate.length > 0) {
        Swal.fire('success','Product already in the table.','success')
      }else{
        await setRowsInput({
          ...rowsInput,
          product_id: item.id,
          product_pid: item.pid,
          product_title: item.title,
          product_price: item.salePrice,
          product_qty: 1,
          total_price: item.salePrice
        })
         await setRowsData([...rowsData, {"product_id":item.id,"product_pid":item.pid,"product_title":item.title,"product_price":item.salePrice,"product_qty":1,"total_price":item.salePrice}]),
         await localStorage.setItem('sales',JSON.stringify([...rowsData, {"product_id":item.id,"product_pid":item.pid,"product_title":item.title,"product_price":item.salePrice,"product_qty":1,"total_price":item.salePrice}]))
      }

      
    }
  
    const calculation = async () => {
       let tmpPrice = rowsData.reduce((accumulator,currentValue) => {return accumulator + currentValue.total_price},0);
      let tmpTotal = tmpPrice - (tmpPrice * inputValue.discount/100)
      let tmpDue = tmpTotal - inputValue.paid
      setInputValue({
        ...inputValue,
        sub_total : tmpPrice,
        total : tmpTotal,
        due : tmpDue
      })
    }
  
    const deleteTableRows = (index) => {
      const rows = [...rowsData];
      rows.splice(index, 1);
      setRowsData(rows);
      localStorage.setItem('sales',JSON.stringify(rows))
      if(rowsData.length == 1){
        setInputValue({
          ...inputValue,
          sub_total: 0,
          discount: 0,
          total: 0,
          paid: 0,
          due: 0,
        })
      }
    }

    // const setDateFunction = (val) => {
    //     setDate(val);
    // }

    const setDateFunction = (newValue) => {
      setDate(newValue);
    };

    const inputHandle = (e) => {
      console.log(e.target)
      if(e.target.name == 'discount'){
          let tmpTotal = inputValue.sub_total - (inputValue.sub_total * e.target.value/100)
          let tmpDue = tmpTotal - inputValue.paid
        setInputValue({
          ...inputValue,
          [e.target.name] : e.target.value,
          total : tmpTotal,
          due : tmpDue,
        })
      }else if(e.target.name == 'paid'){
          let tmpDue = inputValue.total- e.target.value
        setInputValue({
          ...inputValue,
          [e.target.name] : e.target.value,
          due : tmpDue
        })
      }else if(e.target.name == 'uid'){
        let activeUser = ''
       user.filter(item => {item.uid == e.target.value ?  activeUser = item : ''});
      if(activeUser) {
        console.log(activeUser.name);
          setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value,
            name : activeUser.name,
            address : activeUser.address,
            phone : activeUser.phone,
            user_id : activeUser.id,
          })
      }else{
        setInputValue({
          ...inputValue,
          [e.target.name] : e.target.value,
          name : '',
          address : '',
          phone : '',
          user_id : '',
        })
      }
    }else{
        setInputValue({
          
          ...inputValue,
          [e.target.name] : e.target.value
        })
      }
      
      
    }

    useEffect(() => {
      document.title = 'Sell Product'

    const getUser = async () => {
      await axios.get('/api/user').then((res) => {
        setUser(res.data.data)
      });
    };

    const getCategory = async () => {
      await axios.get('/api/category').then((res) => {
        setCategory(res.data.data)
      });
    };

    const getProduct = async () => {
      await axios.get('/api/product').then((res) => {
        setProduct(res.data.data)
        setList(res.data.data)
      });
    };
    getUser();
    getProduct();
    getCategory();

    }, [])

    useEffect(() => {
      calculation()
    }, [rowsData])
    
    const generateUniqueNumber = () => {
      let uniqueNumber = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
      setInputValue( {
        ...inputValue,
        invoice : uniqueNumber
      })
    }

    // const findUser = (e) => {
    //   let activeUser = ''
    //    user.filter(item => {item.uid == e.target.value ?  activeUser = item : ''});
    //   if(activeUser) {
    //     console.log(activeUser.name);
    //       setInputValue({
    //         ...inputValue,
    //         name : 'activeUser.name',
    //         address : activeUser.address,
    //         phone : activeUser.phone,
    //       })
    //     }else{

    //     }
    // }

    const serchHandle = (e) => {
      setSearch(e.target.value);
  }

  const catHandle = (e) => {
    console.dir(e.target.title);
    setCat(e.target.title); 
  }
  const keys = ['title','pid'];

  const filterData = () => {
    let updatedData = list;

    // updatedData = updatedData.slice(firstPageIndex, lastPageIndex);

    updatedData = updatedData.filter( (item) => 
              keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase())) ||
              item.category.name.toLowerCase().includes(search.toLowerCase())
          );
          
          if(cat == 'all'){
            setProduct(list);
          }else {
              updatedData = updatedData.filter( (item) => 
              item.category.name.toLowerCase().includes(cat.toLowerCase())
          );
          }
   

    // if(sort == 1){
    //   // asecendring 
    //   updatedData = updatedData.slice(0).sort((a, b) => {
    //     if(b.title.toLowerCase() < a.title.toLowerCase()) return 1
    //     if(b.title.toLowerCase() > a.title.toLowerCase()) return -1
    //     return 0
    //   });
    // }else if(sort == 2){
    //   // desecendring 
    //   updatedData = updatedData.slice(0).sort((a, b) => {
    //     if(a.title.toLowerCase() < b.title.toLowerCase()) return 1
    //     if(a.title.toLowerCase() > b.title.toLowerCase()) return -1
    //     return 0
    //   });
    // }else if(sort == 3){
    //    // asecendring 
    //    updatedData = updatedData.slice(0).sort((a, b) => {return a.salePrice - b.salePrice});
    // }else if(sort == 4){
    //    // desecendring 
    //    updatedData = updatedData.slice(0).sort((a, b) => {return b.salePrice - a.salePrice});
    // }else{
     
    // }

    setProduct(updatedData);
  }
  useEffect(() => {
    filterData();
  }, [search,cat])
    
  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('products',JSON.stringify(rowsData));
    formData.append('invoice',inputValue.invoice);
    formData.append('uid',inputValue.uid);
    formData.append('user_id',inputValue.user_id);
    formData.append('name',inputValue.name);
    formData.append('address',inputValue.address);
    formData.append('phone',inputValue.phone);
    formData.append('purcheased_date',new Date(date).toLocaleDateString('en-CA'));
    formData.append('note',inputValue.note);
    formData.append('sub_total',inputValue.sub_total);
    formData.append('total',inputValue.total);
    formData.append('discount',inputValue.discount);
    formData.append('paid',inputValue.paid);
    formData.append('due',inputValue.due);

    axios.post('/api/sell-product', formData).then(res => {
      if (res.data.status === 200) {
        console.log(res.data.data)
        localStorage.setItem('success', res.data.message)
        localStorage.removeItem('sales')
        navigate('/admin/sell-product');
      } else {
        setInputValue({
          ...inputValue,
          error_log: res.data.error
        })
      }
    }).catch(err => err)
  }

  return (
    <div className="container-fluid" style={{ marginTop: '100px', marginBottom: '500px' }}>
      <form encType='multipart/form-data' onSubmit={submitForm}>


        <div className="card" >
          <div className="row mt-1 ml-1" >
          <div className="col-sm-6 col-md-3 col-xl-1 text-center" style={{cursor:'pointer'}}>
                  <img src='/resources/backend/asset/images/avtar/3.jpg' style={{ height: '100px', width: '100px' }} alt="" onClick={catHandle} title='all' />
                </div>
            {
            category.map( item => {
              return (
                <div className="col-sm-6 col-md-3 col-xl-1 text-center " key={item.id} style={{cursor:'pointer'}}>
                  <img src={'/'+item.image} style={{ height: '100px', width: '100px' }} alt="" onClick={catHandle} title={item.name} />
                </div>
              )
            }
            )}

            
          </div>
        </div>


        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Select Product</h5>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group pull-right">
                            <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input id='search' type="text" className="form-control" plactholder='search...' value={search} onChange={(e) => { serchHandle(e); }}/>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="card-body">
                    <div className="row">

                      <div className="col-xl-8 col-12" style={{height:'500px',overflow:'scroll'}}>

                        <Products product={product} calculation={calculation} addTableRows={addTableRows} />

                      </div>
                      <div className="col-xl-4 col-12 mt-3">
                        <div className="table-responsive text-center user-status">
                          <table className="table ">
                            <thead>
                              <tr className='text-center'>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody style={{fontSize:'10px'}}>
                              {localStorage.getItem('sales') ? 
                              <Variation rowsData={JSON.parse(localStorage.getItem('sales'))} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                              :
                              []
                            }
                              </tbody>
                          </table>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Action</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">

                      <div className="col-xl-6 col-12">
                          <Userinfo date={date} setDateFunction={setDateFunction} inputHandle={inputHandle} inputValue={inputValue} generateUniqueNumber={generateUniqueNumber} />
                      </div>

                      <div className="col-xl-6 col-12 mt-3">
                        {/* <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button> */}
                        <Accounce inputHandle={inputHandle} inputValue={inputValue} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Sell