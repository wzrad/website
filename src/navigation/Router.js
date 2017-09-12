// @flow
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as scenes from '../scenes'

export const Router = () => <BrowserRouter>
  <Switch>
    <Route path='/' component={scenes.Home} />
  </Switch>
</BrowserRouter>
