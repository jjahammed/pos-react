import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
 

ChartJS.register(ArcElement, Tooltip, Legend);
const Piechart = ({topTenProductByPrice,topTenProductByQuantity}) => {
    const [topten,setTopten] = useState(1);
    const handleSelect = (e) => {
        console.log(e.target.value);
        setTopten(e.target.value);
    }
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            display: false,
          },
        //   title: {
        //     display: true,
        //     text: 'Sales Compare',
        //   },
        },
      };
      
      const data = {
        labels: topten == 1 ? topTenProductByPrice.map(item => item.product) : topTenProductByQuantity.map(item => item.product) ,
        datasets: [
          {
            label: topten == 1 ? 'amount' : 'qty',
            data: topten == 1 ? topTenProductByPrice.map(item => item.amount) : topTenProductByQuantity.map(item => item.quantity),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            // borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            // ],
            // borderWidth: 1,
          },
        ],
      };
  return (
        <div className="col-xl-4 col-lg-12">
            <div className="card">
                <div className="card-header">
                <h5>Top Ten Products</h5>
                
                </div>
                <div className="card-body">
                <select className='form-control mb-4' onChange={handleSelect} name="topten" value={topten}>
                    <option value='1'>Select By Price</option>
                    <option value='2'>Select By Quantity</option>
                </select>
                <div className="dashboard-chart-container">
                    <Pie options={options} data={data} />;
                </div>
                </div>
            </div>
        </div>
  )
}

export default Piechart


