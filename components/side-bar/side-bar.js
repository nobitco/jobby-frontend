import React from 'react'
import {List, ListItem} from 'material-ui/List';
import SideBarHeader from './side-bar-header'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import {violet} from '../../theme/theme-colors'
import EntregaIcon from 'material-ui/svg-icons/action/description';
import PracticantesIcon from 'material-ui/svg-icons/social/people';
import TutoresIcon  from 'material-ui/svg-icons/social/school';
import EmpresasIcon  from 'material-ui/svg-icons/social/location-city';
import FontIcon from 'material-ui/FontIcon';
export default class SideBar extends React.Component{
    constructor(props){
      super(props)
    }

    getValue = (event,value) => this.props.getState(value)
    
    
    isSelected = (value, context) => value === context ? { fontSize: '.9em', fontWeight: 'bold', paddingLeft: 60, color: violet } : { fontSize: '.8em', paddingLeft: 60 }
    
    getMenuItems = (array, context) => array.map((item, index) => <MenuItem  leftIcon={item.leftIcon(item.value, context)} 
                                                                         value={item.value}
                                                                         primaryText={item.label}
                                                                         key={index}
                                                                         innerDivStyle={this.isSelected(item.value,context)}/>) 
    render(){
        const context = this.props.context
        
        const menuItems = [ { label: 'Entregas',
                              value: 'entregas',
                              leftIcon: function(value, context){ return <EntregaIcon color={this.value === context && violet }/> },
                            },
                           { label: 'Practicantes',
                             value: 'practicantes',
                             leftIcon: function(value, context){ return <PracticantesIcon color={this.value === context && violet}/> },
                            },
                           { label: 'Tutores',
                             value: 'tutores',
                             leftIcon: function(value, context){ return <TutoresIcon color={this.value === context && violet}/> },
                            },
                           { label: 'Empresas',
                             value: 'empresas',
                             leftIcon: function(value, context){ return <EmpresasIcon color={this.value === context && violet}/> },
                            } ];
        return(
        
         <section id='side-bar' className='col s12 m3 l2 push-l1 z-depth-1 ' > 
         
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
                     style={{marginTop: 24, paddingLeft: '7%'}}>
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