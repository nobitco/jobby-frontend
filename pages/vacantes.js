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
import fetch from 'isomorphic-fetch'


export default class Jobs extends Page{
  
  constructor(props){
    super(props);
     this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
    this.state = {
      companies: '',
      cities: '',
      fields: '',
      searchText: ''
    }
  }
  
  static async getInitialProps ({req, query}) {
    let props = await super.getInitialProps({req, query})
    const places = await fetch('http://localhost:3001/api/places')
    const placesJson = await places.json()
    
    props.places = placesJson
    
    return props
  }
  
  filterSearch = (places, searchFilter) => {
    
    const filteredJobs = []
    places.forEach( (place, index) => place.jobs.forEach((job, index) => (job.name.toLowerCase().indexOf(searchFilter) > -1) && filteredJobs.push(job)))
    return filteredJobs;
                        
  }
  
  makeJobListItemComponents = (array) => {
    return array.map((item, index ) => <JobListItem jobTitle={item.name}
                                          place={'place.username'}
                                          key={index}
                                          posttime={item.postime}
                                          city={'place.city'}
                                          avatar={'https://opensource.org/files/osi_standard_logo.png'} />)
  }
  
  getSearchText = (searchText) => this.setState({ searchText : searchText }) 
  
  handleCompaniesChange = (event, index, value) => this.setState({ companies: value});
  
  handleCitiesChange = (event, index, value) => this.setState({ cities: value});
  
  handleFieldsChange = (event, index, value) => this.setState({ fields: value});
  
  render(){
    
    const empresas = ['Exito', 'Carvajal', 'Colombina'];
    const ciudades = ['Cali', 'Medellín', 'Pasto', 'Bogotá'];
    const campos = ['Diseño Gráfico', 'Ingeniería de Sistemas', 'Medicina', 'Mercadeo'];
    const jobs = ['Diseñador UIX', 'Gestor de Base de Datos', 'Gobernador de Departamento', 'Astronauta', 'Mecánico de motos'];
    const filterStyles = { margin: '0 40px', color: 'white'}
    return(
      <Layout title='Vacantes' userAgent={this.userAgent}>
       <Header context={'vacantes'} />
        <BlockWrapper>
          <div className='col s12' id='searchBar-wrapper'>
            <SearchBar value={this.state.searchText} onSearchText={this.getSearchText}/>
          </div>
          <div className='row grey lighten-1 center-align' id='filters-wrapper' >
            <SelectableField id='companies'
                             className='filter left-align col s2 m2 push-m1 '
                             floatingLabelText='Empresa'
                             value={this.state.companies}
                             autoWidth={false}
                             style={filterStyles}
                             onChange={this.handleCompaniesChange}>
              { empresas.map( (empresa, index) =>  (<MenuItem value={index} primaryText={empresa} key={index} style={{color: violet}}/> )) }
            </SelectableField>
            <SelectableField id='cities'
                             className='filter left-align col s2 m2 push-m1 '
                             floatingLabelText='Ciudad'
                             value={this.state.cities}
                             autoWidth={false}
                             style={filterStyles}
                             onChange={this.handleCitiesChange}>
              { ciudades.map( (empresa, index) =>  (<MenuItem value={index} primaryText={empresa} key={index} style={{color: violet}}/> )) }
            </SelectableField>
            <SelectableField id='fields'
                             className='filter left-align col s2 m2 push-m1 '
                             floatingLabelText='Campo Laboral'
                             value={this.state.fields}
                             autoWidth={false}
                             style={filterStyles}
                             onChange={this.handleFieldsChange}>
              { campos.map( (empresa, index) =>  (<MenuItem value={index} primaryText={empresa}  key={index} style={{color: violet}}/> )) }
            </SelectableField>
          </div>
          <section className='col s12 m10 push-m1 l8 push-l2' id='job-list-wrapper'>
           
              { this.makeJobListItemComponents(this.filterSearch(this.props.places, this.state.searchText))  }
         
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
  
            }
            .filter{
              margin: 6px 10px;
              width: auto !important;
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