import React from 'react'
import InfoCard from './info-card'

export default function ContentPanel(props){
  
  return(
    <section id='content-panel' className='col s12 m8 l9'>
     <article>
       <h5> Entregas Vencidas</h5>
      <InfoCard />
     </article>
     <article>
       <h5> Entregas Próximas</h5>
     </article>
      <style jsx>{`
            #content-panel{
            padding-left: 40px;
            border:1px solid #eaeaea;
            }
        `}</style>
    </section>
  )
} 