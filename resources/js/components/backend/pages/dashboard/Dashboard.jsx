import React,{useState,useEffect} from 'react'
import Barchart from './Barchart'
import Heading from './Heading'
import Linechart from './Linechart'
import Piechart from './Piechart'
import Stats from './Stats'
import Loading from '../extra/Loading'

const Dashboard = () => {

  const [heading, setHeading] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Dashboard'
    const getHeading = async () => {
      await axios.get('/api/headingPart').then((res) => {
        setHeading(res.data.data)
      });
      setLoading(false);
    };
    getHeading();

  }, [])

  
  if(loading){
    return <Loading />
}

  return (
  <div className="container-fluid page-header">
    <div className="row">
        <Heading background="bg-primary" icon="fa-solid fa-cart-shopping" title='Total Purcheased' amount={heading.buy} />
        <Heading background="bg-info" icon="fa-brands fa-sellsy" title='Total Sales' amount={heading.sale}/>
        <Heading background="bg-warning" icon="fa-solid fa-cubes-stacked" title='Stock Amount' amount={heading.stockPrice}/>
        <Heading background="bg-success" icon="fa-sharp fa-solid fa-sack-dollar" title='Product Profits' amount={heading.profit}/>
    </div>

    <div className="row">
        <Stats title='Purcheased' today={heading.buyToday} yesterday={heading.buyYesterday} thisMonth={heading.buyTthismonth} lastMonth={heading.buyLastmonth} thisYear={heading.buyTthisyear} lastYear={heading.buyLastyear}/>
        <Stats title='Sales' today={heading.saleToday} yesterday={heading.saleYesterday} thisMonth={heading.saleThismonth} lastMonth={heading.saleLastmonth} thisYear={heading.saleThisyear} lastYear={heading.saleLastyear}/>
        <Stats title='Profits' today={heading.profitToday} yesterday={heading.profitYesterday} thisMonth={heading.saleLastyear} lastMonth={heading.profitLastmonth} thisYear={heading.profitThisyear} lastYear={heading.profitLastyear}/>
    </div>

    <div className="row">
      <Barchart thisYearBarChart={heading.thisYearBarChart} lastYearBarChart={heading.lastYearBarChart} topTenProductByPrice={heading.topTenProductByPrice}/>
      <Piechart topTenProductByPrice={heading.topTenProductByPrice} topTenProductByQuantity={heading.topTenProductByQuantity} />
    </div>
    <div className="row">
      <Linechart thisMonthLineChart={heading.thisMonthLineChart} lastMonthLineChart={heading.lastMonthLineChart}/>
    </div>
  </div>

  )
}

export default Dashboard