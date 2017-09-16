// @flow
import React, { Component } from 'react'
import { stylesheet, mixins } from '../../shared/styles'

export class Blog extends Component<*> {
  render () {
    return <div {...rules.blog}>
      <h1>Blog</h1>
      <p>Nothing here.</p>
    </div>
  }
}

const rules = stylesheet({
  blog: {
    '> h1': {
      ...mixins.header
    }
  }
})
