import React from 'react'
import {List, ListItem} from 'material-ui/List';
import SideBarHeader from './side-bar-header'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class SideBar extends React.Component{
    constructor(props){
      super(props)
    }

    getValue = (event,value) => this.props.getState(value)
    
    
    isSelected = (value, context) => value === context ? { fontSize: '20px', fontWeight: 'bold' } : {}
    
    render(){
        const context = this.props.context
        const menuItems = [ { label: 'Información de entregas',
                              value: 'entregas'
                            },
                           { label: 'Practicantes',
                             value: 'practicantes'
                            },
                           { label: 'Tutores',
                             value: 'tutores'
                            },
                           { label: 'Empresas',
                            value: 'empresas'
                            } ];
        return(
         <section id='side-bar' className='col s12 m4 l3'>
           <SideBarHeader />
           <Divider />
           <Menu autoWidth={true} 
                 onChange={this.getValue}>
            {
               menuItems.map( (item, index) => <MenuItem leftIcon={null} 
                                                       value={item.value}
                                                       primaryText={item.label}
                                                       key={index}
                                                       innerDivStyle={this.isSelected(item.value,context)}  />)
            }
          </Menu>
           <style jsx>{`
                #side-bar{
                border:1px solid #eaeaea;
                background-color: #fff;
                max-width:280px;

                }

            `}</style>
         </section>
        )
    }
  
}