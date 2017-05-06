import React from 'react'
import styled from 'styled-components'
import { Icon } from 'components'
import { Link } from 'react-router'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
`

const Logo = () => (
  <StyledLink to='/'>
    <Icon icon='logo' />
  </StyledLink>
)

export default Logo
