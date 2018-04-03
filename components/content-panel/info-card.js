import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Card from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import SettingsIcon from 'material-ui/svg-icons/action/settings'

export default class InfoCard extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      slideIndex: 0,
    }
  }
  
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    })
  }
  
  render(){
    // here it must receive an object with X number of arrays that contains delayed terms and its respective names
    //display it in aList
    
    const items = this.props.items;
    const settingsBtnStyle = {
      position:'absolute',
      top: 0,
      right: 0
    }
  
    return(
      <article>
        <div className='card-header'>
           <h5 className='card-title '>{this.props.title}</h5>
           <RaisedButton className='settings-btn'
                         label='Configurar'
                         icon={ <SettingsIcon />}
                         style={settingsBtnStyle} />
        </div>
        <Card>
          <Tabs onChange={this.handleChange}
                 value={this.state.slideIndex}>
            <Tab label='Tutores' value={0} />
            <Tab label='Practicantes' value={1} />
          </Tabs>
          <SwipeableViews index={this.state.slideIndex}
                           onChangeIndex={this.handleChange}>

            <List>
              {
                items.map( (item, index) => (  
                <ListItem
                  leftAvatar={<Avatar src={'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'}/>}
                  primaryText='Nombre del estudiante'
                  secondaryText='Nombre de la actividad'
                  rightIconButton={<RaisedButton label='Notificar' secondary={true} style={{margin: 10}}/>}
                  key={index}
                />
              ))
              }
            </List> 
            <h5>List 2</h5> 
          </SwipeableViews>
        </Card>
         <style jsx>{`
            article{
              margin-bottom:50px;
            }
            .card-header{
            position:relative;
            }
            .card-title{
              margin-bottom: 20px;
            }    
        `}</style>
      </article>
    )
  }
}