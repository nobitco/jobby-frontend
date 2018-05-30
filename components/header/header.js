import React from 'react'
import AppLogo from './app-logo'
import NavigationBar from './navigation-bar'
import UserMenuBar from './userMenu/user-menu-bar'
import Paper from 'material-ui/Paper'
export default class Header extends React.Component{
  
  constructor(props){
    super(props)
  } 
  
  render(){
    const wrapperStyle = {
      display: 'flex',
      flexContent: 'center',
      alignItems: 'center',
      zIndex:1000,
      padding:'0 15px'
    }
    const headerStyle = {
                position: 'fixed',
                top:0,
                left:0,
                width:'100%',
                margin:0,
                zIndex:10,
                marginBottom:6,
    }
    return(
          <header className='row' style={headerStyle}>
          <Paper style={wrapperStyle} zDepth={1}>
           <nav className='col s12 m12 l12' style={wrapperStyle}>
            <AppLogo />
            <NavigationBar context={this.props.context} />
            <UserMenuBar />
           </nav>
            <style jsx>{`
             
              nav{
              display:flex;
              justify-content:space-between;
              }
            `}
            </style>
            </Paper>
          </header>
      )}
  
}