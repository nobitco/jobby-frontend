import React from 'react'
import {List, ListItem} from 'material-ui/List';
import SideBarHeader from './side-bar-header'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import {violet} from '../../theme/theme-colors'

var maxWidth, marginTop

export default class SideBar extends React.Component{

    constructor(props){
      super(props)
    }
  
    getValue = (event,value) => this.props.getState(value, event)
    
    isSelected = (value, context) => value === context ? { transition: 'color 1s, backgroundColor 2s', fontSize: '.9em', fontWeight: '600', paddingLeft: 60, backgroundColor: violet, color: 'white'} : { fontSize: '.8em', paddingLeft: 60 }
    
    getMenuItems = (array, context) => array.map((item, index) => <MenuItem  leftIcon={item.leftIcon(item.value, context)} 
                                                                             value={item.value}
                                                                             primaryText={item.label}
                                                                             key={index}
                                                                             innerDivStyle={this.isSelected(item.value,context)}/>) 
    render(){
      
        const context = this.props.context
        const style = {
          large : {
            position: 'fixed',
            top:0,
            left:0,
            marginTop: 80,
            zIndex:8,
            maxWidth: 350
          },
          compact: {
            position: 'fixed',
            top:0,
            left:0,
            marginTop: 48,
            zIndex:8,
            backgroundColor: violet,
            paddingTop: 25
          }
        } 
        const menuItems = this.props.menuItems
        const sidebarStyle = this.props.compact ? style.compact : style.large
        return(
        
         <section id='side-bar' className={this.props.className} style={sidebarStyle}> 
         
           <SideBarHeader />
           <div className='row'>
            <div className='col s12'>
               <Menu onChange={this.getValue}
                     style={this.props.compact ? { width: '100%', display: 'flex !important'} : {} }>
                {
                   this.getMenuItems(menuItems, context)
                }
              </Menu>
            </div>
          </div>
           <style jsx>{`
                #side-bar{
                background-color: #fff;
                padding:0;
                margin-bottom:38px;
                overflow:hidden;
                }

            `}</style>
            </section>
        )
    }
  
}