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

    const nextAssignments = await fetch('https://frozen-temple-38935.herokuapp.com/api/next-assignments')
    const deadAssignments =  await fetch('https://frozen-temple-38935.herokuapp.com/api/expired-assignments')
    const nextAssignmentsJson = await nextAssignments.json()
    const deadAssignmentsJson = await deadAssignments.json()
    /*nextAssignmentsJson.forEach(element => {
      console.log(element.nombre)
      // for return reference
      <!--
           <ContentPanel>
           
            <InfoCard items={[1,2,3,4,5]}
                      title='Entregas Próximas'/>
             <infoCard content={this.props.nextAssignments}
                       id='nextAssignments' />
             <infoCard content={this.props.deadAssignments}
                       id='deadAssignments' />  
           </ContentPanel>
           
           -->
            <InfoCard items
                       cardLabel='Entregas Vencidas'
                       id='entregas-vencidas' />
                       
                       <Tab label='Tutores' value={0} />
            <Tab label='Practicantes' value={1} />
    })*/
    
    props.nextAssignments = nextAssignmentsJson
    props.deadAssignments = deadAssignmentsJson
    
    return props
  }
  
  constructor(props){
    super(props);
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
    
  }
  
  render(){
    const nextAssignments = this.props.nextAssignments;
    const expiredAssignments = this.props.deadAssignments;

    return(
      <Layout title='Dashboard' userAgent={this.userAgent}>
         <Header />
         <BlockWrapper>
           <SideBar />
           <ContentPanel>
              <InfoCard items={expiredAssignments}
                        keyFilter={'role'}
                        title='Entregas Vencidas'/>
           </ContentPanel>
         </BlockWrapper>
      </Layout>
    )
  } 
  
}
  