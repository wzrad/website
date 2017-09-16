// @flow
import React, { Component } from 'react'
import { stylesheet, mixins } from '../../shared/styles'

export class Home extends Component<*> {
  render () {
    return <div {...rules.home}>
      <h1>Hi, I'm Ty.</h1>
      <p>I'm a mobile & web developer, and I'm most interested in using technology to tackle existing community/social/civic issues. I also like learning new things, games, and all that jazz.</p>
    </div>
  }
}

const rules = stylesheet({
  home: {
    '> h1': {
      ...mixins.header
    }
  }
})
