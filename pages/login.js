import React from 'react'
import Layout from '../components/layout/layout' 
import LogBtn from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Link from 'next/link'


class Login extends React.Component{
  
  constructor(props){
    super(props);
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
  }
  
  
  render(){
    return(
      <Layout title='Login : Bienvenido a Jobby' userAgent={this.userAgent}>
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
                margin: 0 auto;
                margin-top: 10%;
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
      </Layout>
    )
  }
}

export default Login;