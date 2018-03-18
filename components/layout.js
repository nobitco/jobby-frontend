import React from 'react'
// import AppBarMain from './appbarmain'
import Head from './head'

export default class extends React.Component {
  static propTypes () {
    return {
      session: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired
    }
  }

  render () {
    return (
      <div>
        <Head title={this.props.title} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
