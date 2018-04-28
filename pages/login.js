import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout/layout' 
import LogBtn from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Link from 'next/link'
import { NextAuth } from 'next-auth/client'
import Router from 'next/router'

class Login extends Page {
  static async getInitialProps ({req, query}) {
    let props = await super.getInitialProps({req, query})

    return props
  }

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      session: props.session
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this)

    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
  }
  
  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSignInSubmit(event) {
    event.preventDefault()

    // An object passed NextAuth.signin will be passed to your signin() function
    NextAuth.signin({
      email: this.state.email,
      password: this.state.password
    })
    .then(authenticated => {
      Router.push(`/auth/callback`)
    })
    .catch(() => {
      alert("Authentication failed!.")
    })
  }

  render(){
    const wrapperStyle= { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100vh'}
    if (!this.props.session.user) {
      return(
        <Layout title='Login : Bienvenido a Jobby' userAgent={this.userAgent} >
          <div id='wrapper' style={wrapperStyle}>
          <div id='login-box'>
              <h1>Jobby</h1>
              <form id="sigin" method="post" action="/auth/signin" onSubmit={this.handleSignInSubmit}>
              <input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
                <div className='input'>
                  <TextField floatingLabelText='E-mail'
                              name='email'
                              type='text'
                              value={this.state.email}
                              onChange={this.handleEmailChange}
                              />
                </div>
                <div className='input'>
                  <TextField floatingLabelText='Contraseña'
                              name='password'
                              type='password'
                              value={this.state.password}
                              onChange={this.handlePasswordChange}
                              />
                </div>
                  <LogBtn label="Entrar" 
                          primary={true} 
                          type='submit' 
                          fullWidth={true} 
                          style={{marginTop: 50}}
                          />
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
    } else {
      return (
        <Layout>
          <Link prefetch href="/dashboard">
            <a>Usted ya está logueado!</a>
          </Link>
        </Layout>
      )
    }
  }
}

export default Login

