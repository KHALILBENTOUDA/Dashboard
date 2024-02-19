
import React,{useState} from 'react'
import Amount from './Amount';
import { Icon } from '@iconify/react';
import Documment from './Documment';
import Saved from './Saved'
// import Circles from './Circles'
import Circl from './Circl';
import Chart from './Chart';
const BodyDasboard = () => {
  const [percentage,setpercentage] = useState(88)
  const [percentage2,setpercentage2] = useState(27)
  const [percentage3,setpercentage3] = useState(55)
  return (
    <>
    <div className='bodyDashboard'>
      <div className="cyrcles">
        <div className="first" >
        <Circl  percentage={percentage} sercleWithe="200"  color="#ff00be" name="name1"/>
        </div>
        <div className="second">
        <Circl  percentage={percentage2} sercleWithe="200"  color="#fee800"  name="name2" />
        </div>
        <div className="third">
        <Circl  percentage={percentage3} sercleWithe="200" color="#06ccff"  name="name3"/>
        </div>
      </div>
      <div className="actions">
        <Amount/>
      <div className="activites">
        <div className="titleaction">
          <i>
            <Icon className='iconactive' icon='fluent:broad-activity-feed-16-filled'></Icon>
          </i>
          <h2>Activites</h2>
        </div>
        <Chart/>
        </div>
      </div>
        <div className="allproduct">
        <div className="projects">
          <Documment/>
        </div>
        <div className="save">
          <Saved/>
        </div>
        </div>
    </div>
    </>
  )
}

export default BodyDasboard
