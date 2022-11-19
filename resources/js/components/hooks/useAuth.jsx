import axios from 'axios';
import React ,{ useEffect,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'

const useAuth = () => {
    const [auth,setAuth] = useState(false);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get(`/api/checkingAuthenticate`)
        .then(res => {
            if(res.data.status === 200){
                    setAuth(true);
                }
                setLoading(false);
            });
            return () => {
                setAuth(false);
            }
    },[]);

    axios.interceptors.response.use(undefined,function axiosRetryInterceptor(err){
        if(err.response.status === 401){
            localStorage.removeItem('auth_token');
            navigate('/');
        }
        return Promise.reject(err);
    })

    

    if(loading){
        return 'loading....';
    }
    return auth;
}

export default useAuth