import React from 'react'
import {violet} from '../../theme/theme-colors'

export default function appLogo(props){

    return(
      <div> 
        <p><a href='#' ><span style={{color: violet, fontSize: '1.1em'}}>J</span>obby</a></p>
         <style jsx>{`
           div{
              font-weight:500;
              font-size: 26px;
            }
            div a{
             color:#141414;
            }
        `}</style>
      </div>
    )
  
}