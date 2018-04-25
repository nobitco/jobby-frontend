import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconBtn from 'material-ui/IconButton'
import Popover from 'material-ui/Popover'

export default class MenuDropdown extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }
  
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  }
  
  render(){
     return(<div className='menu-btn'>
             <IconBtn  onClick={this.handleClick}
                       tooltip={this.props.tooltip}>
             {this.props.icon}
             </IconBtn>
             <Popover open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose}
                      style={{marginTop: 20}}>
              {this.props.content}
            </Popover>
            <style jsx>{`
            .menu-btn{
              margin:0 7px;
            }
              
        `}</style>
           </div>
    )}

}
