import React from 'react'

//wraps its children in a responsive 12 grid row by materialize!

export default function BlockWrapper(props){
  
  return(
    <div className='row block'> 
      {props.children}         
      <style jsx>{`
        .block{
          padding:23px 1.14rem;
            border:1px solid #eaeaea;

        }
      `}</style>
    </div>
  )
  
}