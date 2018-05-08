import React from 'react'
import SearchIcon  from 'material-ui/svg-icons/action/search'

export default class SearchBar extends React.Component{
  constructor(props){
    super(props)
  }
  
  handleChange = (e) => this.props.onSearchText(e.target.value)

  
  render(){
    return(
    <div id='wrapper' className='valign-wrapper center-align'>
        <SearchIcon color='grey'/>
        <input  id='search-input' 
                className='browser-default'
                type='text' 
                placeholder='Buscar vacantes'
                value={this.props.value}
                onChange={this.handleChange}/>
        <style jsx>{`
              #wrapper{
                min-height: 30px;
                max-width:400px;
                margin: 0 auto;
                display:flex;
                align-items: center;
                justify-content: center;
              }
              input[type=text]#search-input{
              margin-left:10px;
              border:none;
              font-size:24px;
              padding: 4px;
              }
              input[type=text]#search-input:focus{
               outline:none;
              }

          `}</style>
     </div>
  )}
}