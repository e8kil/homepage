import React, { Component } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import './css/App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import HumansAndAnimals from './components/HumansAndAnimals'
import Nature from './components/Nature'
import Macro from './components/Macro'
import Other from './components/Other'
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">

          <header className="App-header">
              <h1>ESKIL KLEPAKER</h1>
          </header>

          <div className="App-navigation">
                <Navigation></Navigation>
          </div>

          <div className="App-main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/HumansAndAnimals" component={HumansAndAnimals} />
              <Route path="/Nature" component={Nature} />
              <Route path="/Macro" component={Macro} />
              <Route path="/Other" component={Other} />
              <Route path="/About" component={About} />
              <Route component={Error} />
            </Switch>
          </div>

          <div className="App-footer">
            © 2019 - Eskil Klepaker
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default App;
