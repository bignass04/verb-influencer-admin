import React from 'react'

import { PageTemplate, LeftNav, Logo } from 'components'

const HomePage = () => (
  <PageTemplate leftNav={<LeftNav />} logo={<Logo />}>Hello World</PageTemplate>
)

export default HomePage
