import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import Select from '../../form/Select'

const New = () => {
  const navigate = useNavigate();
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
      document.title = 'Add Permission'
      axios.get('/api/module').then(res => setProduct(res.data.data));
      axios.get('/api/user').then(res => setUser(res.data.data));
      setLoading(false);
  }, [])


  const inputHandle = (e) => {
    let target = e.target;
    console.dir(target.title)
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
        console.log(permission);
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log(permission.length)
    if(permission.length > 0){
      let formData = new FormData();
      formData.append('uid',inputValue.uid);
      formData.append('permission',JSON.stringify(permission));
      formData.append('route',JSON.stringify(route));
      axios.post('/api/permission',formData).then(res=>
        {if(res.data.status === 200){
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
    }else{
      Swal.fire('error','You did not select anything','error');
    }
    
  }

  const styleRow = {height:'50px', width:'100%' , backgroundColor:'#b79de8' , color:'white', lineHeight:'50px', fontSize:'20px' , fontWeight:'bold', paddingLeft: '20px', marginBottom: '10px', marginTop: '10px'}
  const styleColumn = {height:'35px', width:'100%' , backgroundColor:'#f1edf9' , lineHeight:'35px', fontSize:'16px' , fontWeight:'300',marginBottom: '5px'}

  return (
    <div className="container-fluid page-header">
    <div className="row">
        <div className="col-sm-12 col-xl-12">
            <div className="row">
                <div className="col-sm-12">
                    <form className="theme-form" onSubmit={submitForm}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Add Permisssion</h5>
                                <div className="input-group">
                                  
                              </div>
                            </div>
                            <div className="card-body">

                              <div>
                              <Select name='uid' value={inputValue.uid} opValue='' opText='Select A User' lblText='Select User' error={inputValue.error_log.uid} onChange={inputHandle} className='form-control'>
                                    {user.map( (item) => {
                                      return <option value={item.uid} key={item.id}> {item.name} </option>
                                    })}
                                  </Select>
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
                                          return (
                                            <div className="form-check checkbox checkbox-primary mb-0 col-md-3" key={item2.id}>

                                                 <input className="form-check-input" type="checkbox" title={item2.name} name="permission" id={item2.id} value={item2.slug} onChange={inputHandle}/>

                                          <label className="form-check-label" htmlFor={item2.id}>{item2.name}</label>
                                            </div>
                                          )
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

export default New