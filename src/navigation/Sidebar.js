// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../shared'

export class Sidebar extends Component<*> {
  render () {
    return <div {...rules.sidebar}>
      <div {...rules.icon} alt='purple square icon' />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/bikes'>Bikes</Link>
      </nav>
    </div>
  }
}

const rules = styles.sheet({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    padding: styles.values.spacing,
    '> nav': {
      display: 'flex',
      flexDirection: 'column',
      '> a + a': {
        marginTop: 5
      }
    }
  },
  icon: {
    width: 45,
    height: 45,
    marginBottom: 15,
    backgroundColor: styles.colors.purple
  }
})
