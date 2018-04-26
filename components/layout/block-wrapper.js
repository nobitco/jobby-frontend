import React from 'react'

//wraps its children in a responsive 12 grid row. By materialize!

export default function BlockWrapper(props){
  
  return(
    <div className='row block'> 
      {props.children}         
      <style jsx>{`
        .block{
          padding:0;
        }
      `}</style> 
    </div>
  )
  
}