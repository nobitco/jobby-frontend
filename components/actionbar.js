import React from 'react'
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import {violet} from '../theme/theme-colors'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';

export default class Actionbar extends React.Component{
  constructor(props){
    super(props)
  }
  makeChips = (array) => {
    return array.map((item, index) => {
        return (<Chip  key={index}
                       style={{margin: '10px 0'}}
                       labelStyle={{color: '#FFFFFF'}}
                       backgroundColor={violet} >
                  <Avatar src={item.avatar} />
                  {item.username}
                </Chip>)
    })
  }
  handleUndo = (e) =>{
    e.preventDefault();
    this.props.onUndo(e)
  }
  render(){
    return(
    <Drawer open={this.props.open} openSecondary={true} zDepth={4} width={400} >
     <div id='wrapper'>
        <h6>Realizar Acción en lote para</h6> <p>{this.props.content.length} elementos</p>
        <Divider />
        <div id='selected-container'>
          {this.makeChips(this.props.content)}
        </div>
        <FlatButton label="Deshacer" onClick={this.handleUndo} />
        <RaisedButton label='Eliminar Usuarios'/>
        <RaisedButton label='Acción 3'/>
       
     </div>
      <style jsx>{`
            #wrapper{
              width: 100%;
padding: 25px 30px;
             
            }
#selected-container{
    padding: 25px 2px;
             
            }
        
        `}</style>
    </Drawer>
    )
  }
}