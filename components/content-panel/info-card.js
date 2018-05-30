import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Card from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import Modalbox from '../modalbox'
import Checkbox from 'material-ui/Checkbox'
import LookIcon from 'material-ui/svg-icons/action/visibility'
import IconButton from 'material-ui/IconButton';
import {violet} from '../../theme/theme-colors'

export default class InfoCard extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      slideIndex: 0,
      showModal: false,
      checkedItems: this.props.checkedItems
    }
  }
  
  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
  }

  /* gets the tab labels according to a key object parameter*/
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

  categorizeItems = () => { 
    const tabsLabels = this.getTabsLabels(this.props.items, this.props.keyFilter)
    const keyFilter = this.props.keyFilter
    const lists = new Array()  // must have arrays within it, created dinamically. Number of arrays must be equal to number of tabLabels
    
    tabsLabels.map((label, index) => {
      lists[index] = []   // creates an empty array within 'lists' array, push it a temporal array filled with common category objects
      const array = []  //temporal array
      for (var i = 0; i < this.props.items.length ; i++) {
        this.props.items[i][keyFilter].indexOf(label) >= 0 && array.push(this.props.items[i])
      }
      lists[index].push(array)
    })
    
    return lists  // [[tag1Content],[tag2Content],[tag3Content],nTagContent...] 
  }
  
  onListItemChecked = (obj) => {
    var temp = this.state.checkedItems
    var indexMatch = temp.indexOf(obj) 
      indexMatch > -1 ? temp.splice(indexMatch, 1) : temp.push(obj)
      this.props.onCheckItems(temp)
      this.setState({ checkedItems : temp })
  }
  
  isChecked = (item) => this.state.checkedItems.indexOf(item) > -1 ? true : false 
  
  componentWillReceiveProps(nextProps){  // lets the list items update when undo btn is triggered
    this.props.checkedItems !== nextProps.checkedItems && this.setState({ checkedItems : nextProps.checkedItems}) 
  }
   
   createListItemComponents = (array) => {
     return array.map((objs, i) => {
      return objs.map( (item, index) => {
       return <ListItem leftAvatar={<Avatar src={item.avatar}  
                                            style={{  position:'relative', 
                                                      float: 'left', 
                                                      marginRight: '0.8em', 
                                                      marginTop: '-0.6em',
                                                      top: 0, 
                                                      left: 0}} />}
                                            primaryText={item.username}
                                            secondaryText={item.activity}
                                            rightIconButton={<IconButton style={{marginRight:14}}
                                                                         iconStyle={{color: '#B3B3B4'}}>
                                                               <LookIcon hoverColor={violet}/>
                                                             </IconButton>
                                                            }
                                            key={index} 
                                            leftCheckbox={<Checkbox onClick={ () => this.onListItemChecked(item) } 
                                                                    checked={this.isChecked(item)}/> }  /> })  //iterates nListItem times 
    })             
  }
    
  createListComponents = (arrays) => {
    if(this.props.keyFilter == null){
         return (<List> 
                { arrays.map((item, index) => (<ListItem leftAvatar={<Avatar src={item.avatar}
                                                                             style={{ position:'relative', 
                                                                                      float: 'left', 
                                                                                      marginRight: '0.8em', 
                                                                                      marginTop: '-0.6em',
                                                                                      top: 0, 
                                                                                      left: 0}} />}
                                                                             primaryText={item.username}
                                                                             secondaryText={item.activity}
                                                                             rightIconButton={<IconButton style={{marginRight:14}}
                                                                                                          iconStyle={{color: '#B3B3B4'}}>
                                                                                                <LookIcon hoverColor={violet}/>
                                                                                              </IconButton>}
                                                                             key={index}
                                                                             leftCheckbox={<Checkbox onClick={ () => this.onListItemChecked(item) } 
                                                                                                     checked={this.isChecked(item)}/> } /> )) }
                </List>)
       }else{ 
        return arrays.map( (array, index) => <List key={index}>{ this.createListItemComponents(array) }</List> )
     }   
  }

      
    
  getModal = (e) => (e !== null) && this.setState({ showModal : true });
  
  closeModal = (e) => this.setState({ showModal : false });
    
  render(){
    // here it must receive an object with X number of arrays that contains delayed terms and its respective names
    //display it in aList
    
    const items = this.props.items;
    const settingsBtnStyle = {
      position:'absolute',
      top: -8,
      right: 14,
     
    }
    const btnIconHoverStyle  = {
      color: 'black',
    }
    const lists = !this.props.keyFilter ? this.props.items : this.categorizeItems() 
    
    return(
      <article id={this.props.id}>
       { <Modalbox open={this.state.showModal} onCloseRequest={this.closeModal}>{this.modalContent}
           <form>
             <label htmlFor='input'>Hola</label>
             <input name='input' type='text' />
           </form>
         </Modalbox>  }
        <div className='card-header'>
           <h5 className='card-title '>{this.props.title}</h5>
          <IconButton onClick={this.getModal} style={settingsBtnStyle}  iconStyle={{color: '#B3B3B4'}} ><SettingsIcon hoverColor={violet} /></IconButton>
          
        </div>
        <Card>
          <Tabs onChange={this.handleChange}
                value={this.state.slideIndex}>
           { this.props.keyFilter && this.createCardTabs() }
          </Tabs>
          <SwipeableViews index={this.state.slideIndex}
                           onChangeIndex={this.handleChange}
                           style={{ height: '78vh', overflowY: 'scroll'}}>
            
            {this.createListComponents(lists)}
      
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