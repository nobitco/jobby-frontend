import React from 'react'

//wraps its children in a responsive 12 grid row. By materialize!

export default function BlockWrapper(props){
  const style = {
  position: 'relative', 
  marginTop: 80
  }

  return(
    <div className='row block' style={style} id='block-wrapper'> 
      {props.children}         
      <style jsx>{`
        .block{
          padding:0 15px;
        }
      `}</style> 
    </div>
  )
  
}