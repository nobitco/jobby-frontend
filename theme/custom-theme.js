import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {yellow900, limeA200} from 'material-ui/styles/colors'
export default (userAgent) => {
  return getMuiTheme({
    userAgent: userAgent,
    palette: {
      primary1Color: '#2e2c3b',
      primary2Color: '#e3f613',
      accent1Color: '#e3f613',
      accent2Color: limeA200,
      pickerHeaderColor: yellow900

    }
  })
}
