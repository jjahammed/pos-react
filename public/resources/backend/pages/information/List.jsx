import React,{useEffect,useState} from 'react'
import {Link,useLocation,useParams} from 'react-router-dom'
import Loading from '../extra/Loading';
import parse from 'html-react-parser';



const Sample = () => {
  const {page} = useParams()
  const outlet = useLocation();
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState([])

  useEffect(() => {
    document.title = page
    axios.get(`/api/information/${page}`).then(res => {setInfo(res.data.data)});
    setLoading(false);
}, [page])

console.log(typeof (info.detail));
if(loading){
  return <Loading />
}
  return (

    <div>
        <div className="container-fluid">
        <div className="page-header">
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className='d-inline'>{page}</h5>
                <Link to={`/admin/information/${page}/edit`} className='btn btn-success pull-right d-inline'><i className="fa-regular fa-pen-to-square text-light"></i></Link>
              </div>
              <div className="card-body">
                {/* {parse(info.detail.toString())} */}
                {parse(info.detail)}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sample