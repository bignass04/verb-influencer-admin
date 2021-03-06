import React from 'react'
import styled from 'styled-components'
import { PageTemplate, LeftNav, Logo, Button, PageTitle, Title,
  TabList, Tab, CompaniesList } from 'components'

const HeadWrapper = styled.div`
  padding: 20px 20px 10px;
  background-color: #f0f2f5;
`

const AddNewBtn = styled(Button)`
  float: right;
`

const CompaniesPage = () => (
  <PageTemplate leftNav={<LeftNav />} logo={<Logo />}>
    <HeadWrapper>
      <PageTitle>
        <Title>Companies</Title>
        <AddNewBtn action='add' clear>Add New Company</AddNewBtn>
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
