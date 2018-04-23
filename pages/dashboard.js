import React from 'react'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Page from '../components/page'
import BlockWrapper from '../components/layout/block-wrapper'
import SideBar from '../components/side-bar/side-bar'
import ContentPanel from '../components/content-panel/content-panel'
import fetch from 'isomorphic-fetch'
import InfoCard from '../components/content-panel/info-card'

export default class Dashboard extends Page{
  
  static async getInitialProps ({req, query}) {
    let props = await super.getInitialProps({req, query})

    const nextAssignments = await fetch('http://localhost:3001/api/next-assignments')
    const deadAssignments =  await fetch('http://localhost:3001/api/expired-assignments')
    const nextAssignmentsJson = await nextAssignments.json()
    const deadAssignmentsJson = await deadAssignments.json()
 
    
    props.nextAssignments = nextAssignmentsJson
    props.deadAssignments = deadAssignmentsJson
    
    return props
  }
  
  constructor(props){
    super(props);
    //gets navigator.UserAgent at the very very begining!
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; 
    this.state = {
      context: 'entregas'
    }
  }
  
  setContextState = (state) =>  this.setState({ context : state })

  getAssignmentsCards = (expiredAssignments) =>  <InfoCard items={expiredAssignments}
                                                           keyFilter={'role'}
                                                           title='Entregas Vencidas'/>
  render(){
    const nextAssignments = this.props.nextAssignments;
    const expiredAssignments = this.props.deadAssignments;

    return(
      <Layout title='Dashboard' userAgent={this.userAgent}>
         <Header />
         <BlockWrapper>
           <SideBar context={this.state.context} getState={this.setContextState}/>
           <ContentPanel>
             
            { this.state.context === 'entregas' && this.getAssignmentsCards(expiredAssignments)}
           </ContentPanel>
         </BlockWrapper>
      </Layout>
    )
  } 
  
}
  