import React, { useState } from 'react'
import "./App.css"
import Header from './Header'
import RecommendedVideos from './RecommendedVideos'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar(value => !value);

  return (
    <div className="app">
      <Router>
        <Header toggle={handleSidebar}/>
        <Switch>
          <Route path="/">
            <div className="app__page">
              <Sidebar sidebar={sidebar}/>
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
