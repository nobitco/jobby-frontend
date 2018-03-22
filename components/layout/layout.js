import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import customTheme from '../../theme/custom-theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Head from './head'

export default class Layout extends React.Component {
  
  constructor(props){
    super(props);
  }
  static propTypes () {
    return {
      session: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired
    }
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={customTheme(this.props.userAgent)}>
       <div>
          <Head title={this.props.title} />    
            {this.props.children} 
        </div>
      </MuiThemeProvider>
    )
  }
}


