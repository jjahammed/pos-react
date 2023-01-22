import React,{useState,useEffect} from 'react'
import Heading from './Heading'
import Stats from './Stats'

const Dashboard = () => {

  const [heading, setHeading] = useState([])
  useEffect(() => {
    document.title = 'Dashboard'
    const getHeading = async () => {
      await axios.get('/api/headingPart').then((res) => {
        setHeading(res.data.data)
      });
    };
    getHeading();
  }, [])
  console.log(heading);
  return (
  <div className="container-fluid page-header">
    <div className="row">
        <Heading background="bg-primary" icon="fa-solid fa-cart-shopping" title='Total Purcheased' amount={heading.buy} />
        <Heading background="bg-info" icon="fa-brands fa-sellsy" title='Total Sales' amount={heading.sale}/>
        <Heading background="bg-warning" icon="fa-solid fa-cubes-stacked" title='Stock Amount' amount={heading.stockPrice}/>
        <Heading background="bg-success" icon="fa-sharp fa-solid fa-sack-dollar" title='Product Profits' amount={heading.profit}/>
    </div>
    <div className="row">
        <Stats title='Purcheased' today='100.00' yesterday='200.00' thisMonth='2000.00' lastMonth='2500.00' thisYear='10000.00' lastYear='30000.00'/>
        <Stats title='Sales' today='200.00' yesterday='200.00' thisMonth='2000.00' lastMonth='2500.00' thisYear='10000.00' lastYear='30000.00'/>
        <Stats title='Profits' today='300.00' yesterday='200.00' thisMonth='2000.00' lastMonth='2500.00' thisYear='10000.00' lastYear='30000.00'/>
    </div>
  </div>

  )
}

export default Dashboard