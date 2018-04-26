import React from 'react'
import Layout from '../components/layout/layout' 
import LogBtn from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Link from 'next/link'
import Page from '../components/page'


export default class Login extends Page{
  
  constructor(props){
    super(props);
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
  }
  
  
  render(){
    
    const wrapperStyle= { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100vh'}
    return(
      <Layout title='Login : Bienvenido a Jobby' userAgent={this.userAgent} >
        <div id='wrapper' style={wrapperStyle}>
         <div id='login-box'>
            <h1>Jobby</h1>
            <form>
             <div className='input'>
               <TextField floatingLabelText='E-mail'
                          name='email'
                          type='text'
                          />
             </div>
             <div className='input'>
              <TextField floatingLabelText='Contraseña'
                          name='password'
                          type='password'
                          />
             </div>
             <Link href='/dashboard-coord'>
               <LogBtn label="Entrar" 
                       primary={true} 
                       type='submit' 
                       fullWidth={true} 
                       style={{marginTop: 50}}
                       />
              </Link>
            </form>
            <style jsx>{`
            
              #login-box{
                max-width: 450px;
                margin-top: -300px;
              }
              h1{
                text-align:center;
                font-size: 50px;    
              }
              form{
                width:60%;
                margin: 40px auto;
              }
            `}</style>
          </div>
        </div>
      </Layout>
    )
  }
}

