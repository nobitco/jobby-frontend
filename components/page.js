import React from 'react'

export default class extends React.Component {
  // Expose session to all pages
  static async getInitialProps ({req, query}) {
    return {
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent
    }
  }
}
