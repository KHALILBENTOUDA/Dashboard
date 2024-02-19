import React from 'react'
import CountUp from 'react-countup';
const Circl = ({percentage,sercleWithe,color,name}) => {
    const sorce=50;
    const dashArray= sorce * Math.PI *2;
    const dashoffset=dashArray - (dashArray * percentage)/100;
    // const counter=(n)=>{
    //     const {number} = useSpring({
    //       from:{number:0},
    //       number:n,
    //       delay:200,
    //       config:{mass:1,tension:20,friction:10},
    //     })
    //     return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
    // }
  return (
    <>
    <style>
        {
          `
          :root{
            --primary--color:#240738;
            --SECOONF--color:#c689f9;
          }
          `
        }
    </style>
    <div className='circular'>
    <div  className="rotated">
    <div id='bot' className="bot"
        style={{
            transform:`rotate(calc(3.6deg * ${percentage} ))`,
        }}
        
        ></div>
         <svg 
       
      width={sercleWithe} 
      height={sercleWithe} 
      viewBox={`0,0,${sercleWithe} ${sercleWithe}`}
      >
        <circle 
        cx={sercleWithe / 2} 
        cy={sercleWithe / 2} 
        strokeWidth="1px" 
        r={sorce}
        className='circle-background'
        />
        <circle 
        cx={sercleWithe / 2} 
        cy={sercleWithe / 2} 
        strokeWidth="3px" 
        r={sorce}
        className='circle-progress'
        style={{
            strokeDasharray:dashArray,
            strokeDashoffset:dashoffset,
            stroke:color,
        }}
        transform={`rotate(-90 ${sercleWithe / 2} ${sercleWithe / 2})`}
        />
      </svg>
      <div className="texts">
        <h2 className='text-persentage'>
          <CountUp  end={percentage}
          duration={3}
          width={20}
          style={{
            fontWeight:800,
            fontSize:40
          }}
          />
            <span>%</span>
          </h2>
          <p>{name}</p>
      </div>
    </div>
     
    </div>
    </>
  )
}

export default Circl
