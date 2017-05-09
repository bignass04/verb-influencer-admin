import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  color: #081326;
  font-size: 34px;
  font-weight: 300;
  float: left;
`

const Title = ({ children }) => (
  <Wrapper>{ children }</Wrapper>
)

export default Title
