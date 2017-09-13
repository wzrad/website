// @flow
import 'glamor/reset'
import { each } from 'lodash'
import { css } from 'glamor'

// extra resets
css.insert(`
ol {
  -webkit-margin-after: 0;
  -webkit-margin-before: 0;
  -webkit-padding-start: 30px;
}
`)

// global rules
function globals (definitions) {
  each(definitions, (definition, selector) => {
    css.global(selector, definition)
  })
}

globals({
  html: {
    lineHeight: 1.3
  },
  body: {
    fontFamily: 'system-ui'
  },
  'p, h1, h2, h3, h4, h5, h6, ul': {
    margin: 0
  },
  'p, span, div': {
    lineHeight: 1.4
  },
  h1: {
    fontSize: 28
  },
  h2: {
    fontSize: 24
  },
  h3: {
    fontSize: 20
  },
  h4: {
    fontSize: 20,
    fontWeight: 'regular'
  },
  h5: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  a: {
    cursor: 'pointer'
  }
})
