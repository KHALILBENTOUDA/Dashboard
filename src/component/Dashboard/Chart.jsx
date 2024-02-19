import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts';
const Chart = () => {
  const [state, setstate] = useState({
    series: [{
      name: 'series1',
      data: [12, 78, 25, 12,50, 5, 25, 80,42]
    }, {
      name: 'series2',
      data: [20, 32, 25, 30,12, 62, 25, 10,0]
    },
    {
      name: 'series2',
      data: [1, 42, 25, 5,30,32, 80, 12,20]
    },
  ],
    options: {
      chart: {
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
      },
      stroke: {
        width: 1.5,
      }
      ,
      legend: {
        position: 'top'
      }
      ,
      grid: {
        borderColor: 'none',
        strokeDashArray: 0,
      }
      ,
      lines:{
        show: false,
      }
      ,
      xaxis: {
        categories: ["Jan", "Feb", "Mar","Apr","May","Jun","Aug","Sep","Oct","Nov","Dec"],
        
        

        axisBorder: {
          show: true,
          color: '#ddddddbd',
          offsetX: 1,
          offsetY: 0,
      },
      },

      colors: ['#ff00be', '#06ccff', '#fee800', '#E91E63', '#FF9800'],
      
      yaxis: {
        min: 0,
        max: 100,
        
        axisBorder: {
          show: true,
          color: '#ddddddbd',
          offsetX: 0,
          offsetY: 0,
          width:2,
      },

      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#fff',
        width: 4,
        offsetX: 0,
        offsetY: 0
    },
    lines: {
      show: false,
    },
    },
    chart: {
      foreColor: '#ddddddbd',
    },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })
  return (
    <>
      
      <ReactApexChart options={state.options} series={state.series} type="area" height={250}   />
    </>
  )
}

export default Chart
