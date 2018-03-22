import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {yellow900, limeA200} from 'material-ui/styles/colors'
import {violet, blue, red} from './theme-colors'

export default (userAgent) => {
  return getMuiTheme({
    userAgent: userAgent,
    palette: {
      primary1Color: violet,
      primary2Color: blue,
      accent1Color: red,
      accent2Color: limeA200,
      pickerHeaderColor: yellow900,
      accent3Color: violet,
      secondaryTextColor:violet
      
    }
  })
}
