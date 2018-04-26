import React from 'react'
import BlockWrapper from '../layout/block-wrapper'
import Avatar from 'material-ui/Avatar'
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import IconButton from 'material-ui/IconButton';
import {grey300} from 'material-ui/styles/colors';

export default function SideBarHeader(){
    const configbtnstyle = { position: 'absolute', top: 0 , right: 4 }
    return(
     <div id='side-bar-header' className='hide-on-small-only' >
     
        <Avatar src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'
                size={38} style={{ marginRight: 16, marginBottom: 8}} />

        <article >
          <p id='title' >Bienvenida Pepita</p>
          <small>Universidad de la vida</small>       
        </article>

      
      <IconButton tooltip="Configuración"
                      tooltipPosition="bottom-left"
                      style={configbtnstyle}>
            <SettingsIcon color={grey300}  />
      </IconButton>
      
       <style jsx>{`
            #side-bar-header{
              width:100%;
              display:flex;
              margin: 18px auto;
              position:relative;
              padding: 10px 24px;
              flex-wrap: wrap
            }
            #title{
              font-size: .9em;
              font-weight:bold;
            }
            small{font-size:.7em}
          article{
            margin-top:6px;
            }
        `}</style>
     </div>
    )
  
}