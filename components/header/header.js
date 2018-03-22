import React from 'react'
import AppLogo from './app-logo'
import NavigationBar from './navigation-bar'
import UserMenuBar from './userMenu/user-menu-bar'

export default class Header extends React.Component{
  
  constructor(props){
    super(props)
  }
  
  render(){
    return(
          <header>
           <nav>
            <AppLogo />
            <NavigationBar />
            <UserMenuBar />
           </nav>
            <style jsx>{`
              header{
display:flex;
justify-content:space-between;
width:100%;
              }
nav{
display:flex;
justify-content:space-between;
padding: 0 1.14rem;
}
            `}
            </style>
          </header>
      )}
  
}