import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Card from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'

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
    // here it must receive an array of delayed terms and its respective names
    //display it in aList
  
    return(
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
              [1, 2, 3,4, 5].map( (item, index) => (  
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
          <h1>Practicantes</h1> 
        </SwipeableViews>
      </Card>
    )
  }
}