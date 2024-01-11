import React from "react"
import './App.css'
import {Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { RoutersList } from "./router"
import Header from "./components/header"


class App extends React.Component {

  render() {
    return <div>
      <Header/>
      <Switch>
        <Route path={RoutersList.HOME}><Home /></Route>
        <Route path={RoutersList.ABOUT}><About /></Route>
        <Route path={RoutersList.CONTACT}><Contact /></Route>
        <Redirect to={RoutersList.HOME} />
      </Switch>
      </div>
  }



}

export default App