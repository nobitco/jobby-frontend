import React from 'react'
import InfoCard from './info-card'

export default function ContentPanel(props){
  
  return(
    <section id='content-panel' className='col s12 m8 l9'>
      <InfoCard items={[1,2,3,4,5]}
                title='Entregas Vencidas'/>
      <InfoCard items={[1,2,3,4,5]}
                title='Entregas Próximas'/>
      <style jsx>{`
            #content-panel{
            padding-left: 40px;
            }
        `}</style>
    </section>
  )
} 