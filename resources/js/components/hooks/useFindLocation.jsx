import React from 'react'
import { useParams,useLocation } from 'react-router-dom';

const useFindLocation = () => {
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
        
        return useRoutePathPattern().replace(/\//g, "-")
}

export default useFindLocation
