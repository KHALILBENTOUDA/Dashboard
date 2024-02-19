import React from 'react'
import ItemsDocumment from './ItemsDocumment'
const Documment = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
  return (
    <div className='documments'>
        <div className='table' >
            <h2>Name</h2>
            <h2>P/N</h2>
            <h2>Type</h2>
            <h2>Date</h2>
        </div>
                <ItemsDocumment color={'#06ccff'} name="first one" numberPage={12} type="privet" date={showTime}/>
                <ItemsDocumment color={'#fee800'} name="second one" numberPage={12} type="privet" date={showTime}/>
                <ItemsDocumment color={'#ff00be'} name="third one" numberPage={12} type="privet" date={showTime}/>
                <ItemsDocumment color={'#06ccff'} name="fourth one" numberPage={12} type="privet" date={showTime}/>
                <ItemsDocumment color={'#fee800'} name="fifeth one" numberPage={12} type="privet" date={showTime}/>
                <ItemsDocumment color={'#c689f9'} name="sexeth one" numberPage={12} type="privet" date={showTime}/>
    </div>
  )
}

export default Documment
