import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconBtn from 'material-ui/IconButton';


export default function MenuDropdown(props){

     return(        
            <div>
              <IconMenu
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                iconButtonElement={<IconBtn>{props.icon}</IconBtn>}
              >
                {props.content}
              </IconMenu>
            </div>
     
    )

}

