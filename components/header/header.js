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
      alignItems: 'center'
    }
    return(
          <header className='row'>
          <Paper style={wrapperStyle}>
           <nav className='col s12 m10 l8 pull-l2 pull-m1' style={wrapperStyle}>
            <AppLogo />
            <NavigationBar />
            <UserMenuBar />
           </nav>
            <style jsx>{`
              header{
width:100%;
              }
nav{
display:flex;
justify-content:space-between;
padding: 0 1.14rem;
}
            `}
            </style>
            </Paper>
          </header>
      )}
  
}