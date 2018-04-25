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
import muiThemeable from 'material-ui/styles/muiThemeable';
import Badge from 'material-ui/Badge';

class UserMenuBar extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      open: false,
    }
  }
  
  getNotificationIcon = (arrayLength) => {
    if(arrayLength > 0){
      return  (<Badge badgeContent={arrayLength}
                      secondary={true}
                      badgeStyle={{top: 18, right: 12, width: 20, height: 20}} >
                  <NotificationIcon color={'#df5850'} /> 
               </Badge>)
    }else{
      return (<NotificationIcon color={this.props.muiTheme.palette.disabledColor} />)
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
                                           role='Coordinadora' avatar='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' 
                                           color={this.props.muiTheme.palette.primary1Color}/>
                              <Divider />
                              <Menu>
                                <MenuItem primaryText="Configuración"
                                          leftIcon={<SettingsIcon />} />
                                <MenuItem primaryText="Cerrar Sesión"
                                          leftIcon={<LogoutIcon />} />
                              </Menu>
                            </div>)
    const notificationDropDown = this.getNotificationIcon(notifications.length)
           
     return(  
        <div className='menu'>
          <MenuDropdown icon={notificationDropDown} 
                        content={notificationList} 
                        tooltip={'Notificaciones'} />                 
          <MenuDropdown icon={<Avatar src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'
                                      size={32} /> }
                        content={userMenuContent} 
                        tooltip={'Usuario'}/>                     
            <style jsx>{`
              .menu{
                list-style:none;
                display:flex;
                flex-wrap:wrap;
                align-items:baseline;
                padding:0;
margin-top: -8px;
                }
.menu-dropdown{
margin:0 20px;
}

                a{
                color:black;
                }
            `}</style>
        </div>
    )
  }
   
  
}

export default muiThemeable()(UserMenuBar);

const UserDetail = function(props){
  
  const color = props.color;
  
  return(
    <div className='user-details' style={{ backgroundColor: color}}>

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
color:white;
              }
              .text-info div{
              margin-left:12px;
              margin-top:4px;
              }

            `}</style>
    </div>
  )
}

