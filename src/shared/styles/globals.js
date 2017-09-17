// @flow
import 'glamor/reset'
import { each, defaults, entries } from 'lodash'
import { css } from 'glamor'

// helpers
function globals (definitions) {
  each(definitions, (definition, selector) => {
    css.global(selector, definition)
  })
}

function theme (definitions) {
  const element = document.getElementsByTagName('body')[0]
  const rule = css(defaults(definitions, { label: 'theme' }))
  const attribute = entries(rule)[0]
  element.setAttribute(attribute[0], attribute[1])
}

// extra resets
css.insert(`
ol {
  -webkit-margin-after: 0;
  -webkit-margin-before: 0;
  -webkit-padding-start: 30px;
}
`)

globals({
  'p, h1, h2, h3, h4, h5, h6, ul': {
    margin: 0
  }
})

// 'theme'
theme({
  fontFamily: 'system-ui',
  lineHeight: 1.3,
  ' p, span, div': {
    lineHeight: 1.4
  },
  ' h1': {
    fontSize: 28
  },
  ' h2': {
    fontSize: 24,
    fontWeight: 'normal'
  },
  ' h3': {
    fontSize: 20
  },
  ' h4': {
    fontSize: 20,
    fontWeight: 'normal'
  },
  ' h5': {
    fontSize: 16,
    fontWeight: 'bold'
  },
  ' a': {
    cursor: 'pointer'
  }
})
