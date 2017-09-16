// @flow
import React, { Component } from 'react'
import { stylesheet, mixins } from '../../shared/styles'

export class Work extends Component<*> {
  render () {
    return <div {...rules.work}>
      <h1>Work</h1>
      <p>I've done some.</p>
    </div>
  }
}

const rules = stylesheet({
  work: {
    '> h1': {
      ...mixins.header
    }
  }
})
