// @flow
import React, { Component } from 'react'
import { styles } from '../shared'

export class Home extends Component<*> {
  render () {
    return <div {...rules.container}>
      hello, world
    </div>
  }
}

const rules = styles.sheet({
  container: {
    fontSize: 24
  }
})
