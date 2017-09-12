/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../Home'

describe('#render', () => {
  it('renders properly', () => {
    const subject = shallow(<Home />)
    expect(subject).toMatchSnapshot()
  })
})
