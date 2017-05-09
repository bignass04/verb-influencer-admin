import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  width: 100%
  padding-bottom: 20px;
`

const PageTitle = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

export default PageTitle
