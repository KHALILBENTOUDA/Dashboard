import React from 'react'
import { Icon } from '@iconify/react';
const ItemsDocumment = ({name,numberPage,type,date,color}) => {
   
  return (
    <div className='data-docs'>
        <p className='name'>
            <Icon className='icon' style={{color:color}}  icon={'system-uicons:document'}></Icon>
            {name}
        </p>
        <span className='np'>{numberPage}</span>
        <p className='type'>{type}</p>
        <span className='date'>{date}</span>
    </div>
  )
}

export default ItemsDocumment
