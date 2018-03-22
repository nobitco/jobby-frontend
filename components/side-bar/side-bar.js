import React from 'react'
import {List, ListItem} from 'material-ui/List';
import SideBarHeader from './side-bar-header'
import Divider from 'material-ui/Divider'

export default function SideBar(){

    return(
     <section id='side-bar' className='col'>
       <SideBarHeader />
       <Divider className='col s12'/>
       <List className='col s12'>
        <ListItem secondaryText="Información de entregas"  leftIcon={null} />
        <ListItem secondaryText="Mis Practicantes" leftIcon={null} />
        <ListItem secondaryText="Mis Tutores" leftIcon={null} />
        <ListItem secondaryText="Mis Empresas" leftIcon={null} />
      </List>
       <style jsx>{`
            #side-bar{
            width:300px;
            border:1px solid #eaeaea;
background-color: #fff;
            }
        `}</style>
     </section>
    )
  
}