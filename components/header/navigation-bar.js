import React from 'react'
import {violet} from '../../theme/theme-colors'
import Link from 'next/link'
export default class navigationBar extends React.Component{
  constructor(props){
    super(props)
  }
  
  getLink = (id, index) =>{ 
     const selectedStyle =  { fontWeight: 'bold', fontSize: 17, color: violet }
    if(id !== this.props.context){
       const href= '/' + id
       return (<li key={index}><Link href={href}><h4><a href='#' id={id} >{id}</a></h4></Link></li>)
    }else{
      return (<li key={index}><h4><a style={selectedStyle}>{id}</a></h4></li>)
    }
   

  }
  
render(){
    const pages = [ 'dashboard', 'vacantes']
    return(
          <ul>
           { pages.map((item, index) => this.getLink(item, index)) }
        
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
  
}