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
    }
    return(
          <header className='row'>
          <Paper style={wrapperStyle} zDepth={1}>
           <nav className='col s12 m12 l10 pull-l1' style={wrapperStyle}>
            <AppLogo />
            <NavigationBar context={this.props.context} />
            <UserMenuBar />
           </nav>
            <style jsx>{`
              header.row{
                width:100%;
                margin:0;
                z-index:10;
                margin-bottom:6px
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