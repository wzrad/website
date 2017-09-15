// @flow
import React, { Component } from 'react'
import { Sidebar } from './Sidebar'
import { stylesheet, mixins, values } from '../shared/styles'
import type { Node } from 'react'

export class Layout extends Component<*> {
  props: {
    children?: Node
  }

  render () {
    return <div {...rules.container}>
      <Sidebar />
      <section {...rules.content}>
        {this.props.children}
      </section>
    </div>
  }
}

const rules = stylesheet({
  container: {
    ...mixins.row,
    height: '100vh'
  },
  content: {
    padding: values.spacing
  }
})
