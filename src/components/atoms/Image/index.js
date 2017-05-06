import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.span``

const Image = ({ src, width, height, ...props }) => (
  <Wrapper {...props}>
    <img src={src} width={width} height={height} />
  </Wrapper>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}
