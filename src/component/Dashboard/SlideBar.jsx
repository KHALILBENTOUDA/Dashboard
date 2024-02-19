import React from 'react'
import { Icon } from '@iconify/react';
const SlideBar = ({open}) => {
  return (
    <>
    <div id=''  className={open? "sli":"slidebar"}>
      <div className="menu">
        <ul>
          <li>
            <a href=""><i><Icon icon="material-symbols:add-home-rounded" /></i>Home</a>
          </li>
          <li>
            <a href=""><i><Icon icon="ic:round-space-dashboard" /></i>Dashboard</a>
          </li>
          <li>
            <a href=""><i><Icon icon="ph:squares-four-fill" /></i>Projects</a>
          </li>
          <li>
            <a href=""><i><Icon icon="fluent:people-team-add-24-filled" /></i>Teams</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default SlideBar
