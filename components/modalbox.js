import React from 'react'
import Paper from 'material-ui/Paper'


export default class Modalbox extends React.Component{
  
  constructor(props){
    super(props)
  }

  unMountme = (e) => {
    e.preventDefault()
    this.props.onCloseRequest(e)
  }
 
  render(){
    
    const closeStyle = { width: '100%', textAlign: 'right', display: 'inline-block', marginBottom: '20px', fontSize: '1.4em'}

    const component = this.props.open && ( <div className='modalbox-wrapper' id='modalbox-wrapper'>
                                      <Paper zDepth={2} style={{ marginTop: '-16%', padding: '18px 24px'}}> 
                                            <a style={closeStyle} href='' onClick={this.unMountme} >X</a>
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