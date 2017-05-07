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
  width: 33.3%;
  height: inherit;
  background-color: #202636;
`

const Content = styled.div`
  background-color: white;
  width: 66.7%;
  height: inherit;
`

const PageTemplate = ({ leftNav, children, props }) => (
  <Wrapper {...props}>
    <LeftNav>{leftNav}</LeftNav>
    <Content>{children}</Content>
  </Wrapper>
)

export default PageTemplate
