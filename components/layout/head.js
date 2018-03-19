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
    if (process.env.NODE_ENV === 'production') {
      // In production, serve pre-built CSS file from /assets/{version}/main.css
      let pathToCSS = '/assets/' + Package.version + '/main.css'
      stylesheet = <link rel='stylesheet' type='text/css' href={pathToCSS} />
    } else {
      // In development, serve CSS inline (with live reloading) with webpack
      // NB: Not using dangerouslySetInnerHTML will cause problems with some CSS
      stylesheet = <style dangerouslySetInnerHTML={{__html: inlineCSS}} />
    }

    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
        <title>{this.props.title}</title>
        {stylesheet}
      </Head>
    )
  }
}
