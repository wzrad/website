// @flow
import React, { Component } from 'react'
import { stylesheet, mixins } from '../../shared/styles'

export class Bikes extends Component<*> {
  render () {
    return <div {...rules.bikes}>
      <h1>Bikes</h1>
      <p>They're neat.</p>
    </div>
  }
}

const rules = stylesheet({
  bikes: {
    '> h1': {
      ...mixins.header
    }
  }
})
