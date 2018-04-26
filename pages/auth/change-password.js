import React from 'react'
import Page from '../../components/page'
import Layout from '../../components/layout/layout'
import LogBtn from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class ChangePassword extends Page {
  static async getInitialProps({ req, query }) {
    let props = await super.getInitialProps({ req, query })
    
    return props
  }
 
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      session: this.props.session
    }
    //gets navigator.UserAgent at the very very begining!
    this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent
    
    this.handleChangePasswordSubmit = this.handleChangePasswordSubmit.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePasswordConfirmedChange = this.handlePasswordConfirmedChange.bind(this)
  }
  
  handlePasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }
  handlePasswordConfirmedChange (event) {
    console.log(event.target.value)
  }
  
  handleChangePasswordSubmit (event) {
    event.preventDefault()
  }

  render () {
    const wrapperStyle= { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100vh'}
    return(
      <Layout title='Change password' userAgent={this.userAgent} >
        <div id='wrapper' style={wrapperStyle}>
          <div id='changepassword-box'>
            <h1>Jobby</h1>
            <h2>Confirme el password para su cuenta en Jobby!</h2>
            <form id="changepasswd" method="post" action="/auth/changepasswd" onSubmit={this.handleChangePassworddSubmit}>
            <input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
              <div className='input'>
                <TextField floatingLabelText='Password'
                            name='password'
                            type='password'
                            value={this.state.passwd}
                            onChange={this.handlePasswordChange}
                            />
              </div>
              <div className='input'>
                <TextField floatingLabelText='Password confirmed'
                            name='password-confirmed'
                            type='password'
                            value={this.state.passwordConfirmedChange}
                            onChange={this.handlePasswordConfirmedChange}
                            />
              </div>
                <LogBtn label="Confirmar" 
                        primary={true} 
                        type='submit' 
                        fullWidth={true} 
                        style={{marginTop: 50}}
                        />
            </form>            
          </div>
        </div>
        <style jsx>{`
          #changepasswd-box{
            max-width: 450px;
            margin-top: -300px;
          }
          h1{
            text-align:center;
            font-size: 50px;    
          }
          h2{
            text-align:center;
            font-size: 15px;    
          }

          form{
            width:60%;
            margin: 40px auto;
          }
        `}</style>
      </Layout>
    )
  }
}

export default ChangePassword
