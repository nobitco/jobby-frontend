import React from 'react'
import Avatar from 'material-ui/Avatar'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app';
import IconMenu from 'material-ui/IconMenu';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark';
import Divider from 'material-ui/Divider';
import MenuDropdown from './menu-dropdown'

export default class UserMenuBar extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      open: false,
    }
  }

  render(){
    
    const notifications = [
      {
      'title' : 'Notification 1',
      'time': 'Today'
      },
       {
      'title' : 'Notification 2',
      'time': 'Yesterdar'
      },
       {
      'title' : 'Notification 3',
      'time': 'Tomorrow'
      }
     ];
    
    const notificationList = (<List>
                                <Subheader>Notificaciones</Subheader>
                                <Divider/>
                                { 
                                  notifications.map( (item, index) => (<ListItem primaryText={item.title}
                                                                                  leftAvatar={<BookmarkIcon  />}
                                                                                  key={index}/>)
                                )}
                            </List>) 
    const userMenuContent = (<div>
                              <UserDetail name={'Pepita Perez'} 
                                           role='Coordinadora' avatar='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' />
                              <Divider />
                              <Menu>
                                <MenuItem primaryText="Configuración"
                                          leftIcon={<SettingsIcon />} />
                                <MenuItem primaryText="Cerrar Sesión"
                                          leftIcon={<LogoutIcon />} />
                              </Menu>
                            </div>)
           
     return(  
        <div className='menu'>
          <MenuDropdown icon={<NotificationIcon />} 
                        content={notificationList} />                 
          <MenuDropdown icon={<Avatar src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'
                        size={32}
                        style={{marginTop:20}}/> }
                        content={userMenuContent} />                     
            <style jsx>{`
              .menu{
                width:140px;
                list-style:none;
                display:flex;
                flex-wrap:wrap;
                justify-content:space-around;
                align-items:center;
                padding:0;
                }

                a{
                color:black;
                }
            `}</style>
        </div>
    )
  }
   
  
}

const UserDetail = function(props){
  return(
    <div className='user-details'>

        <Avatar src={props.avatar}
                size={52}
          />

       <div className='text-info'>
        <div className='name'>{props.name}</div>
        <div className='role'>{props.role}</div>
       </div>
       <style jsx>{`
              .user-details{
                width:100%;
                padding: 34px 16px;
                display:flex;
                flex-wrap:wrap;
                font-size:20px;
                }

              .role{
                font-size:.8rem;
                }

              .text-info{
              width:70%;
              }
              .text-info div{
              margin-left:12px;
              margin-top:4px;
              }

            `}</style>
    </div>
  )
}