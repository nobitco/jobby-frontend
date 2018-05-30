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

export default class StudentView extends Page{
  
  
  constructor(props){
    super(props);
    //gets navigator.UserAgent at the very very begining!
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; 
    this.state = {
      context: 'Información General',  //info general, curriculum vitae, etc
      showDialog: false,
      showModal: false,
    }
  }
  
  showDialog = (e) => this.setState({ showDialog : true })
  
  closeDialog = (e) => this.setState({ showDialog : false });
  
  showModal = (e) => this.setState({ showModal : true })
  
  closeModal = (e) => this.setState({ showModal : false });
  
  clearSelections = () =>{
    this.setState({ checkedItems: [] })  
  }
  
  setContextState = (state) => this.setState({ context : state }) 
  
  
  render(){

    const addBtnStyle = { position: 'absolute', bottom: 50, right: 50 }
    const sideBarItems =[ { label: 'Información General',
                              value: 'infogeneral',
                              leftIcon: function(value, context){ return <EntregaIcon color={this.value === context && violet }/> },
                            },
                           { label: 'Curriculum vitae',
                             value: 'cv',
                             leftIcon: function(value, context){ return <PracticantesIcon color={this.value === context && violet}/> }
                        }]
    return(
      <Layout title='Detalle del estudiante' userAgent={this.userAgent}>
         <Header context={'student-view'}/>
         <div className='row hide-on-small-only' style={{marginBottom: 40}}></div>
         <BlockWrapper>
           { this.state.showModal && <Modalbox open={this.state.showModal} 
                                               onCloseRequest={this.closeModal} 
                                               width={450} 
                                               title={'Crear Perfil'}>
                                         <CreateForm onCloseRequest={this.closeModal}/>
                                      </Modalbox> }
           <SideBar context={this.state.context} getState={this.setContextState} menuItems={sideBarItems}/>
           <ContentPanel>

           </ContentPanel>
           <Actionbar content={this.state.checkedItems} open={this.state.checkedItems.length > 0 ? true : false} onUndo={this.clearSelections} context={this.state.context}/>
          <FloatingActionButton size={50} style={addBtnStyle} secondary={true} onClick={this.showModal}>
            <AddIcon  />
          </FloatingActionButton>
         </BlockWrapper>
      </Layout>
    )
  } 
  
}

