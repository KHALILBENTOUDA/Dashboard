import React from 'react'
import { Icon } from '@iconify/react';
import imgeline from "../../Images/data-analytics-ascending-line-chart.png";
const Amount = () => {
  return (
    <div className="sales">
          <div className="total-sales">
            <h2><i><Icon className='icon' icon={'mdi:drive-document'}></Icon></i> Total Products</h2>
            <div className="documont-data">
                <span>82</span>
                <p>Last 30 Days</p>
            </div>
          </div>
          <div className="total-amount">
            <h2> <i><Icon className='' icon={'ri:money-dollar-circle-fill'}></Icon></i>  Total Sales</h2>
            <div className="amount">
                <div className='price'>50000<span className=''><Icon className='icon-dollar' icon={'carbon:currency-dollar'}></Icon></span></div>
                <p>Last 30 Days</p>
                    <div className="amount-persontage">
                    <img src={imgeline}/>
                        <span>50%</span>
                    </div>
            </div>
          </div>
        </div>
  )
}

export default Amount
