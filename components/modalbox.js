import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import {violet} from '../theme/theme-colors'

export default class Modalbox extends React.Component{
  
  constructor(props){
    super(props)
  }

  unMountme = (e) => {
    e.preventDefault()
    this.props.onCloseRequest(e)
  }
 
  render(){
    
    const closeStyle = { width: '100%', 
                         textAlign: 'right', 
                         fontSize: '1.4em',
                         position: 'absolute',
                         top: 0,
                         right: 0,
                         margin: '30px 36px'}
    
    const paperStyle = { 
                         margin: '0 12px',
                         marginTop: '-20%', 
                         padding: '18px 18px', 
                         position: 'relative',
                         maxWidth: 800
                       }

    const component = this.props.open && ( <div className='modalbox-wrapper' id='modalbox-wrapper'>
                                            <Paper zDepth={2} 
                                                   style={paperStyle} > 
                                              <div className='row' style={{marginBottom: 38}}>
                                                 <div className='col s12'>
                                                   <h5>{this.props.title}</h5>   
                                                   <a style={closeStyle} href='' onClick={this.unMountme} > X </a>
                                                 <Divider />
                                                 </div>
                                              </div>
                                              { this.props.children } 
                                            </Paper>
                                            <style jsx>{`
                                                    .modalbox-wrapper{
                                                      width: 100vw;
                                                      height: 100vh;
                                                      z-index:1000;
                                                      background-color: rgba(0,0,0,0.85);
                                                      position:fixed;
                                                      top:0;
                                                      left:0;
                                                      display:flex;
                                                      align-items:center;
                                                      justify-content: center;
                                                    }

                                            `}</style>
                                           </div>) 
 
     return component
  }
}