// @flow
import React, { Component } from 'react'
import { Sidebar } from './Sidebar'
import { styles } from '../shared'
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

const rules = styles.sheet({
  container: {
    display: 'flex'
  },
  content: {
    padding: styles.values.spacing
  }
})
