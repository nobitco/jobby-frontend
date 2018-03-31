import React from 'react'
import BlockWrapper from '../layout/block-wrapper'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import SettingsIcon from 'material-ui/svg-icons/action/settings';
export default function SideBarHeader(){

    return(
     <div id='side-bar-header'>
      <Avatar src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'
              size={60}
              style={{marginTop:15}} />
           
      <article>
        <h5>Pepita Perez</h5>
        <p>Coordinadora</p>
        <small>Universidad de la vida</small>
         <RaisedButton label="Configurar"
                        disabled={true} 
                        icon={<SettingsIcon />}
                        style={{marginTop:15}}/>
      </article>
      
       <style jsx>{`
            #side-bar-header{
            width:100%;
            display:flex;
            margin: 22px auto;
            }
          article{
margin-left:15px;
}
        `}</style>
     </div>
    )
  
}