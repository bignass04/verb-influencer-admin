import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title='Verb Influencer Web Admin'
        titleTemplate="%s"
        meta={[
          { name: 'description', content: 'Web Admin for Verb Influencers' },
          { name: 'robots', content: 'nonindex, nofollow' }
        ]}
      />
      <ThemeProvider theme={theme}>{ children }</ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
