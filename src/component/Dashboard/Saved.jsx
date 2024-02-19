import React from 'react'
import { Icon } from '@iconify/react';
import ItemsSaved from './ItemsSaved';
const Saved = () => {
  return (
    <>
       <h2>
            <i>
                <Icon className='icon' icon={'material-symbols:bookmark-rounded'}></Icon>
            </i>
            Saved
       </h2>
       
       <ItemsSaved name={'first saved'}/>
       <ItemsSaved name={'second saved'}/>
       <ItemsSaved name={'third saved'}/>
       <ItemsSaved name={'fourth saved'}/>
       <ItemsSaved name={'sexth saved'}/>
    </>
  )
}

export default Saved
