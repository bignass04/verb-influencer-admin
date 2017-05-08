import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: inherit;
`

const LeftNav = styled.nav`
  width: 500px;
  height: inherit;
  background-color: #202636;
`

const Content = styled.div`
  background-color: white;
  width: auto;
  height: inherit;
`

const PageTemplate = ({ leftNav, children, props }) => (
  <Wrapper {...props}>
    <LeftNav>{leftNav}</LeftNav>
    <Content>{children}</Content>
  </Wrapper>
)

export default PageTemplate
