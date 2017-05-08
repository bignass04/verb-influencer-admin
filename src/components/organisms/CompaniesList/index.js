import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

const TitleRow = styled(Row)`
  padding: 5px 30px;
  background-color: #f7f8fb;
  border: solid 1px #e6e5e9;
  margin-left: 0;
`

const TitleCol = styled(Col)`
  font-family: 'OpenSans-SemiBold';
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  padding: 0;
`

const StyledGrid = styled(Grid)`
`

const StyledRow = styled(Row)`
  padding: 20px 30px;
  margin-left: 0;

  &:nth-child(odd) {
    background-color: #f9fafc;
  }
`

const StyledCol = styled(Col)`
  padding-left: 0;
  margin-left: 0;
`

const CompaniesList = () => {
  return (
    <StyledGrid>
      <TitleRow>
        <TitleCol lg={1}></TitleCol>
        <TitleCol lg={3}>Name</TitleCol>
        <TitleCol lg={3}>Active Campaigns</TitleCol>
        <TitleCol lg={3}>Finished Campaigns</TitleCol>
        <TitleCol lg={2}></TitleCol>
      </TitleRow>
      <StyledRow>
        <StyledCol lg={1}><img src='/icon.png' width='30' height='30' /></StyledCol>
        <StyledCol lg={3}>Ben & Jerry's</StyledCol>
        <StyledCol lg={3}>2</StyledCol>
        <StyledCol lg={3}>3</StyledCol>
        <StyledCol lg={2}></StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol lg={1}><img src='/group.png' width='30' height='30' /></StyledCol>
        <StyledCol lg={3}>Dragonball Z</StyledCol>
        <StyledCol lg={3}>4</StyledCol>
        <StyledCol lg={3}>1</StyledCol>
        <StyledCol lg={2}></StyledCol>
      </StyledRow>
    </StyledGrid>
  )
}

export default CompaniesList
