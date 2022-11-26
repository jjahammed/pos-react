import axios from 'axios';
import React ,{ useEffect,useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';

const usePermission = () => {
    const [permission,setPermission] = useState([]);
    const [auth,setAuth] = useState(false);
    const [loading,setLoading] = useState(true);
    
    function useRoutePathPattern() {
        const routeParams = useParams();
        const location = useLocation();
      
        let routePathPattern = location.pathname;
      
        Object.keys(routeParams)
          .filter((paramKey) => paramKey !== '*')
          .forEach((paramKey) => {
            const paramValue = routeParams[paramKey];
            const regexMiddle = new RegExp(`\/${paramValue}\/`, 'g');
            const regexEnd = new RegExp(`\/${paramValue}$`, 'g');
      
            routePathPattern = routePathPattern.replaceAll(
              regexMiddle,
              `/:${paramKey}/`,
            );
            routePathPattern = routePathPattern.replaceAll(regexEnd, `/:${paramKey}`);
          });
      
          return routePathPattern;
        }
        
        let jon = useRoutePathPattern().replace(/\//g, "-")
        console.log(jon)
        useEffect(() => {
        axios.get(`/api/permission/${jon}`).then(res =>
            {
              if(res.data.status === 200){
                const permis = JSON.parse(res.data.data.value);
                setPermission(permis) 
                const makePermission = permis.find(item => item == jon)
                
                if(makePermission.length > 0) {
                  setAuth(true);
                  setLoading(false);
                }else{
                  setAuth(false);
                  setLoading(false);
                }
            }else{
                setAuth(false);
                setLoading(false);
            }
          }
          );
      }, [])

      useEffect(() => {
        const makePermission = permission.filter(item => item == jon)
        console.log(makePermission.length)
        if(makePermission.length > 0) {
          setAuth(true);
          setLoading(false);
        }else{
          setAuth(false);
          setLoading(false);
        }
      }, [jon])
      

    if(loading){
        return 'loading....';
    }
    return auth;
}

export default usePermission