import React from 'react'


export default function ContentPanel(props){
  
  return(
    <section id='content-panel' className='col s12 m8 l9'>
     { props.children }
      <style jsx>{`
            #content-panel{
            padding-left: 40px;
            }
        `}</style>
    </section>
  )
} 