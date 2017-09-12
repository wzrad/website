// @flow
import { reduce, defaults } from 'lodash'
import { css } from 'glamor'
import type { RuleDefinition, RuleProp } from 'glamor'

type RuleDefinitionMap = { [key: string]: RuleDefinition }
type RulePropMap = { [key: string]: RuleProp }

export function sheet (definitions: RuleDefinitionMap): RulePropMap {
  return reduce(definitions, (memo, definition, key) => {
    const def = defaults(definition, { label: key })
    memo[key] = css(def)
    return memo
  }, {})
}
