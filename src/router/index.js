/**
 * 路由配置
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ '../containers/Home'),
  loading: () => null,
  modules: ['homepage']
})

const AboutPage = Loadable({
  loader: () => import(/* webpackChunkName: "aboutpage" */ '../containers/About'),
  loading: () => null,
  modules: ['aboutpage']
})

const router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
  </Switch>
)

export default router
