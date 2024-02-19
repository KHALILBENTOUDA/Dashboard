import React from 'react'

import { Icon } from '@iconify/react'
const TopSlid = ({click}) => {
  return (
    <div className="slidertop">
      <Icon onClick={click}  className='menu-icon' icon={'material-symbols:menu-rounded'}></Icon>
      <div className="avatar">
        <h4>UserName</h4>
        <div className="imgprofile">
            <span>B</span>
        </div>
      </div>
    </div>
  )
}

export default TopSlid
