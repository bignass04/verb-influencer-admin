import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'components'
import { Logo } from 'components'

const Wrapper = styled.div``

const LeftNav = () => (
  <Wrapper>
    <Logo />
    <NavLink to='/companies'>
      Companies
    </NavLink>
    <NavLink to='/campaigns'>
      Campaigns
    </NavLink>
    <NavLink to='/influencers'>
      Influencers
    </NavLink>
    <NavLink to='/employees'>
      Employees
    </NavLink>
  </Wrapper>
)

export default LeftNav
