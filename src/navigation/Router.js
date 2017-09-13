// @flow
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Routes } from './Routes'

export const Router = () => <BrowserRouter>
  <Layout>
    <Routes />
  </Layout>
</BrowserRouter>
