// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as scenes from '../scenes'

export const Routes = () => <Switch>
  <Route path='/work' component={scenes.Work} />
  <Route path='/blog' component={scenes.Blog} />
  <Route path='/bikes' component={scenes.Bikes} />
  <Route path='/' component={scenes.Home} />
</Switch>
