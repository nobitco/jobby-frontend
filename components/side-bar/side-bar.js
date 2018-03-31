import React from 'react'
import {List, ListItem} from 'material-ui/List';
import SideBarHeader from './side-bar-header'
import Divider from 'material-ui/Divider'

export default function SideBar(){

    return(
     <section id='side-bar' className='col s12 m4 l3'>
       <SideBarHeader />
       <Divider />
       <List >
        <ListItem secondaryText="Información de entregas"  leftIcon={null} />
        <ListItem secondaryText="Mis Practicantes" leftIcon={null} />
        <ListItem secondaryText="Mis Tutores" leftIcon={null} />
        <ListItem secondaryText="Mis Empresas" leftIcon={null} />
      </List>
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