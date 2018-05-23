import React from 'react'
import Page from '../../components/page'
import Layout from '../../components/layout/layout' 
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps({query}) {
    return {
      email: query.email
    }
  }

  render() {
    const wrapperStyle= { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100vh'}
    return(
      <Layout title='Email Signup :' userAgent={this.userAgent} >
        <div id='wrapper' style={wrapperStyle}>
          <div id='sendemail-box'>
              <h1>Jobby</h1>
              <p className="lead">
                Un correo ha sido enviado a { (this.props.email) ? <span className="font-weight-bold">{this.props.email}</span> : <span>your inbox</span> }.
              </p>
              <p>
              <Link href="/"><a>Dashboard</a></Link>
              </p>
              <style jsx>{`
                #sendemail-box{
                  max-width: 450px;
                  margin-top: -300px;
                }
                h1{
                  text-align:center;
                  font-size: 50px;    
                }
              `}</style>
            </div>
        </div>
      </Layout>
    )
  }
}
