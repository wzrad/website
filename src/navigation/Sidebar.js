// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { stylesheet, mixins, values, colors } from '../shared/styles'

export class Sidebar extends Component<*> {
  render () {
    return <div {...rules.sidebar}>
      <Link to='/'>
        <div {...rules.icon} alt='purple square icon' />
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/bikes'>Bikes</Link>
      </nav>
    </div>
  }
}

const rules = stylesheet({
  sidebar: {
    ...mixins.column,
    padding: values.spacing,
    '> nav': {
      ...mixins.column,
      '> a + a': {
        marginTop: 5
      }
    }
  },
  icon: {
    width: values.header,
    height: values.header,
    marginBottom: values.spacing,
    backgroundColor: colors.purple
  }
})
