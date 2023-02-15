import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Barchart = ({thisYearBarChart,lastYearBarChart}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        //   title: {
        //     display: true,
        //     text: 'Sales Compare',
        //   },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

    const data = {
        labels,
        datasets: [
          {
            label: 'This Year',
            data: thisYearBarChart,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Last Year',
            data: lastYearBarChart,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

  return (
        <div className="col-xl-8 col-lg-12">
            <div className="card">
                <div className="card-header">
                <h5>Sales Compare By Years</h5>
                </div>
                <div className="card-body">
                <div className="dashboard-chart-container">
                    <Bar options={options} data={data} />;
                </div>
                </div>
            </div>
        </div>
  )
}

export default Barchart


