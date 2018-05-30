import React from 'react'
import {List, ListItem} from 'material-ui/List';
import SideBarHeader from './side-bar-header'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import {violet} from '../../theme/theme-colors'

export default class SideBar extends React.Component{
    constructor(props){
      super(props)
    }

    getValue = (event,value) => this.props.getState(value, event)
    
    
    isSelected = (value, context) => value === context ? { transition: 'color 1s, backgroundColor 2s', width: '100%', fontSize: '.9em', fontWeight: '600', paddingLeft: 60, backgroundColor: violet, color: 'white'} : { width:'100%', fontSize: '.8em', paddingLeft: 60 }
    
    getMenuItems = (array, context) => array.map((item, index) => <MenuItem  leftIcon={item.leftIcon(item.value, context)} 
                                                                         value={item.value}
                                                                         primaryText={item.label}
                                                                         key={index}
                                                                         innerDivStyle={this.isSelected(item.value,context)}/>) 
    render(){
        const context = this.props.context
        const fixedStyle = {
          position: 'fixed',
          top:0,
          left:0,
          marginTop: 100,
          zIndex:10,
        } 
        const menuItems = this.props.menuItems
        return(
        
         <section id='side-bar' className={this.props.className} style={fixedStyle}> 
         
           <SideBarHeader />
           <div className='row'>
            <div className='col s12 hide-on-med-and-up'>
              <Menu autoWidth={true} 
                     onChange={this.getValue}
                     style={{marginTop: 24, display: 'flex'}}
                     listStyle={{ display: 'flex', flexWrap: 'nowrap'}}>
                {
                   this.getMenuItems(menuItems, context)
                }
              </Menu>
            </div>
            <div className='col s12 hide-on-small-only'>
               <Menu autoWidth={true} 
                     onChange={this.getValue}
                     style={{marginTop: 15}}>
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