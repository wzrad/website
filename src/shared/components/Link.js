/* globals SyntheticMouseEvent, SyntheticAnimationEvent, React$Ref */
// @flow
import React, { Component } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { startsWith } from 'lodash'
import { css } from 'glamor'
import { stylesheet, colors } from '../styles'
import type { RuleProp } from 'glamor'

type State = {
  color: ?string,
  animation: 'stopped' | 'started' | 'ending'
}

export class Link extends Component<*, State> {
  props: {
    to: string | Object,
    unanimated: boolean,
    style?: RuleProp
  }

  static defaultProps = {
    unanimated: false
  }

  state = {
    color: null,
    animation: 'stopped'
  }

  linkRef: ?React$Ref<'a'> = null

  // events
  onMouseEnter = (event: SyntheticMouseEvent<*>) => {
    if (this.props.unanimated) {
      return
    }

    this.setState({ animation: 'started' })
  }

  onMouseLeave = (event: SyntheticMouseEvent<*>) => {
    if (this.props.unanimated) {
      return
    }

    if (this.linkRef) {
      const { color } = window.getComputedStyle(this.linkRef)
      this.setState({ color, animation: 'ending' })
    } else {
      this.setState({ animation: 'stopped' })
    }
  }

  onAnimationEnd = (event: SyntheticAnimationEvent<*>) => {
    if (this.props.unanimated) {
      return
    }

    if (this.state.animation === 'ending') {
      this.setState({ color: null }, () => {
        this.setState({ animation: 'stopped' })
      })
    }
  }

  // helpers
  currentAnimation () {
    switch (this.state.animation) {
      case 'started':
        return rules.animating
      case 'ending':
        return rules.animatingOut
      default: return null
    }
  }

  // lifecycle
  render () {
    const { to, style, ...otherProps } = this.props
    const { color } = this.state

    const rule = css(
      rules.link,
      color && { color },
      this.currentAnimation(),
      style
    )

    const ref = (link) => { this.linkRef = link }
    const props = {
      ...otherProps,
      ...rule,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onAnimationEnd: this.onAnimationEnd
    }

    if (typeof to === 'string' && startsWith(to, 'http')) {
      return <a href={to} ref={ref} {...props} />
    } else {
      return <RouteLink to={to} innerRef={ref} {...props} />
    }
  }
}

const animations = {
  rainbow: css.keyframes({
    '0%': { color: colors.purple },
    '8.3%': { color: '#47DAFF' }, // blue
    '24.9%': { color: '#47FF5A' }, // green
    '41.5%': { color: '#FFF547' }, // yellow
    '58.1%': { color: '#FF9A47' }, // orange
    '74.7%': { color: '#FF474A' }, // red
    '100%': { color: colors.purple }
  }),
  rainbowOut: css.keyframes({
    to: { color: colors.purple }
  })
}

const rules = stylesheet({
  link: {
    color: colors.purple
  },
  animating: {
    animation: `${animations.rainbow} 2.0s infinite`
  },
  animatingOut: {
    animation: `${animations.rainbowOut} 0.3s`
  }
})
