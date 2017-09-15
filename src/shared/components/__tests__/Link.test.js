/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Link } from '../Link'

let subject

function loadSubject (props) {
  subject = shallow(<Link to='/test' {...props} />)
}

afterEach(() => {
  subject = null
})

describe('#render', () => {
  it('renders properly', () => {
    loadSubject()
    expect(subject).toMatchSnapshot()
  })

  it('renders properly when animating', () => {
    loadSubject()
    subject.setState({ animation: 'started' })
    expect(subject).toMatchSnapshot()
  })

  it('renders properly when ending animation', () => {
    loadSubject()
    subject.setState({ animation: 'ending', color: '#AFAFAF' })
    expect(subject).toMatchSnapshot()
  })
})
