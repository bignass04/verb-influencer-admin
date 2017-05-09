import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  padding: 0 20px 0 10px;
`

const Tab = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

export default Tab
