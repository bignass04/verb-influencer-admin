import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import theme from './themes/default'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.primary};
    margin: 0;
    height: inherit;
  }

  main {
    height: inherit;
  }

  div[data-reactroot] {
    height: inherit;
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
        link={[
          { rel: 'stylesheet', type: 'text/css', href: '/local-fonts.css'}
        ]}
      />
      <ThemeProvider theme={theme}>{ children }</ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
