import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout/layout'
import muiThemeable from 'material-ui/styles/muiThemeable';

class LandingPage extends Page{
  constructor(props){
    super(props);
  }
  
  render () {
    return (
        <Layout title='LandingPage' >
         <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', padding: '140px 20px' }}>
            {<h1 style={{color: '#dbdbdb'}}>Jobby</h1>}
         </div> 
        </Layout>
    )
  }
}

export default muiThemeable()(LandingPage);