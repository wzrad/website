// @flow
import React, { Component } from 'react'
import { Link } from '../shared/components'
import { stylesheet, mixins, values, colors } from '../shared/styles'

export class Sidebar extends Component<*> {
  render () {
    return <div {...rules.sidebar}>
      <Link to='/' unanimated>
        <div {...rules.icon} alt='purple square icon' />
      </Link>
      <div {...rules.navs}>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/work'>Work</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/bikes'>Bikes</Link>
        </nav>
        <nav>
          <Link to='https://github.com/wzrad'>GitHub</Link>
        </nav>
      </div>
    </div>
  }
}

const rules = stylesheet({
  sidebar: {
    ...mixins.column,
    padding: values.spacing
  },
  navs: {
    ...mixins.column,
    flex: 1,
    justifyContent: 'space-between',
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
