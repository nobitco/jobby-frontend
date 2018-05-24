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
import ModalBox from '../components/modalbox'
import TextField from 'material-ui/TextField'
import SavePasswordBtn from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

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
      context: 'empresas',  //entregas, practicantes, tutores, empresas
      showChangePasswordModal: props.session.user.passwordVerified == undefined ? true : false
    }
  }

  componentDidMount () {
    console.log("didMOunt")
  }

  setContextState = (state) =>  this.setState({ context : state })
  
  getAssignmentsCards = (expiredAssignments) =>  <InfoCard items={expiredAssignments} keyFilter={'role'} title='Entregas Vencidas'/>
  
  getStudentsCards = (studentslist) => <InfoCard items={studentslist} keyFilter={'state'} title='Practicantes'/>
  
  getPlacesCards = (placeslist) => <InfoCard items={placeslist}  title='Empresas'/>
  
  getTutorsCards = (tutorslist) => <InfoCard items={tutorslist}  title='Tutores'/>

  getModal = (e) => (e !== null) && this.setState({ showChangePasswordModal : true })
  
  render(){
    const nextAssignments = this.props.nextAssignments;
    const expiredAssignments = this.props.deadAssignments;
    const students = this.props.students;
    const places = this.props.places;
    const tutors = this.props.tutors;
    
    return(
      <Layout title='Dashboard' userAgent={this.userAgent}>
         <Header />
         <BlockWrapper>
           <ChangePasswordModal 
            show = { this.state.showChangePasswordModal }
            session = { this.props.session }
           />
           <SideBar context={this.state.context} getState={this.setContextState}/>
           <ContentPanel>
            { this.state.context === 'entregas' && this.getAssignmentsCards(expiredAssignments) }
            { this.state.context === 'practicantes' && this.getStudentsCards(students) }
            { this.state.context === 'empresas' && this.getPlacesCards(places) }
            { this.state.context === 'tutores' && this.getTutorsCards(tutors) }
           </ContentPanel>

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

class ChangePasswordModal extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      open: props.show,
      session: props.session
    }
    this.handleClose = this.handleClose.bind()
  }

  handleClose = (event) => {
    event.preventDefault()
    
    this.setState({ open: false })
  }
  
  render () {
    return (
    <Dialog
      title="Establecer password!"
      modal={true}
      open={this.state.open}>
      <form id="setpassword" method="post" action="/auth/setpassword" onSubmit={ this.handleClose }>
        <input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password" />
        <br/>
        <TextField
          hintText="Confirmar password "
          floatingLabelText="Confirmar password"
          type="password" />
        <br/>
        <SavePasswordBtn label="Establecer password" 
          primary={true} 
          type='submit' 
          fullWidth={true} 
          style={{ marginTop: 50 }}
          />
      </form>
    </Dialog>    
    )
  }
}
