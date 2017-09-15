// @flow
import { values } from './values'

export const row = {
  display: 'flex'
}

export const column = {
  display: 'flex',
  flexDirection: 'column'
}

export const header = {
  ...row,
  alignItems: 'center',
  height: values.header,
  marginBottom: 20
}
