import React from 'react'
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import {blueGreyLigthen5, red} from '../theme/theme-colors'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ClearIcon from 'material-ui/svg-icons/content/clear';
export default class Actionbar extends React.Component{
  constructor(props){
    super(props)
  }
  makeChips = (array) => {
    return array.map((item, index) => {
        return (<Chip  key={index}
                       style={{margin: '10px 0'}}
               
                       backgroundColor={blueGreyLigthen5} >
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
        <FlatButton className='right' 
                    secondary={true} 
                    icon={<ClearIcon />} 
                    label="Deshacer" 
                    onClick={this.handleUndo} />
         <h5>{this.props.context[0].toUpperCase()}{this.props.context.substring(1,this.props.context.length)}</h5>
        <Divider style={{marginBottom: 8}}/>
        <small className='grey-text text-ligthen-2'>{this.props.content.length} seleccionados</small>
        <div id='selected-container'>
          {this.makeChips(this.props.content)}
        </div>
        <div id='action-btns'>
          {this.props.actions}
        <RaisedButton label='Eliminar Usuarios' 
                      secondary={true}
                      icon={<DeleteIcon />} />
        {this.props.context === 'entregas' && <RaisedButton  label='Notificar' primary={true}/>} 
        </div> 
     </div>
      <style jsx>{`
            #wrapper{
              width: 100%;
padding: 25px 30px;
             
            }
#action-btns{
display:flex;
justify-content:space-between;
}
#selected-container{
    padding: 25px 2px;
             
            }
        
        `}</style>
    </Drawer>
    )
  }
}