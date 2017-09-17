// @flow
import React, { Component } from 'react'
import { css } from 'glamor'
import { Link } from '../../../shared/components'
import { stylesheet, values } from '../../../shared/styles'
import type { RuleProp } from 'glamor'

export class Entry extends Component<*> {
  props: {
    title: string,
    url?: string,
    style?: RuleProp,
    children?: any
  }

  renderHeaderContent () {
    const { title, url } = this.props
    if (!url) {
      return <h2>{title}</h2>
    }

    return <Link {...rules.linkHeader} to={url} target='_blank'>
      <h2>{title}</h2>
      <div {...rules.link}>
        find me at <span>{url.replace(/https?:\/\//, '')}</span>
      </div>
    </Link>
  }

  render () {
    const { style, children } = this.props

    const rule = css(
      rules.entry,
      style
    )

    return <section {...rule}>
      <header>
        {this.renderHeaderContent()}
      </header>
      <div {...rules.description}>
        {children}
      </div>
    </section>
  }
}

const rules = stylesheet({
  entry: {
    '> header': {
      marginBottom: values.lightSpacing
    }
  },
  linkHeader: {
    textDecoration: 'none',
    '> h2': {
      color: 'initial'
    }
  },
  link: {
    fontSize: 14,
    textDecoration: 'underline',
    '> span': {
      fontWeight: 'bold'
    }
  },
  description: {
    '> p + p': {
      marginTop: values.lightSpacing
    }
  }
})
