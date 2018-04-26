import React, {Component} from 'react';
import Divider from  'material-ui/Divider'
import {violet} from '../theme/theme-colors'
import Avatar from 'material-ui/Avatar';

export default function JobListItem(props){
  
  return(
    <div id='list-item'>
     <Avatar size={52} 
             src={props.avatar} 
             style={{float: 'left', marginRight: 16}}
             />
     <article>
       <div>
        <small className='grey-text text-darken-1'>{props.place}</small>
        <small className='grey-text text-darken-1 right'>{props.city}</small>
       </div>
        <h5 style={{color: violet}}>
          { props.jobTitle }
         <small className='grey-text right'>{props.posttime}</small>
        </h5>
     </article>

      <style jsx>{`
        #list-item{
          width:100%;
          border-bottom: 1px solid #e0e0e0;
          padding:20px 18px 10px 18px;
        }
        #list-item:hover{
        cursor:pointer;
        background-color:#eeeeee;
        }
        h5 small{
          font-size: 0.5em;
          margin-top: 2px;
        }
      `}</style>
    </div>
  )
}