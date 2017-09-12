// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './navigation'

console.log('hello.')
console.log('welcome to my website, very nice to see you.')

const root = document.getElementById('root')
ReactDOM.render(<Router />, root)
