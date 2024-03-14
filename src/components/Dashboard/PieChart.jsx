import React, { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import { GlobalContext } from '../../context/GlobalData';

const ApexChart = () => {
    
const { totalProducts, allCategories } = useContext(GlobalContext);

  const series = totalProducts();
  const options = {
    labels: allCategories(),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" width={500} />
      </div>

  );
};

export default ApexChart;
