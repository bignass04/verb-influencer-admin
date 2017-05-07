import React from 'react'
import styled from 'styled-components'
import { Button } from 'components'

const PageTitle = styled.span``

const Title = styled.span`
  color: #081326;
  font-size: 34px;
  font-weight: 300;
`

const CompaniesList = () => (
  <PageTitle>
    <Title>Companies</Title>
    <Button action='add'>Add New Company</Button>
  </PageTitle>
)

export default CompaniesList
