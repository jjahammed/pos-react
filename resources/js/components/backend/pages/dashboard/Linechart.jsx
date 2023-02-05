import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 function Linechart({lastMonthLineChart,thisMonthLineChart}) {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        //   title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        //   },
        },
      };
      
      const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'This Month',
            data: thisMonthLineChart,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Last Month',
            data: lastMonthLineChart,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <div className="col-xl-12 col-lg-12">
            <div className="card">
                <div className="card-header">
                <h5>Sales Compare By Months</h5>
                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                </div>
                <div className="card-body">
                <div className="dashboard-chart-container">
                <Line options={options} data={data} />
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default Linechart
