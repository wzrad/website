// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as scenes from '../scenes'

export const Routes = () => <Switch>
  <Route path='/work' {...scenes.work} />
  <Route path='/blog' {...scenes.blog} />
  <Route path='/bikes' {...scenes.bikes} />
  <Route path='/' {...scenes.home} />
</Switch>
