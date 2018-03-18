import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import customTheme from '../theme/custom-theme'

export default class extends Page {
  render () {
    const muiTheme = customTheme(this.props.userAgent)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout title='Landing Page'>
          {<h1>Dashboard</h1>}
        </Layout>
      </MuiThemeProvider>
    )
  }
}
