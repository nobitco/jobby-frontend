import React from 'react'

export default function navigationBar(props){

    return(
        
          <ul>
            <li><h4><a href='#'>Dashboard</a></h4></li>
             <li><h4><a href='#'>Vacantes</a></h4></li>
          
          <style jsx>{`

            ul{
 width:260px;
list-style:none;
display:flex;
justify-content:space-around;
padding:0;
}
          `}</style>
          </ul>
       
    )
  
}