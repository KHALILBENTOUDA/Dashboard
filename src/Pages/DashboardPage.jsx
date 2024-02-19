import React,{useState} from 'react'
import BodyDasboard from '../component/Dashboard/BodyDasboard'
import SlideBar from '../component/Dashboard/SlideBar'
import TopSlid from '../component/Dashboard/TopSlid'

const DashboardPage = () => {
  const [menuClick, setmenuClick] = useState()
  const handlCheckmenu=()=>{
    setmenuClick(!menuClick)
  }
  return (
    <div className='Dashboard'>
        <TopSlid  click={handlCheckmenu} />
        <div className='flex-dashboard'>
        <SlideBar open={menuClick}/>
        <BodyDasboard/>
        </div>
    </div>
  )
}

export default DashboardPage
