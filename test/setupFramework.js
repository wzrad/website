/* eslint-env jest */
import 'jest-enzyme/lib'
import * as matchers from './matchers'
import './mocks'

expect.extend(matchers)

beforeEach(() => {
  jest.clearAllMocks()
})
