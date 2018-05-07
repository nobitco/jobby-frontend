import React from 'react'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Page from '../components/page'
import BlockWrapper from '../components/layout/block-wrapper'
import SideBar from '../components/side-bar/side-bar'
import ContentPanel from '../components/content-panel/content-panel'
import fetch from 'isomorphic-fetch'
import InfoCard from '../components/content-panel/info-card'
import ReactDOM from 'react-dom'
import Actionbar from '../components/actionbar'
import Modalbox  from '../components/modalbox'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class Dashboard extends Page{
  
  static async getInitialProps ({req, query}) {
    let props = await super.getInitialProps({req, query})

    const nextAssignments = await fetch('http://localhost:3001/api/next-assignments')
    const deadAssignments =  await fetch('http://localhost:3001/api/expired-assignments')
    const students =  await fetch('http://localhost:3001/api/students')
    const places =  await fetch('http://localhost:3001/api/places')
    const tutors =  await fetch('http://localhost:3001/api/tutors')
    const nextAssignmentsJson = await nextAssignments.json()
    const deadAssignmentsJson = await deadAssignments.json()
    const studentsJson = await students.json()
    const placesJson = await places.json()
    const tutorsJson = await tutors.json()
    
    props.nextAssignments = nextAssignmentsJson
    props.deadAssignments = deadAssignmentsJson
    props.students = studentsJson
    props.places = placesJson
    props.tutors = tutorsJson
    
    return props
  }
  
  constructor(props){
    super(props);
    //gets navigator.UserAgent at the very very begining!
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; 
    this.state = {
      context: 'practicantes',  //entregas, practicantes, tutores, empresas
      checkedItems: [],
      showDialog: false,
    }
  }
  
  showDialog = () => this.setState({ showDialog : true })
  
  closeDialog = () => this.setState({ showDialog : false });
  
  clearSelections = () =>{
    this.setState({ checkedItems: [] })  
  }
  
  setContextState = (state) =>  {
    if(this.state.checkedItems.length > 0 ){
     if(confirm('¿Está seguro? Se perderán todas las selecciones hechas')){
       this.setState({ checkedItems: [] }) 
       this.setState({ context : state }) 
     }
    }else{
     this.setState({ context : state }) 
    }
      
  }
  
  getAssignmentsCards = (expiredAssignments) =>  <InfoCard items={expiredAssignments} 
                                                           keyFilter={'role'} 
                                                           title='Entregas Vencidas' 
                                                           checkedItems={this.state.checkedItems}
                                                           onCheckItems={this.getCheckedItems} />
  
  getStudentsCards = (studentslist) => <InfoCard items={studentslist} 
                                                 keyFilter={'state'} 
                                                 title='Practicantes' 
                                                 checkedItems={this.state.checkedItems}
                                                 onCheckItems={this.getCheckedItems}/>
  
  getPlacesCards = (placeslist) => <InfoCard items={placeslist}  
                                             title='Empresas' 
                                             checkedItems={this.state.checkedItems}
                                             onCheckItems={this.getCheckedItems}/>
  
  getTutorsCards = (tutorslist) => <InfoCard items={tutorslist}  
                                             title='Tutores' 
                                             checkedItems={this.state.checkedItems}
                                             onCheckItems={this.getCheckedItems}/>
  
  getCheckedItems = (array) => this.setState({ checkedItems: array })
  
  render(){
  
    const nextAssignments = this.props.nextAssignments;
    const expiredAssignments = this.props.deadAssignments;
    const students = this.props.students;
    const places = this.props.places;
    const tutors = this.props.tutors;

    return(
      <Layout title='Dashboard' userAgent={this.userAgent}>
         <Header context={'dashboard'}/>
         <div className='row hide-on-small-only' style={{marginBottom: 40}}></div>
         <BlockWrapper>
         
           <SideBar context={this.state.context} getState={this.setContextState}/>
           <ContentPanel>
         
            { this.state.context === 'entregas' && this.getAssignmentsCards(expiredAssignments) }
            { this.state.context === 'practicantes' && this.getStudentsCards(students) }
            { this.state.context === 'empresas' && this.getPlacesCards(places) }
            { this.state.context === 'tutores' && this.getTutorsCards(tutors) }
           </ContentPanel>
           <Actionbar content={this.state.checkedItems} open={this.state.checkedItems.length > 0 ? true : false} onUndo={this.clearSelections}/>
         </BlockWrapper>
      </Layout>
    )
  } 
  
}

/*
Apis escheme
*/
//students
const Student = {
  email: "Kyla.Weber25@yahoo.com",
  lastname: "White" ,
  username: "Emmet",
  avatar: 'www.images.com/image1.png' ,
  role: 'student',
  place: "Canon",
  state:"culminado",
  university:"javeriana",
  city:'Cali'
}
  

//Places
const Place = {
  email: "Kyla.Weber25@alcosto.com.co",
  lastname: "" ,   // no sé si las empresas, posiblemente, manejen sucursales y este campo especifique la sucursal
  username: "Alcosto",
  avatar: 'www.images.com/image1.png' ,
  role: 'place',
  state:"vigente",   //se me ocurre que este campo en vez de quitarlo, usarlo como la vigencia de la relación entre empresa e universidad, determinado por la cantidad de practicantes ubicados en este lugar
  vacantes: [
    { name: 'Diseñador UIX',   //aquí ya podemos manejar NAME
      description: 'Descripción de la vacante',
      state:'disponible', 
    },
     { name: 'Médico cirujano',
      description: 'Descripción de la vacante',
      state:'ocupada', 
    }
  ],
  city:'Cali'
}