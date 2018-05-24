import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class CreateForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type: '',
      degree: ''
    }
  }
  
  handleTypeChange = (e, index, value) => {
    this.setState({type: value})
  }
  
  handleDegreeChange = (e, index, value) => this.setState({degree: value})
  
  render(){
    var photoStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '0 20px',
      marginBottom: 30
    }
    var resetWidth = { width: 'none !important' }
    var fitContent = { width: 'fit-content'}
    var shortInput = {
      width: 210
    }
    var inputsMargin = { marginRight: 30}
    var localDegreeList = ['Ingeniería de Sistemas', 'Medicina', 'Filosofía', 'Marketing']
    return (<div className='row'>
              <article className='col s12 m3 l3' style={photoStyle}>
                 <Avatar src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" 
                         size={120} />
                <a href='' style={{marginTop: 15, textDecorationLine:'underline'}}><small>Subir foto</small></a>
               </article>
               
               <article style={{ paddingLeft: 18}} className='col s12 m9 l8'>
                  <form>
                    <div className='row'>
                      <SelectField floatingLabelText="Tipo de perfil:"
                                    value={this.state.type}
                                    onChange={this.handleTypeChange}
                                    className='col'>
                           <MenuItem value={'practicante'} primaryText="Practicante" />
                           <MenuItem value={'tutor'} primaryText="Tutor" />
                           <MenuItem value={'empresa'} primaryText="Empresa" /> 
                       </SelectField>
                    </div>
                    <section className='row'>
                       <TextField floatingLabelText='Nombre'
                                  name='nombre'
                                  type='text'
                                  className='col s5 m5'
                                  style={resetWidth} /> 
                      <TextField  floatingLabelText='Apellidos'
                                  name='apellidos'
                                  type='text'
                                  className='col s5 push-s1 m5 push-m1'
                                  style={resetWidth} /> 
                     </section>
                     <div className='row'>
                      <SelectField floatingLabelText="Programa académico"
                                   value={this.state.degree}
                                   onChange={this.handleDegreeChange}
                                   className='col'>
                          { localDegreeList.map((item, index) => <MenuItem value={item} primaryText={item} key={index}/> )}
                       </SelectField>
                      </div>
                      <section className='row'> 
                       <TextField floatingLabelText='Código institucional'
                                   name='code'
                                   type='text'
                                   style={resetWidth} 
                                   className='col s5 m5'/> 
                      <TextField floatingLabelText='correo institucional'
                                   name='email'
                                   type='email'
                                   style={resetWidth}
                                   className='col s5 push-s1 m5 push-m1'/>
                     </section>
                     
                     <div style={{marginTop:70}}>
                       <RaisedButton primary={true} label='Crear' className='right' />
                       <RaisedButton primary={false} 
                       label='Cancelar' 
                       className='left' 
                       onClick={this.props.onCloseRequest}/>
                    </div>
                    </form>
               </article>
              </div>)
  }
  
}