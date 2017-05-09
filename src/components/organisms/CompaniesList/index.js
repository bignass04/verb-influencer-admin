import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { MoreButton } from 'components'

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
        <TitleCol lg={4}>Name</TitleCol>
        <TitleCol lg={2}>Active Campaigns</TitleCol>
        <TitleCol lg={2}>Finished Campaigns</TitleCol>
        <TitleCol lg={2}></TitleCol>
      </TitleRow>
      <StyledRow>
        <StyledCol lg={1}><img src='/icon.png' width='30' height='30' /></StyledCol>
        <StyledCol lg={4}>Ben & Jerry's</StyledCol>
        <StyledCol lg={2}>2</StyledCol>
        <StyledCol lg={2}>3</StyledCol>
        <StyledCol lg={2}>
          <MoreButton action='more' clear>More</MoreButton>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol lg={1}><img src='/group.png' width='30' height='30' /></StyledCol>
        <StyledCol lg={4}>Dragonball Z</StyledCol>
        <StyledCol lg={2}>4</StyledCol>
        <StyledCol lg={2}>1</StyledCol>
        <StyledCol lg={2}>
          <MoreButton action='more' clear>More</MoreButton>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  )
}

export default CompaniesList
