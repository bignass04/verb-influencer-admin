import React from 'react'
import styled from 'styled-components'
import { PageTemplate, LeftNav, Logo, CompaniesList, Button } from 'components'

const HeadWrapper = styled.div`
  padding: 20px 20px 0;
  background-color: #f0f2f5;
`

const PageTitle = styled.div`
  display: inline-block;
  width: 100%
  padding-bottom: 20px;
`
const Title = styled.span`
  color: #081326;
  font-size: 34px;
  font-weight: 300;
  float: left;
`

const AddNewBtn = styled(Button)`
  float: right;
  background: none;
`

const TabList = styled.div`
`

const Tab = styled.span`
  padding: 0 20px 0 10px;
`

const CompaniesPage = () => (
  <PageTemplate leftNav={<LeftNav />} logo={<Logo />}>
    <HeadWrapper>
      <PageTitle>
        <Title>Companies</Title>
        <AddNewBtn action='add'>Add New Company</AddNewBtn>
      </PageTitle>
      <TabList>
        <Tab>Active Companies</Tab>
        <Tab>Inactive Companies</Tab>
      </TabList>
    </HeadWrapper>
    <CompaniesList />
  </PageTemplate>
)

export default CompaniesPage
