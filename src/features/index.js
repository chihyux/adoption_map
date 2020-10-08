import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailBox from './adoptionDetail'
import Resource from './resource'

const IndexPage = React.lazy(() => import('./adoptionInfo'))
const ErrorPage = React.lazy(() => import('../components/pageError'))

const Body = () => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/detail/:id">
          <DetailBox />
        </Route>
        {/* <Route path="/findpet">
          <p>find pet</p>
        </Route> */}
        <Route path="/resource">
          <Resource />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </React.Suspense>
  )
}

export default Body
