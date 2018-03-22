import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import Header from '../components/header/header'

export default class extends Page {
  render () {
    return (
        <Layout title='Landing Page'>
         <Header />
         <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', padding: '140px 20px' }}>
            {<h1 style={{color: '#dbdbdb'}}>Dashboard</h1>}
         </div> 
        </Layout>
    )
  }
}
