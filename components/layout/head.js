import Head from 'next/head'
import React from 'react'
import Package from '../../package'
import inlineCSS from '../../css/main.scss'


export default class extends React.Component {
  

  static propTypes () {
    return {
      session: React.propTypes.object.isRequired
    }
  }


  render () {
    let stylesheet
    stylesheet = <style dangerouslySetInnerHTML={{__html: inlineCSS}} />


    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <title>{this.props.title}</title>
        {stylesheet}
      </Head>
    )
  }
}
