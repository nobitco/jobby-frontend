import React from 'react'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Page from '../components/page'
import BlockWrapper from '../components/layout/block-wrapper'
import SideBar from '../components/side-bar/side-bar'

export default class Dashboard extends Page{
  
  constructor(props){
    super(props)
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
  }
  
  render(){
    return(
      <Layout title='Dashboard' userAgent={this.userAgent}>
         <Header />
         <BlockWrapper>
           <SideBar/>
         </BlockWrapper>
      </Layout>
    )
  } 
  
}
  