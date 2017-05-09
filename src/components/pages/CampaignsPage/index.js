import React from 'react'
import styled from 'styled-components'
import { PageTemplate, LeftNav, Logo, Button, TabList, Tab, PageTitle, Title, CompaniesList } from 'components'

const HeadWrapper = styled.div`
  padding: 20px 20px 10px;
  background-color: #f0f2f5;
`

const CampaignsPage = () => (
  <PageTemplate leftNav={<LeftNav />} logo={<Logo />}>
    <HeadWrapper>
      <PageTitle>
        <Title>Campaigns</Title>
      </PageTitle>
      <TabList>
        <Tab>Active Companies</Tab>
        <Tab>Verb Data</Tab>
        <SortTab>Sort By
          <span style={{'font-weight': 'bold'}}>Company</span>
        </SortTab>
      </TabList>
    </HeadWrapper>
    <CompaniesList />
  </PageTemplate>
)

export default CampaignsPage
