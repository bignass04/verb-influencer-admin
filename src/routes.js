import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { CompaniesPage, CampaignsPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={CompaniesPage} />
    <Route path="/campaigns" component={CampaignsPage} />
  </Route>
)

export default routes
