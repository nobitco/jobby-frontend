import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'


export default class extends Page {
  render () {
    return (
        <Layout title='Landing Page'>
          {<h1>Dashboard</h1>}
        </Layout>
    )
  }
}
