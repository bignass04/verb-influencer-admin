import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

const StyledLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  background-color: #202636;
  padding: 15px 20px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to right, #410096, #8f01ff);
  }
`

const NavLink = ({ to, children, ...props }) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
)

NavLink.propTypes = {

}

export default NavLink
