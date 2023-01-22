import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Input from '../backend/form/Input'
import Swal from 'sweetalert2'


const Login = () => {
    const navigate = useNavigate();
    const [inputValue,setInputValue] = useState({
        name : '01798596317',
        password : 'password',
        error_log : []
    })
    useEffect(() => {
        console.log(inputValue.error_log.name);
    }, [])
    

    const handleInput = (e) => {
        setInputValue({
        ...inputValue,
        [e.target.name] : e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/api/login',inputValue).then(res => {
            console.log(inputValue.error_log);
          if(res.data.status === 200){
            console.log(res.data.data)
            localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('user',JSON.stringify(res.data.data));
                Swal.fire(
                  'Welcome!',
                  res.data.message,
                  'success'
                )
                // res.data.role === 1 ? navigate('/admin/dashboard') : navigate('/user/dashboard');
                // navigate('/admin/dashboard')
                window.location.href = '/admin/dashboard'
          }else if(res.data.status === 401){
            Swal.fire(
              'Decline!',
              res.data.message,
              'error'
            )
          }else{
            setInputValue( {
              ...inputValue,
              error_log : res.data.error
            })
          }
        }).catch(err => err)
    }
  return (
    <div className="authentication-box">
                <h4>LOGIN</h4>
                <h6>Enter your Username and Password For Login or Signup</h6>
                <div className="card mt-4 p-4 mb-0">
                    <form className="theme-form" onSubmit={submitForm}>
                        <Input type='text' name='name' lblText='email/user id/ phone' value={inputValue.name} error={inputValue.error_log.name} onChange={handleInput} placeholder='email/user id/ phone' className='form-control form-control-lg' />

                        <Input type='password' name='password' lblText='password' value={inputValue.password} error={inputValue.error_log.password} onChange={handleInput} placeholder='password' className='form-control form-control-lg' />

                       


                        <div className="row mt-3">
                            <div className="col-md-3">
                            <button type="submit" className="btn btn-secondary">LOGIN</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <Link className='pull-right text-primary' to='/register'>create new account</Link>
                            </div>
                            <div className="col-md-6">
                                <Link className='text-left text-primary' to='/forget-password'>forget password</Link>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
  )
}

export default Login