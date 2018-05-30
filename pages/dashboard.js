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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import CreateForm from '../components/modal-forms/create-profile'
import EntregaIcon from 'material-ui/svg-icons/action/description';
import PracticantesIcon from 'material-ui/svg-icons/social/people';
import TutoresIcon  from 'material-ui/svg-icons/social/school';
import EmpresasIcon  from 'material-ui/svg-icons/social/location-city';
import {violet} from '../theme/theme-colors'


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
      context: {
        value: 'entregas', //entregas, practicantes, tutores, empresas  /* se relacionan con el id de cada infoCard!
        event: ''
      },  
      checkedItems: [],
      showDialog: false,
      showModal: false,
    }
    this.document = null
  }
  
  componentDidMount(){
    if(document) this.document = document
  }
  
  showDialog = (e) => this.setState({ showDialog : true })
  
  closeDialog = (e) => this.setState({ showDialog : false });
  
  showModal = (e) => this.setState({ showModal : true })
  
  closeModal = (e) => this.setState({ showModal : false });
  
  clearSelections = () => this.setState({ checkedItems: [] })  
  
  
  setContextState = (state, event) =>  {
    let contextObj = {
          value: state,
          event: event.type
    }
    if(this.state.checkedItems.length > 0 ){
     this.document.body.style.overflow = 'hidden'
     if(confirm('¿Está seguro? Se perderán todas las selecciones de ' + this.state.context.value + 'hechas')){
       document.body.style.overflow = 'scroll'
       this.setState({ checkedItems: [] })
       this.setState({ context : contextObj  })   
     }
    }else{
     document.body.style.overflow = 'scroll'
    this.setState({ context : contextObj  })   

    }
      
  }
  
  getAssignmentsCards = (expiredAssignments) =>  <InfoCard items={expiredAssignments} 
                                                           id='entregas'
                                                           keyFilter={'role'} 
                                                           title='Entregas Vencidas' 
                                                           checkedItems={this.state.checkedItems}
                                                           onCheckItems={this.getCheckedItems} />
  
  getStudentsCards = (studentslist) => <InfoCard items={studentslist} 
                                                 id='practicantes'
                                                 keyFilter={'state'} 
                                                 title='Practicantes' 
                                                 checkedItems={this.state.checkedItems}
                                                 onCheckItems={this.getCheckedItems}/>
  
  getPlacesCards = (placeslist) => <InfoCard items={placeslist}  
                                             id='empresas'
                                             title='Empresas' 
                                             checkedItems={this.state.checkedItems}
                                             onCheckItems={this.getCheckedItems}/>
  
  getTutorsCards = (tutorslist) => <InfoCard items={tutorslist}  
                                             id='tutores'
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
    const addBtnStyle = { position: 'absolute', bottom: 50, right: 50 }
    const sideBarItems =[ { label: 'Entregas',
                              value: 'entregas',
                              leftIcon: function(value, context){ return <EntregaIcon color={this.value === context.value && 'white' }/> },
                            },
                           { label: 'Practicantes',
                             value: 'practicantes',
                             leftIcon: function(value, context){ return <PracticantesIcon color={this.value === context.value && 'white'}/> },
                            },
                           { label: 'Tutores',
                             value: 'tutores',
                             leftIcon: function(value, context){ return <TutoresIcon color={this.value === context.value && 'white'}/> },
                            },
                           { label: 'Empresas',
                             value: 'empresas',
                             leftIcon: function(value, context){ return <EmpresasIcon color={this.value === context.value && 'white'}/> },
                            }]
    const infoCards = [
      this.getAssignmentsCards(expiredAssignments),
      this.getStudentsCards(students),
      this.getTutorsCards(tutors),
      this.getPlacesCards(places) ]
    if(this.document !== null){
   
      if(this.state.checkedItems.length > 0 ){
       this.document.body.style.overflow = 'hidden'
      }else{
       document.body.style.overflow = 'scroll'
      }
    }
    
    return(
      <Layout title='Dashboard' userAgent={this.userAgent}>
         <Header context={'dashboard'}/>
         <div className='row hide-on-small-only' style={{marginBottom: 40}}></div>
         <div className='row'>
           <SideBar context={this.state.context.value} 
                      getState={this.setContextState} 
                      menuItems={sideBarItems}
                      className='col s12 m3 l3'/>
         </div>
         <BlockWrapper fixed={false}>
           { this.state.showModal && <Modalbox open={this.state.showModal} 
                                               onCloseRequest={this.closeModal} 
                                               width={450} 
                                               title={'Crear Perfil'}>
                                         <CreateForm onCloseRequest={this.closeModal}/>
                                      </Modalbox> }
           <ContentPanel infoCards={infoCards} 
                         onContextChange={this.setContextState} 
                         context={this.state.context}
                         className='col s12 m9 push-m3 l8 push-l3' />
           <Actionbar content={this.state.checkedItems} 
                      open={this.state.checkedItems.length > 0 ? true : false} 
                      onUndo={this.clearSelections} 
                      context={this.state.context.value}/>
          <FloatingActionButton size={50} 
                                style={addBtnStyle} 
                                secondary={true} 
                                onClick={this.showModal}>
            <AddIcon />
          </FloatingActionButton>
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