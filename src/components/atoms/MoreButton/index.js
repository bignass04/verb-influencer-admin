import React from 'react'
import styled from 'styled-components'
import { Button } from 'components'

const Wrapper = styled(Button)`
  height: 2.2em;
`

const MoreButton = (props) => {
  <Wrapper {...props}>
    More
  </Wrapper>
}

export default MoreButton
