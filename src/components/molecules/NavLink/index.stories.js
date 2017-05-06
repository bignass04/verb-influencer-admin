import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { NavLink } from 'components'

storiesOf('NavLink', module)
  .add('default', () => (
    <NavLink />
  ))
