// @flow
import React, { Component } from 'react'
import { styles } from '../shared'

export class Home extends Component<*> {
  render () {
    return <div {...rules.container}>
      <h1>Hi I'm Ty.</h1>
      <p>I'm a mobile & web developer, and I'm most interested in using technology to tackle existing community/social/civic issues. I also like learning new things, games, and all that jazz.</p>
    </div>
  }
}

const rules = styles.sheet({
  container: {
    '> h1': {
      marginBottom: 20
    }
  }
})
