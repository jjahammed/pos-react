import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
import Select from '../../form/Select'
import Loading from '../extra/Loading'

const Edit = () => {
  const navigate = useNavigate();
  const {uniId} = useParams();
  const [product, setProduct] = useState([])
  const [permission, setPermission] = useState([])
  const [route, setRoute] = useState([])
  const [user, setUser] = useState([])
  const [inputValue, setInputValue] = useState({
    uid : '',
    error_log : []
  })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      document.title = 'Update Permission'
      axios.get('/api/module').then(res => setProduct(res.data.data));
      axios.get(`/api/user/${uniId}`).then(res => {
        if(res.data.status == 200){
          setUser(res.data.data)
        }else{
          Swal.fire('error',res.data.message,'error')
          navigate('/admin/permission')
        }
      });
      axios.get(`/api/permission/${uniId}/edit`).then(res => {
        if(res.data.status === 200){
          setPermission(JSON.parse(res.data.data.value)),
          setInputValue({
            ...inputValue,
            uid : res.data.data.uniId
          })
          setLoading(false);
        }else{
          Swal.fire('error',res.data.message,'error')
        }
      });

      // const getData = async () => {
      //   await axios.get(`/api/permission/${uniId}/edit`).then((res) => {
      //     if(res.data.status === 200){
      //       setPermission(JSON.parse(res.data.data.value)),
      //       setInputValue({
      //         ...inputValue,
      //         uid : res.data.data.uniId
      //       })
      //       setLoading(false);
      //     }else{
      //       Swal.fire('error',res.data.message,'error')
      //     }
      //   });
      // };
      // getData();


  }, [])
  const inputHandle = (e) => {
    let target = e.target;
    console.dir(target)
        if(target.type == 'checkbox'){
            if(target.checked == true){
              setPermission([...permission,target.value ])
              setRoute([...route,target.title ])
            }else{
              setPermission(permission.filter((item) => item !== target.value))
              setRoute(route.filter((item) => item !== target.title))
            }
        }else{
          setInputValue({
            ...inputValue,
            [target.name] : target.value
          })
        }
        console.log(inputValue.uid);
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log(permission)
      let formData = new FormData();
      formData.append("_method", "put");
      formData.append('uid',uniId);
      formData.append('permission',JSON.stringify(permission));
      formData.append('route',JSON.stringify(route));
      axios.post(`/api/permission/${uniId}`,formData).then(res=>
        {if(res.data.status === 200){
          console.log(res.data.data);
          localStorage.setItem('success',res.data.message)
          navigate('/admin/permission');
        }else{
          setInputValue( {
            ...inputValue,
            error_log : res.data.error
          })
        }
      }
    ).catch(err=>console.log(err))
  }

  const styleRow = {height:'50px', width:'100%' , backgroundColor:'#b79de8' , color:'white', lineHeight:'50px', fontSize:'20px' , fontWeight:'bold', paddingLeft: '20px', marginBottom: '10px', marginTop: '10px'}
  const styleColumn = {height:'35px', width:'100%' , backgroundColor:'#f1edf9' , lineHeight:'35px', fontSize:'16px' , fontWeight:'300',marginBottom: '5px'}

  if(loading){
    return <Loading />
  }

  return (
    <div className="container-fluid page-header">
    <div className="row">
        <div className="col-sm-12 col-xl-12">
            <div className="row">
                <div className="col-sm-12">
                    <form className="theme-form" onSubmit={submitForm}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Update Permisssion</h5>
                                <div className="input-group">
                                  
                              </div>
                            </div>
                            <div className="card-body">

                              <div style={{textAlign:'center', padding:'20px',textTransform: 'uppercase'}}>
                              <h3>{user?.name}</h3>
                              </div>

                            { product.map((item,index) => {
                              return (
                                <div  key={item.id}>
                                  <div className="row" style={styleRow}>
                                    <div className="col-12">
                                      {item.name}
                                    </div>
                                    </div>
                                     
                                  <div className="row"  >
                                        {
                                        item.submodule.map(item2 => {
                                          const permis = permission.filter(item3 => item3 == item2.slug)
                                          if(permis.length > 0 ) {
                                            console.log('checked');
                                            return (
                                              <div className=" mb-0 col-md-3 ml-3" key={item2.id}>
                                              <input className="form-check-input" type="checkbox" name="permission" id={item2.id} value={item2.slug} onChange={inputHandle} defaultChecked={true}/>
                                            <label className="form-check-label ml-1" htmlFor={item2.id}>{item2.name}</label>
                                              </div>
                                            )
                                          }else{
                                            console.log('not checked');
                                            return (
                                              <div className=" mb-0 col-md-3 ml-3" key={item2.id}>
                                              <input className="form-check-input" type="checkbox" name="permission" id={item2.id} value={item2.slug} onChange={inputHandle} defaultChecked={false}/>
                                            <label className="form-check-label ml-1" htmlFor={item2.id}>{item2.name}</label>
                                              </div>
                                            )
                                            
                                          }
                                         
                                        }) 
                                      }
                                      </div>
                                </div>
                              )
                            })}

                            </div>
                            <div className="card-footer">
                                <button type='submit' className="d-inline px-4 btn btn-primary mr-2">Add</button>
                                <Link to='/admin/permission' className="d-inline p-2 btn btn-secondary">Cancel</Link>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Edit