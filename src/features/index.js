import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../components/pageError'
import PopUpBox from '../components/popup'
import DetailBox from './adoptionDetail'
import IndexPage from './adoptionInfo'

const Body = () => {
  return (
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/detail/:id">
        <DetailBox />
      </Route>
      <Route path="/needhelp">
        <p>need help</p>
        <PopUpBox />
      </Route>
      <Route path="/findpet">
        <p>find pet</p>
      </Route>
      <Route path="/map">
        <p>pet map</p>
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  )
}

export default Body
