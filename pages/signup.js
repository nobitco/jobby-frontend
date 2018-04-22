import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout/layout'
import TextField from 'material-ui/TextField'
import SendEmailBtn from 'material-ui/RaisedButton'
import { NextAuth } from 'next-auth/client'
import Router from 'next/router'

class SignUp extends Page {
  constructor (props) {
    super(props)

    this.state = {
      email: ''
    }

    this.userAgent = typeof navigator !== 'undefined' && navigator.userAgent
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
  }

  handleEmailChange (event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSignUpSubmit (event) {
    event.preventDefault()

    if (!this.state.email) return

    NextAuth.signin(this.state.email)
      .then(() => {
        Router.push(`/auth/check-email?email=${this.state.email}`)
      })
      .catch(() => {
        Router.push(`/auth/error?action=signin&type=email&email=${this.state.email}`)
      })
  }

  render () {
    const wrapperStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}
    return (
      <Layout title='Cuenta gratis : Bienvenido a Jobby' userAgent={this.userAgent} >
        <div id='wrapper' style={wrapperStyle}>
          <div id='signup-box'>
            <h1>Jobby</h1>
            <h2>Solicite una cuenta gratis!</h2>
            <form id='sigin' method='post' action='/auth/signin' onSubmit={this.handleSignUpSubmit}>
              <div className='input'>
                <TextField floatingLabelText='E-mail'
                  name='email'
                  type='text'
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <SendEmailBtn label='Enviar solicitud'
                primary
                type='submit'
                fullWidth
                style={{marginTop: 50}}
              />
            </form>
            <style jsx>{`
                #signup-box{
                  max-width: 450px;
                  margin-top: -300px;
                }
                h1{
                  text-align:center;
                  font-size: 50px;    
                }
                h2{
                  text-align:center;
                  font-size: 20px;    
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

export default SignUp
