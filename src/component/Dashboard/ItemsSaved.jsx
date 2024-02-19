import React from 'react'
import { Icon } from '@iconify/react';

const ItemsSaved = ({name}) => {
  return (
    
    <div className="body-save">

      <span>
          {
            name[0]
          }
      </span>
      <div className="name-saved">
      <h3>
          {
              name
          }
      </h3>
      <p>
          name 
      </p>
      </div>
      <Icon className='icon-points' icon={'zondicons:dots-horizontal-triple'}></Icon>
    </div>
    
  )
}

export default ItemsSaved
