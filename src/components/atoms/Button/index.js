import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font } from 'styled-theme'
import { Link } from 'react-router'
import { ifProp } from 'styled-tools'

const styles = css`
  font-family: ${font('primary')};
  align-items: center;
  font-size: 13px;
  border: #9637f9 solid 1.5px;
  border-radius: 58px;
  height: 3.2em;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0 1em;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  color: #11295e;

  &:focus {
    outline: none
  }
`

const StyledLink = styled(({ disabled, transparent, reverse, palette, height, theme, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}

export default Button
