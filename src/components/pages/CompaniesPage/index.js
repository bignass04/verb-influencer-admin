import React from 'react'

import { PageTemplate, LeftNav, Logo, CompaniesList } from 'components'

const CompaniesPage = () => (
  <PageTemplate leftNav={<LeftNav />} logo={<Logo />}>
    <CompaniesList />
  </PageTemplate>
)

export default CompaniesPage
