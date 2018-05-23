import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout/layout'

class LandingPage extends Page {
  constructor (props) {
    super(props)

    this.state = {
      session: this.props.session
    }
    this.userAgent = typeof navigator !== 'undefined' && navigator.userAgent // gets navigator.UserAgent at the very very begining!
  }

  render () {
    return (
      <Layout title='LandingPage' userAgent={this.userAgent} >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '140px 20px' }}>
          {<h1 style={{color: '#dbdbdb'}}>Jobby Landing Page!</h1>}
        </div>
      </Layout>
    )
  }
}

export default LandingPage
