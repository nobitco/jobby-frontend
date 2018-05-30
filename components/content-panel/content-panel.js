import React from 'react'
import ReactDOM from 'react-dom'
import Waypoint from 'react-waypoint';
import scrolltoElement from 'scrollto-element'

var autoscrollDuration = 1000

export default class ContentPanel extends React.Component{
  
  
  constructor(props){
    super(props)
    this.state = { context: this.props.context }
    this.unableWaypoint = false
  }

  autoscrollTo = (target) => {
    var scrollToElement = require('scroll-to-element') 
    scrollToElement( target,{ 
                      offset: -120,
                      duration: autoscrollDuration
                    })
    //avoids autoscrolling and waypoint events conflict
    setTimeout( () => this.unableWaypoint = !this.unableWaypoint, autoscrollDuration)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.context.value !== this.state.context.value && this.state.context.event === 'click'){
      var target = ReactDOM.findDOMNode(this.refs[this.state.context.value])
      this.unableWaypoint = true
      this.autoscrollTo(target)
    }   
  }
  static getDerivedStateFromProps(props, state){
    return { context: props.context }
  }
 
  waypointHandler = (id) => {
    if(!this.unableWaypoint){
     var event = new CustomEvent('scroll', { 'type': 'scroll' });
         let contextObj = {
          value: id,
          event: event
    }
     this.props.onContextChange(id, event)
    }
  }
  
  render(){
      const infoCards = this.props.infoCards;
      const contentPanelStyle = {
                paddingLeft: 70,
                maxWidth: 1368,
      }
      
      return( <div id='content-panel' 
                        className={this.props.className} 
                        style={contentPanelStyle} >
                     { infoCards.map( (item, index) => <div className='row' 
                                                                key={index}
                                                                id={item.props.id}
                                                                ref={item.props.id}
                                                                style={{marginBottom: 100}} > 
                                                         <Waypoint onEnter={this.waypointHandler.bind(this, item.props.id)}
                                                                   topOffset='1000px'
                                                                   bottomOffset='200px'>
                                                              <div style={{borderTop: '1px solid green'}}>{item}</div>
                                                          </Waypoint>
                                                        </div> )}
                </div>)}

} 
        