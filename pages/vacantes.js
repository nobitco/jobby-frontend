import React from 'react'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Page from '../components/page'
import BlockWrapper from '../components/layout/block-wrapper'
import SelectableField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List';
import JobListItem from '../components/job-list-item'
import {violet} from '../theme/theme-colors'
import SearchBar from '../components/search-bar'


export default class Jobs extends Page{
  constructor(props){
    super(props);
     this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
    this.state = {
      companies: '',
      cities: '',
      fields: ''
    }
  }
  
  handleCompaniesChange = (event, index, value) => this.setState({ companies: value});
  
  handleCitiesChange = (event, index, value) => this.setState({ cities: value});
  
  handleFieldsChange = (event, index, value) => this.setState({ fields: value});
  
  render(){
    const empresas = ['Exito', 'Carvajal', 'Colombina'];
    const ciudades = ['Cali', 'Medellín', 'Pasto', 'Bogotá'];
    const campos = ['Diseño Gráfico', 'Ingeniería de Sistemas', 'Medicina', 'Mercadeo'];
    const jobs = ['Diseñador UIX', 'Gestor de Base de Datos', 'Gobernador de Departamento', 'Astronauta', 'Mecánico de motos'];
    const filterStyles = { margin: '0 40px', color: 'white'}
    console.log(violet)
    return(
      <Layout title='Vacantes' userAgent={this.userAgent}>
       <Header context={'vacantes'} />
        <BlockWrapper>
          <div className='col s12' id='searchBar-wrapper'>
            <SearchBar />
          </div>
          <div className='col s12  grey lighten-1 center-align' id='filters-wrapper' >
            <SelectableField id='companies'
                             className='filter left-align'
                             floatingLabelText='Empresa'
                             value={this.state.companies}
                             autoWidth={true}
                             style={filterStyles}
                             onChange={this.handleCompaniesChange}>
              { empresas.map( (empresa, index) =>  (<MenuItem value={index} primaryText={empresa} key={index} style={{color: violet}}/> )) }
            </SelectableField>
            <SelectableField id='cities'
                             className='filter left-align'
                             floatingLabelText='Ciudad'
                             value={this.state.cities}
                             autoWidth={true}
                             style={filterStyles}
                             onChange={this.handleCitiesChange}>
              { ciudades.map( (empresa, index) =>  (<MenuItem value={index} primaryText={empresa} key={index} style={{color: violet}}/> )) }
            </SelectableField>
            <SelectableField id='fields'
                             className='filter left-align'
                             floatingLabelText='Campo Laboral'
                             value={this.state.fields}
                             autoWidth={true}
                             style={filterStyles}
                             onChange={this.handleFieldsChange}>
              { campos.map( (empresa, index) =>  (<MenuItem value={index} primaryText={empresa}  key={index} style={{color: violet}}/> )) }
            </SelectableField>
          </div>
          <section className='col s8 push-s2' id='job-list-wrapper'>
           
              { jobs.map( (item, index) => ( 
                <JobListItem jobTitle={item} 
                             key={index}/>)
              )}
         
          </section>
        </BlockWrapper>
        <style jsx>{`
        
            #searchBar-wrapper{
              background-color:white;
              padding: 14px 0;
            }
            #filters-wrapper{
              padding-bottom: 14px;
              margin:0;
              display: flex;
              justify-content: center;
            }
            .filter{
              margin: 6px 10px;
            }
            #job-list-wrapper{
              background-color: white;
              margin-top:30px;
              padding:0;
              border: 1px solid #e0e0e0;
            }
        `}</style>
      </Layout>
    )
  }
}