import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import California from './california'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/ca-map">California</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/ca-map" component={California} />
    </main>
  </div>
)

export default App;
