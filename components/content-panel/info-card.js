import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Card from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import createReactClass from 'create-react-class'

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
  
  /* get the tab labels according to a key object parameter*/
  getTabsLabels = (items, key) => {
    
    const labels = []
    items.forEach((item, index) => {    
      labels.indexOf(item[key]) == -1 && labels.push(item[key])  
    } )
    
    return labels;

  }
  
  createCardTabs = () => {
    
  const tabsLabels = this.getTabsLabels(this.props.items, this.props.keyFilter)
  return tabsLabels.map((item, index) => <Tab label={item} value={index} key={index} /> )
  
  }
  //Creates 
  categorizeItems = () => { 
    
  const tabsLabels = this.getTabsLabels(this.props.items, this.props.keyFilter)
  const keyFilter = this.props.keyFilter
  const lists = new Array()  // must have arrays within it, created dinamically. Number of arrays must be equal to number of tabLabels
  //const filledList = []
  tabsLabels.map((label, index) => {
    lists[index] = []   // creates an empty array within 'lists' array, push it a temporal array filled with common category objects
    const array = []  //temporal array
    for (var i = 0; i < this.props.items.length ; i++) {
      this.props.items[i][keyFilter].indexOf(label) >= 0 && array.push(this.props.items[i])
    }
  
    lists[index].push(array)

  })
  
  return lists
  
  } // function ends
  
  createCardList = () => { 
   
   var SwipeableListItems = createReactClass({
 
     render: function(){
        for (var i = 0; i < this.props.listItems.length ; i++) {
          return this.props.listItems[i];
        }
     }
   });
   
   var SwipeableList = createReactClass({
        
         render: function(){
                     var lists = this.props.listArray;
                     var listItems = lists.map((listItemObj, index) =>  (<ListItem leftAvatar={<Avatar src={listItemObj.avatar} />}
                                                                                  primaryText={listItemObj.username}
                                                                                  secondaryText={listItemObj.activity}
                                                                                  rightIconButton={<RaisedButton label='Notificar' secondary={true} style={{margin: 10}}/>}
                                                                                  key={index} /> ));
                    // HERE IT IS THE BUG!!! .map() is not a function
                     return (<List><SwipeableListItems listItems={listItems} /></List>)             
         }
   });
    
   return (<SwipeableList listArray={this.categorizeItems} />)
   
  } // method ends
  
  render(){
    // here it must receive an object with X number of arrays that contains delayed terms and its respective names
    //display it in aList
    
    const items = this.props.items;
    const settingsBtnStyle = {
      position:'absolute',
      top: 0,
      right: 0
    }
    const categorizedLists = this.categorizeItems() 

    var Opa = createReactClass({
     getInitialState: function(){
       return { 
         categorizedLists: this.props.categorizedLists, 
         createCardList : this.props.createCardList
        }
     },
     render: function(){
        console.log(this.props.createCardList)
        return this.props.createCardList()  //here must retun excecution of IfoCard's createCardList() method  
     }
    });
    

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
           {  this.createCardTabs() }
          </Tabs>
          <SwipeableViews index={this.state.slideIndex}
                           onChangeIndex={this.handleChange}>
            
              <Opa categorizedLists={categorizedLists} createCardList={this.createCardList}/>
      
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