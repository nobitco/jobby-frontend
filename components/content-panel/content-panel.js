import React from 'react'


export default function ContentPanel(props){
  
  return(
    <section id='content-panel' className='col s12 m9 l8 push-l1'>
     { props.children }
      <style jsx>{`
           
        `}</style>
    </section>
  )
} 