import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const LeftNav = styled.nav`
  background-color: #202636;
  padding: 0 20px;
  width: 33.3%;
`

const Content = styled.div`
  background-color: white;
  width: 66.7%;
`

const PageTemplate = ({ leftNav, children, props }) => (
  <Wrapper {...props}>
    <LeftNav>{leftNav}</LeftNav>
    <Content>{children}</Content>
  </Wrapper>
)

export default PageTemplate
